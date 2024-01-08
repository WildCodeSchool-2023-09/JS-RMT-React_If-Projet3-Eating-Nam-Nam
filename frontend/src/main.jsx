import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Management from "./components/management/Management";
import App from "./App";
import AuthProvider from "./contexts/Auth";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import About from "./pages/About";
import SignUp from "./pages/signUp/SignUp";
import SignUpUser from "./pages/signUp/SignUpUser";
import LogIn from "./pages/logIn/LogIn";
import Terms from "./pages/terms/Terms";

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
