import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-luxBg text-luxText">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-luxHeading mb-8">About MediumLite</h1>

        <div className="prose prose-lg max-w-none text-luxText">
          <p className="mb-6">
            Welcome to <strong className="text-luxAccent">MediumLite</strong>, a modern blogging platform
            designed for writers, thinkers, and creators who want to share their stories with the world.
          </p>

          <p className="mb-6">
            Our mission is to provide a clean, distraction-free writing experience while fostering a
            community of engaged readers and thoughtful discussions.
          </p>

          <h2 className="text-2xl font-semibold text-luxHeading mt-12 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Intuitive writing interface with rich text editing</li>
            <li>Community-driven content discovery</li>
            <li>Interactive features like likes and comments</li>
            <li>Personalized reading experience</li>
            <li>Secure user authentication and profile management</li>
          </ul>

          <h2 className="text-2xl font-semibold text-luxHeading mt-12 mb-4">Our Story</h2>
          <p className="mb-6">
            MediumLite was born from the desire to create a blogging platform that prioritizes
            content quality over flashy features. We believe that great writing deserves a great
            platform, and that's exactly what we've built.
          </p>

          <p>
            Join thousands of writers and readers who have made MediumLite their home for
            sharing ideas, stories, and perspectives that matter.
          </p>
        </div>
      </div>
    </div>
  );
}