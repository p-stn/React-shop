import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./../pages/Home";
// import Home from "./../pages/Home/index";
// import Products from "../pages/Products";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
