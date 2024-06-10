import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayOut from "./components/RootLayOut"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import ProductDetails from "./Pages/ProductDetails"
import Cart from "./Pages/Cart"
import ErrorPage from "./Pages/ErrorPage"
import { ClockLoader } from "react-spinners"
import Checkout from "./Pages/Checkout"

function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayOut />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
