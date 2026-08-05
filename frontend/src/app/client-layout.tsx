"use client";

import { useState, type ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthModal from "@/components/modals/AuthModal";
import CareerModal from "@/components/modals/CareerModal";
import { TestProvider } from "@/context/TestContext";
import { type ProfileKey } from "@/lib/test-data";

export default function ClientLayout({ children }: { children: ReactNode }) {
  // Auth modal state
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  // Career modal state
  const [careerOpen, setCareerOpen] = useState(false);
  const [careerProfile, setCareerProfile] = useState<ProfileKey | null>(null);

  function openAuth(mode: "login" | "signup") {
    setAuthMode(mode);
    setAuthOpen(true);
  }

  function openCareer(profileKey: string) {
    setCareerProfile(profileKey as ProfileKey);
    setCareerOpen(true);
  }

  return (
    <TestProvider>
      <Navbar onOpenAuth={openAuth} />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />

      {/* Modals */}
      <AuthModal
        isOpen={authOpen}
        initialMode={authMode}
        onClose={() => setAuthOpen(false)}
      />
      <CareerModal
        isOpen={careerOpen}
        profileKey={careerProfile}
        onClose={() => setCareerOpen(false)}
      />
    </TestProvider>
  );
}
