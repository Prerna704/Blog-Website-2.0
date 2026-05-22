import React from "react";

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-luxBg text-luxText">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-luxHeading mb-8">Help Center</h1>
        <div className="space-y-6 text-luxMuted leading-7">
          <p><strong className="text-luxHeading">How do I publish a blog?</strong><br />Login, click Write, fill details, and publish.</p>
          <p><strong className="text-luxHeading">How do I edit my blog?</strong><br />Open My Blogs and choose Edit.</p>
          <p><strong className="text-luxHeading">Profile image issue?</strong><br />Try images below 20MB and supported formats like JPG/PNG.</p>
          <p><strong className="text-luxHeading">Need more help?</strong><br />Use the Contact page to reach support.</p>
        </div>
      </div>
    </div>
  );
}
