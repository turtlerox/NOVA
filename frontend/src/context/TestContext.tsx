"use client";

/**
 * NOVA — Test Context
 * Gestión de estado global del test vocacional entre páginas.
 */

import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type ProfileKey, questionsData } from "@/lib/test-data";
import { calculateTestResults, type TestResults } from "@/lib/scoring";

interface TestContextType {
  // Estado del test
  currentQuestionIndex: number;
  selectedAnswers: Record<number, ProfileKey>;
  results: TestResults | null;
  totalQuestions: number;

  // Acciones
  selectAnswer: (questionId: number, profile: ProfileKey) => void;
  nextQuestion: () => boolean; // retorna true si hay siguiente, false si es la última
  prevQuestion: () => void;
  finishTest: () => TestResults;
  resetTest: () => void;

  // Helpers
  isLastQuestion: boolean;
  progressPercent: number;
  hasAnsweredCurrent: boolean;
}

const TestContext = createContext<TestContextType | null>(null);

export function TestProvider({ children }: { children: ReactNode }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, ProfileKey>>({});
  const [results, setResults] = useState<TestResults | null>(null);

  const totalQuestions = questionsData.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
  const currentQuestion = questionsData[currentQuestionIndex];
  const hasAnsweredCurrent = currentQuestion ? !!selectedAnswers[currentQuestion.id] : false;

  const selectAnswer = useCallback((questionId: number, profile: ProfileKey) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: profile }));
  }, []);

  const nextQuestion = useCallback((): boolean => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      return true;
    }
    return false;
  }, [currentQuestionIndex, totalQuestions]);

  const prevQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }, [currentQuestionIndex]);

  const finishTest = useCallback((): TestResults => {
    const testResults = calculateTestResults(selectedAnswers);
    setResults(testResults);
    return testResults;
  }, [selectedAnswers]);

  const resetTest = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setResults(null);
  }, []);

  return (
    <TestContext.Provider
      value={{
        currentQuestionIndex,
        selectedAnswers,
        results,
        totalQuestions,
        selectAnswer,
        nextQuestion,
        prevQuestion,
        finishTest,
        resetTest,
        isLastQuestion,
        progressPercent,
        hasAnsweredCurrent,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export function useTest(): TestContextType {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTest must be used within a TestProvider");
  }
  return context;
}
