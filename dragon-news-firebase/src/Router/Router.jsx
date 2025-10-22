import { createBrowserRouter } from "react-router";
import Homelayout from "../layout/Homelayout";
import Home from "../Page/Home";
import CaterogyNews from "../Page/CaterogyNews";
import Login from "../Page/Login";
import Rigester from "../Page/Rigester";
import AuthLayout from "../layout/AuthLayout";
import NewsDetlise from "../Page/NewsDetlise";
import PrivetRoute from "../provider/PrivetRoute";
import Loding from "../Components/Loding";
import PasswordReset from "../Components/PasswordReset";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("/news.json") ,
    element: <Homelayout></Homelayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/caterogy/:id",
        element: <CaterogyNews></CaterogyNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loding></Loding>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/rigster",
        element: <Rigester></Rigester>,
      },
    ],
  },
  {
    path: "/news_detlis/:id",
    loader: () => fetch("/news.json"),
    element: <PrivetRoute>
      <NewsDetlise></NewsDetlise>
    </PrivetRoute>,
    hydrateFallbackElement:<Loding></Loding>
  },
  // {
  //   path:"/reset",
  //   element: <PasswordReset></PasswordReset>
  // },
  {
    path: "/*",
    element: <h2>This Page Not Found 404</h2>,
  },
]);
