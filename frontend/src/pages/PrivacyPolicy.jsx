import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-luxBg text-luxText">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-luxHeading mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-luxMuted leading-7">
          <p>We collect basic account details like name, email, and profile image to run your account and personalize your experience.</p>
          <p>Your content (blogs, comments, likes) is stored to provide platform features and improve recommendations.</p>
          <p>We do not sell your personal data. You can request account deletion by contacting support.</p>
          <p>By continuing to use MediumLite, you agree to this data usage policy.</p>
        </div>
      </div>
    </div>
  );
}
