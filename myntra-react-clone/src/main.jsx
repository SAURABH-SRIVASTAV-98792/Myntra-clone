import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
// ✅ added
import Home from "./routes/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/bag", element: <Bag /> }, // ✅ added route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
