import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import GlobalLayout from "./components/GlobalLayout";
import ArchivePage from "./pages/ArchivePage.tsx";
import { queryClient } from "./query.ts";

const router = createBrowserRouter(
  [
    {
      element: <GlobalLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/archive",
          element: <ArchivePage />,
        },
      ],
    },
  ],
  {
    basename: "/day-chore/",
  },
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
