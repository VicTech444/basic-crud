import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { routes } from "./routes/routes";
import { Header } from "./components/Header";

function App() {
  let query = new QueryClient();

  return (
    <QueryClientProvider client={query}>
      {/*TanStack Dev Tools << */}
      <Header />
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}

export default App;
