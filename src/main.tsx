import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CategoryProvider } from "../src/context/CategoryContext";
import App from "./App.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CategoryProvider>
        <App />
        <ReactQueryDevtools />
      </CategoryProvider>
    </QueryClientProvider>
  </StrictMode>
);
