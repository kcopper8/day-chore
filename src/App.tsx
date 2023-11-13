import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Dashboard />,
    },
  ],
  {
    basename: "/day-chore/",
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
