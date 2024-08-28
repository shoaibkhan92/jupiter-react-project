import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Explore from "./pages/explore";
import WelcomeRewards from "./pages/welcome-rewards";
import WelcomeBack from "./pages/welcome-back";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/welcome-rewards",
    element: <WelcomeRewards />,
  },
  {
    path: "/welcome-back",
    element: <WelcomeBack />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);