import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Applayout from "./Applayout";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import Cart from "./features/cart_t/Cart";
import Error from "./pages/Error";
import DetailsProduct from "./pages/DetailsProduct";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <MyProfile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:productId",
        element: <DetailsProduct />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
