import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalLayout from "./components/GlobalLayout";
import ArchiveDayChorePage from "./pages/ArchiveDayChorePage.tsx";
import ArchivePage from "./pages/ArchivePage.tsx";
import ChoreBoardPage from "./pages/ChoreBoardPage.tsx";
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
