"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { trpc } from "server/src/utils/client";

export function TrpcProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const executionEngineBeUrl =
    process.env.DEV_ENV === "production"
      ? "https://api-algo-hub.adityastack.dev/api/trpc"
      : "http://localhost:4000/api/trpc";
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: executionEngineBeUrl,
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
