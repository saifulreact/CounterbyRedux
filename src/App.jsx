import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import LayoutOne from "./layouts/LayoutOne"
import Home from "./pages/home/Home"


function App() {
  const myroute=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Route>
    )
  )
  return (
    < >
     <RouterProvider router={myroute}/>
    </>
  )
}

export default App
