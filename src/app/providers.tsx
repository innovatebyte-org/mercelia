import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "@/lib/react-query";
import { ErrorFallback } from "@/components/error";
import { AuthContextProvider } from "@/store/authContext";

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>{children}</AuthContextProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
