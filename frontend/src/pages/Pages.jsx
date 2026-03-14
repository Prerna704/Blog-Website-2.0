import React from "react";

export default function Pages() {
  const pages = [
    {
      title: "Privacy Policy",
      description: "Learn how we protect your data and privacy.",
      icon: "🔒"
    },
    {
      title: "Terms of Service",
      description: "Read our terms and conditions for using the platform.",
      icon: "📋"
    },
    {
      title: "Help Center",
      description: "Find answers to frequently asked questions.",
      icon: "❓"
    },
    {
      title: "Community Guidelines",
      description: "Understand our community standards and rules.",
      icon: "👥"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers.",
      icon: "⚙️"
    },
    {
      title: "Careers",
      description: "Join our team and help build the future.",
      icon: "💼"
    }
  ];

  return (
    <div className="min-h-screen bg-luxBg text-luxText">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-luxHeading mb-4">Pages</h1>
          <p className="text-xl text-luxMuted max-w-2xl mx-auto">
            Explore all the important pages and resources available on MediumLite.
            Find what you need quickly and easily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <div
              key={index}
              className="bg-luxSurface border border-luxBorder rounded-2xl p-8 hover:border-luxAccent transition cursor-pointer group"
            >
              <div className="text-4xl mb-4">{page.icon}</div>
              <h3 className="text-xl font-semibold text-luxHeading mb-3 group-hover:text-luxAccent transition">
                {page.title}
              </h3>
              <p className="text-luxMuted">
                {page.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 bg-luxSurface border border-luxBorder rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-luxHeading mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-luxHeading mb-3">For Writers</h3>
              <ul className="space-y-2 text-luxMuted">
                <li className="hover:text-luxAccent cursor-pointer transition">• Writing Guidelines</li>
                <li className="hover:text-luxAccent cursor-pointer transition">• Monetization Options</li>
                <li className="hover:text-luxAccent cursor-pointer transition">• Editorial Calendar</li>
                <li className="hover:text-luxAccent cursor-pointer transition">• Partner Program</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-luxHeading mb-3">For Readers</h3>
              <ul className="space-y-2 text-luxMuted">
                <li className="hover:text-luxAccent cursor-pointer transition">• Reading Lists</li>
                <li className="hover:text-luxAccent cursor-pointer transition">• Newsletter Signup</li>
                <li className="hover:text-luxAccent cursor-pointer transition">• Bookmarks</li>
                <li className="hover:text-luxAccent cursor-pointer transition">• Following Authors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}