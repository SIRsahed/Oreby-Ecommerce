import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayOut from "./components/RootLayOut"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import ProductDetails from "./Pages/ProductDetails"
import Cart from "./Pages/Cart"
import ErrorPage from "./Pages/ErrorPage"
import { useEffect, useState, CSSProperties } from "react"
import { ClockLoader } from "react-spinners"


let cssoverride = {
  display: "block",
  backgroundColor: "#333333",
  borderColor: "#36d7b7",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}


function App() {
  let [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayOut />}>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ))
  return (
    <>
      <div className="">
        {
          loading ?
            <ClockLoader	
              color={'#36d7b7'}
              loading={loading}
              size={100}
              cssOverride={cssoverride}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            :
            <RouterProvider router={router} />
        }
      </div>
    </>
  )
}

export default App
