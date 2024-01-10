import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Management from "./components/management/Management";
import App from "./App";

import connexion from "./services/connexion";
// eslint-disable-next-line import/order

import AuthProvider from "./contexts/Auth";

import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import About from "./pages/About/About";
import SignUp from "./pages/signUp/SignUp";
import SignUpUser from "./pages/signUpUser/SignUpUser";
import LogIn from "./pages/logIn/LogIn";
import Terms from "./pages/terms/Terms";
import Page404 from "./pages/Page404/Page404";
import Favorite from "./components/favorite/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
        loader: () => {
          return connexion
            .get(`/recipes`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/recipes/:id",
        element: <Recipes />,
        errorElement: <Page404 />,
        loader: async ({ params }) => {
          try {
            const response = await connexion.get(`/recipes/${params.id}`);
            return response.data;
          } catch (error) {
            if (error.response && error.response.status === 404) {
              throw new Response("Not Found", { status: 404 });
            } else {
              console.error(error);
              throw new Error("Failed to fetch data");
            }
          }
        },
      },
      {
        path: "/ingredients",
        element: <Ingredients />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signupuser",
        element: <SignUpUser />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
  {
    path: "/administration/",
    element: <Admin />,
    children: [
      {
        path: "management",
        element: <Management />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
