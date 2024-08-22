import { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div
    className="flex h-screen w-screen items-center justify-center text-red-500"
    role="alert"
  >
    <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
    <p>{error.message}</p>
    <button className="mt-4" onClick={resetErrorBoundary}>
      Refresh
    </button>
  </div>
);
