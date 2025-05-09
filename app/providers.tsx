"use client";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { AppStateProvider } from "@/components/context-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <AppStateProvider>
            <TooltipProvider delayDuration={200}>
              {children}
              <Toaster position="bottom-left" richColors closeButton />
            </TooltipProvider>
          </AppStateProvider>
        </ThemeProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
};

export default Providers;
