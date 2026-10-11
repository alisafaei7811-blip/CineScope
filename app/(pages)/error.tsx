"use client";

import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { reset: resetQuery } = useQueryErrorResetBoundary();

  useEffect(() => {
    resetQuery();
  }, [resetQuery]);

  return (
    <div className="mt-10 text-center">
      <p className="text-red-400">
        Something went wrong: {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}