import React from "react";
import ReactDOM from "react-dom/client";
import Skeleton from "./Components/Skeleton/Skeleton";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body/Body";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import Results from "./Components/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Skeleton />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "buscador",
        element: <Results />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
