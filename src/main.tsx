// import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "./styles/ThemeProvider"
import { StrictMode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </QueryClientProvider>
)
