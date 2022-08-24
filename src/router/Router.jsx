import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Shop />} />
            <Route path = "/cart" element = {<Cart />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router