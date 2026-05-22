import React from "react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-luxBg text-luxText">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-luxHeading mb-8">Terms of Service</h1>
        <div className="space-y-6 text-luxMuted leading-7">
          <p>Users are responsible for the content they publish and must avoid harmful, illegal, or plagiarized material.</p>
          <p>Accounts may be restricted or removed if platform rules are repeatedly violated.</p>
          <p>We may update features and policies over time to improve reliability and security.</p>
          <p>Using the platform means you accept these terms and future updates.</p>
        </div>
      </div>
    </div>
  );
}
