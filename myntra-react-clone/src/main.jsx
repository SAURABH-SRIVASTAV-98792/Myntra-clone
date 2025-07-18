import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
// ✅ added
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> }, // ✅ added route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
