"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTest } from "@/context/TestContext";
import { questionsData } from "@/lib/test-data";
import QuestionSvg from "@/components/ui/QuestionSvg";

export default function TestPage() {
  const router = useRouter();
  const {
    currentQuestionIndex,
    selectedAnswers,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    finishTest,
    isLastQuestion,
    progressPercent,
    hasAnsweredCurrent,
  } = useTest();

  const question = questionsData[currentQuestionIndex];
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll directly to the question card on mobile
    if (window.innerWidth < 1024 && cardRef.current) {
      setTimeout(() => {
        const yOffset = -64; // offset exacto para la navbar en móvil
        const element = cardRef.current;
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 250);
    }
  }, [currentQuestionIndex]); // Trigger scroll on mount and when question changes

  function handleNext() {
    if (!hasAnsweredCurrent) {
      alert("Por favor, selecciona una opción antes de continuar.");
      return;
    }

    if (isLastQuestion) {
      finishTest();
      router.push("/cargando");
    } else {
      nextQuestion();
    }
  }

  return (
    <div className="page-enter max-w-[1200px] mx-auto px-[16px] md:px-[40px] py-6 md:py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-secondary font-label text-xs tracking-widest uppercase font-bold block mb-2">
          Motor Holland · Lógica Difusa · NOVA
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-primary font-extrabold">
          5 preguntas. Tu perfil de por vida.
        </h2>
      </div>

      {/* Test Card */}
      <div ref={cardRef} className="bg-white rounded-3xl p-5 md:p-8 border border-outline-variant/30 blue-soft-shadow max-w-4xl mx-auto">
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
          <div className="font-label text-sm font-bold text-primary uppercase">
            Pregunta {currentQuestionIndex + 1} de {questionsData.length}
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-full sm:w-48 h-2.5 bg-surface-container-high rounded-full overflow-hidden">
              <div
                className="h-full teal-gradient rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="font-label text-xs font-bold text-secondary shrink-0">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* Question Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6 min-h-[250px]">
          {/* SVG Illustration */}
          <div className="md:col-span-5 flex items-center justify-center p-4 bg-surface-container-low rounded-2xl h-full min-h-[180px]">
            <QuestionSvg svgId={question.svgId} />
          </div>

          {/* Question + Options */}
          <div className="md:col-span-7 flex flex-col h-full justify-center">
            <h3 className="font-display text-xl md:text-2xl font-bold text-primary mb-4">
              {question.question}
            </h3>

            <div className="flex flex-col gap-2">
              {question.options.map((opt) => {
                const isSelected = selectedAnswers[question.id] === opt.profile;
                return (
                  <div
                    key={opt.key}
                    className={`option-card p-4 rounded-2xl flex items-center gap-3 ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() => selectAnswer(question.id, opt.profile)}
                  >
                    <div className="option-circle">{opt.key}</div>
                    <span className="font-label text-sm font-semibold text-primary leading-tight">
                      {opt.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="flex justify-between items-center border-t border-outline-variant/20 pt-6">
          <button
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 text-on-surface-variant font-label text-sm font-bold hover:text-secondary disabled:opacity-30 disabled:hover:text-on-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span> Anterior
          </button>

          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-full font-label text-sm font-bold btn-dark flex items-center gap-2"
          >
            {isLastQuestion ? "Finalizar" : "Siguiente"}{" "}
            <span className="material-symbols-outlined text-[18px]">
              {isLastQuestion ? "done_all" : "arrow_forward"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
