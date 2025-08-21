"use client";

import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react-core";

export default function Home() {
  const { user, handleLogOut } = useDynamicContext();

  // If user is not logged in, show the login interface
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-2xl font-bold mb-8">
          Welcome to your Dynamic Webapp
        </div>
        <DynamicWidget />
      </div>
    );
  }

  // If user is logged in, show the main app content
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className="text-2xl font-bold">Welcome to your Dynamic Webapp</div>

      {/* Navigation buttons */}
      <div className="flex flex-col gap-2">
        <a
          href="/send"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Send
        </a>
        <a
          href="/receive"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-center"
        >
          Receive
        </a>
      </div>

      <button
        onClick={handleLogOut}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  );
}
