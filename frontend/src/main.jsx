import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Management from "./components/management/Management";
import App from "./App";

import connexion from "./services/connexion";
import AuthProvider from "./contexts/Auth";

import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/recipe/Recipe";
import Ingredients from "./pages/Ingredients";
import AddIngredients from "./pages/AddIngredients";
import FormRecipes from "./components/formrecipes/FormRecipes";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/signUp/SignUp";
import SignUpUser from "./pages/signUpUser/SignUpUser";
import LogIn from "./pages/logIn/LogIn";
import Terms from "./pages/terms/Terms";
import Page404 from "./pages/Page404/Page404";
import Dashboard from "./components/dashboard/Dashboard";
import Favorites from "./components/favorite/Favorite";

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
        element: <Recipe />,
        errorElement: <Page404 />,
        loader: async ({ params }) => {
          const recipes = await connexion
            .get(`/recipes/${params.id}`)
            .then((response) => response.data);
          return { recipes };
        },
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/ingredients",
        element: <Ingredients />,
        loader: () => {
          return connexion
            .get(`/ingredients`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/addingredients",
        element: <AddIngredients />,
      },
      {
        path: "/addrecipes",
        element: <FormRecipes />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
        path: "/administration/",
        element: <Dashboard />,
      },
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
