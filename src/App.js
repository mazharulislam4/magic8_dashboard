import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./pages/account/account";
import Dashboard from "./pages/dashboard/dashboard";
import Layout from "./pages/layout/layout";
import ProductDetails from "./pages/product explorer/productDetails";
import ProductExplorer from "./pages/product explorer/productExplorer";
import Profile from "./pages/profile/profile";
import Setting from "./pages/setting/setting";
import ShopExplorer from "./pages/shop explorer/shopExplorer";
import Shop from "./pages/shop/shop";
import ShopDetails from "./pages/shop/shopDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="shop_explorer" element={<ShopExplorer />} />
          <Route path="product_explorer" element={<ProductExplorer />} />
          <Route path="shop" element={<Shop />} />
          <Route path="account" element={<Account />} />
          <Route path="setting" element={<Setting />} />
          <Route path="profile" element={<Profile />} />
          <Route path="shop_details" element={<ShopDetails />} />
          <Route path="product_details" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
