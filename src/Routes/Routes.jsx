import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import RequestFood from "../Pages/RequestFood/RequestFood";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/availableFoods/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/requestFood",
        element: (
          <PrivateRoute>
            <RequestFood></RequestFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
