import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ApiServiceProvider from "./components/ApiServiceProvider";
import GlobalLayout from "./components/GlobalLayout";
import ArchiveDayChorePage from "./pages/ArchiveDayChorePage.tsx";
import ArchivePage from "./pages/ArchivePage.tsx";
import ChoreBoardPage from "./pages/ChoreBoardPage.tsx";
import EditChorePage from "./pages/EditChorePage.tsx";
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
        {
          path: "/chore",
          element: <ChoreBoardPage />,
        },
        {
          path: "/chore/:id",
          element: <EditChorePage />,
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
    <>
      <CssBaseline />
      <ApiServiceProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ApiServiceProvider>
    </>
  );
}

export default App;
