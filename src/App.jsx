import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayOut from "./components/RootLayOut"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"


function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayOut/>}>
       <Route path="/" element={<Home/>}/>
       <Route path="/shop" element={<Shop/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
