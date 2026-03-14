import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-luxBg text-luxText">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-luxHeading mb-4">Contact Us</h1>
          <p className="text-xl text-luxMuted max-w-2xl mx-auto">
            Have questions, feedback, or need support? We'd love to hear from you.
            Get in touch and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-luxSurface border border-luxBorder rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-luxHeading mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-luxHeading mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-luxBg border border-luxBorder rounded-lg text-luxText placeholder-luxMuted focus:outline-none focus:border-luxAccent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-luxHeading mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-luxBg border border-luxBorder rounded-lg text-luxText placeholder-luxMuted focus:outline-none focus:border-luxAccent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-luxHeading mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-luxBg border border-luxBorder rounded-lg text-luxText placeholder-luxMuted focus:outline-none focus:border-luxAccent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-luxHeading mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-luxBg border border-luxBorder rounded-lg text-luxText placeholder-luxMuted focus:outline-none focus:border-luxAccent resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-luxAccent text-luxBg font-medium rounded-lg hover:opacity-90 transition shadow-lg shadow-emerald-500/20"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-luxSurface border border-luxBorder rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-luxHeading mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-luxHeading">Email</h3>
                    <p className="text-luxMuted">support@mediumlite.com</p>
                    <p className="text-luxMuted">business@mediumlite.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-semibold text-luxHeading">Phone</h3>
                    <p className="text-luxMuted">+1 (555) 123-4567</p>
                    <p className="text-sm text-luxMuted">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-luxHeading">Address</h3>
                    <p className="text-luxMuted">
                      123 Writing Street<br />
                      Content City, CC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-luxSurface border border-luxBorder rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-luxHeading mb-4">Follow Us</h2>
              <p className="text-luxMuted mb-6">
                Stay connected and get the latest updates from MediumLite.
              </p>

              <div className="flex space-x-4">
                {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((platform) => (
                  <button
                    key={platform}
                    className="px-4 py-2 bg-luxBg border border-luxBorder rounded-lg text-luxText hover:border-luxAccent transition"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}