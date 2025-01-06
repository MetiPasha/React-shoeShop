import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/onboarding/Loadingg.tsx";
import Welcome from "./components/onboarding/Welcome.tsx";
import Slide1 from "./components/onboarding/Slide1.tsx";
import Slide2 from "./components/onboarding/Slide2.tsx";
import Slide3 from "./components/onboarding/Slide3.tsx";
import ProductDetail from "./components/ProductDetail/ProductDtail.tsx";
import Home from "./components/Home.tsx";
import BrandProducts from "./components/BrandProducts.tsx";
import SearchResults from "./components/Search/Searchresults.tsx";
import Favorites from "./components/Faivorites/Faivorites.tsx";
import AllProducts from "./components/Seeall/AllProducts.tsx";
import Login from "./components/Login/Login.tsx";
import Register from "./components/Login/Register.tsx";
import ResetPassword from "./components/Login/ResetPassword.tsx";
import Cart from "./components/Cart/Cart.tsx";
import CartProvider from "./components/Context/CartContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./components/Context/auth.tsx";
import { Provider } from "react-redux";
import store from "./components/Store/index.tsx";
import Checkout from "./components/Checkout/Checkout.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <CartProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Loading />} />
              <Route path="/home" index element={<Home />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/slide1" element={<Slide1 />} />
              <Route path="/slide2" element={<Slide2 />} />
              <Route path="/slide3" element={<Slide3 />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/ResetPassword" element={<ResetPassword />} />
              <Route path="/products/:brand" element={<BrandProducts />} />
              <Route path="/search/:query" element={<SearchResults />} />
              <Route path="/products/all" element={<AllProducts />} />
              <Route path="/productdetail/:id" element={<ProductDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </Provider>
  </QueryClientProvider>
);
