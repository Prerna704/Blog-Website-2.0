import React from "react";

export default function ApiDocumentation() {
  return (
    <div className="min-h-screen bg-luxBg text-luxText">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-luxHeading mb-8">API Documentation</h1>
        <div className="space-y-6 text-luxMuted leading-7">
          <p>Base URL: <code className="text-luxHeading">/api</code></p>
          <p>Auth routes: <code className="text-luxHeading">/api/auth/register</code>, <code className="text-luxHeading">/api/auth/login</code></p>
          <p>Blog routes: <code className="text-luxHeading">/api/blogs</code>, create/update/delete endpoints for authenticated users.</p>
          <p>Upload route: <code className="text-luxHeading">/api/auth/update-profile</code> with multipart field <code className="text-luxHeading">profilePic</code>.</p>
        </div>
      </div>
    </div>
  );
}
