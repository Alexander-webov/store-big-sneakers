import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Applayout from "./Applayout";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import Cart from "./features/cart/Cart";
import Error from "./pages/Error";
import DetailsProduct from "./pages/DetailsProduct";
import Checkout from "./pages/Checkout";

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
        path: "/AllProducts",
        element: <AllProducts />,
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
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
