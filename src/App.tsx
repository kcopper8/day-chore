import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import GlobalLayout from "./components/GlobalLayout";
import ArchiveDayChorePage from "./pages/ArchiveDayChorePage.tsx";
import ArchivePage from "./pages/ArchivePage.tsx";
import TodayChorePage from "./pages/TodayChorePage.tsx";
import { queryClient } from "./query.ts";

const router = createBrowserRouter(
  [
    {
      element: <GlobalLayout />,
      children: [
        {
          path: "/",
          element: <TodayChorePage />,
        },
        {
          path: "/archive",
          element: <ArchivePage />,
        },
        {
          path: "/archive/:date",
          element: <ArchiveDayChorePage />,
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
