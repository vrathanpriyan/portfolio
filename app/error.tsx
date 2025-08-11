"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black/80 text-white">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-8">{error.message || "An unexpected error occurred."}</p>
      <button
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
