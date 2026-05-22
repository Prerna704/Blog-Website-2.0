import React from "react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-luxBg text-luxText">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-luxHeading mb-8">Careers</h1>
        <div className="space-y-6 text-luxMuted leading-7">
          <p>We are looking for builders who care about writing, design, and developer experience.</p>
          <p>Open roles: Frontend Engineer, Backend Engineer, Product Designer, and Community Manager.</p>
          <p>Send your resume and portfolio to <span className="text-luxHeading">careers@mediumlite.com</span>.</p>
          <p>Remote-first culture, ownership mindset, and meaningful impact from day one.</p>
        </div>
      </div>
    </div>
  );
}
