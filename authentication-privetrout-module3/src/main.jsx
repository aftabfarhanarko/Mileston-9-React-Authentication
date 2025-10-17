import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Hom from "./Components/Home/Hom.jsx";
import Loging from "./Components/Loging/Loging.jsx";
import Register from "./Components/Register/Register.jsx";
import ContextProvider from "./context/ContextProvider/ContextProvider.jsx";
import Producat from "./Components/Producat/Producat.jsx";
import Order from "./Components/Producat/Order.jsx";
import PrivetRouter from "./Components/PrivetRouter/PrivetRouter.jsx";
import Stors from "./Components/Stors.jsx";
import MySQl from "./Components/MySQl.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Hom,
      },
      {
        path: "/loging",
        Component: Loging,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/producat",
        element: <PrivetRouter>
          <Producat></Producat>
        </PrivetRouter>
      },
      {
        path: "/oders",
        element:<PrivetRouter>
          <Order></Order>
        </PrivetRouter>
      },
      {
        path: "/bord",
        element:<PrivetRouter>
          <Order></Order>
        </PrivetRouter>
      },
      {
        path: "/store",
        element:<PrivetRouter>
          <Stors></Stors>
        </PrivetRouter>
      },
      {
        path: "/sql",
        element:<PrivetRouter>
          <MySQl></MySQl>
        </PrivetRouter>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </StrictMode>
);
