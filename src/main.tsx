import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/onboarding/Loadingg.tsx";
import Welcome from "./components/onboarding/Welcome.tsx";
import Slide2 from "./components/onboarding/Slide2.tsx";
import Slide1 from "./components/onboarding/Slide1.tsx";
import Slide3 from "./components/onboarding/Slide3.tsx";
import ProductDetail from "./components/ProductDetail/ProductDtail.tsx";
import Home from "./components/Home.tsx";
import BrandProducts from "./components/BrandProducts.tsx";
import SearchResults from "./components/Search/Searchresults.tsx";
import Favorites from "./components/Faivorites/Faivorites.tsx";
import AllProducts from "./components/Seeall/AllProducts.tsx";
import Login from "./components/Login/Login.tsx";
import Register from "./components/Login/Register.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/home" index element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/slide1" element={<Slide1 />} />
      <Route path="/slide2" element={<Slide2 />} />
      <Route path="slide3" element={<Slide3 />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/products/:brand" element={<BrandProducts />} />
      <Route path="/search/:query" element={<SearchResults />} />
      <Route path="/products/all" element={<AllProducts />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </BrowserRouter>
);
