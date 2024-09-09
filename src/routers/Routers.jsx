import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductSubNamePage from "../pages/ProductSubNamePage";
import ProductDetail from "../pages/ProductDetail";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:name" element={<ProductPage />} />
            <Route path="/:name/:subname" element={<ProductSubNamePage />} />
            <Route path="/:name/:subname/:id" element={<ProductDetail />} />
        </Routes>
    )   
}

export default Routers;