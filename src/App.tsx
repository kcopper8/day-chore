import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <h1>Vite + React</h1>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      ),
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
