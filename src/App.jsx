import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/E-commerce/action';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Productscard/product';
import CartPage from './components/CartPage/cartPage';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const productReducer = store?.getProductReducer;
  const productData = productReducer?.data;
  console.log(productData, 'productData');


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<Product />} />
        <Route path="/products/:filterType" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 