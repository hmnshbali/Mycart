
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, fetchProducts } from '../../Redux/E-commerce/action';
import ProductModal from '../ProductModal/productModal';
import './Product.css';
import { useParams } from 'react-router';

function Product() {
  const dispatch = useDispatch();
  const productReducer = useSelector((state) => state.getProductReducer);
  const productData = productReducer?.data || [];
  const loading = productReducer?.loading;
  const error = productReducer?.error;
  const searchQuery = useSelector((state) => state.searchQuery);
  const category = useSelector((state) => state.category);
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { filterType } = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = productData.filter((product) => {
  const productName = product.name?.toLowerCase() || '';
  const productCategory = product.category?.toLowerCase() || '';
  const search = searchQuery.toLowerCase();

  return (
    (productName.includes(search) || product.description.toLowerCase().includes(search)) &&
    (category === '' || productCategory === category.toLowerCase())
  );
});
  if (loading) {
    return (
      <div className="loading-wave d-flex justify-content-center">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    );
  }

  if (error) {
    return <div className="p-4 text-danger">Error: {error}</div>;
  }

  if (!Array.isArray(filteredProducts) || filteredProducts.length === 0) {
    return <div className="p-4">No products available.</div>;
  }

  return (
    <>
      <div className="d-flex flex-wrap gap-4 p-4 justify-content-center">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <a href="#" onClick={() => setSelectedProduct(product)} data-bs-toggle="modal" data-bs-target="#productModal">
              <img src={product.image} className="product-img" alt="product image" />
            </a>
            <div className="product-body">
              <div className="product-title">{product.name}</div>
              <div className="product-desc">{product.description}</div>
              <div className="product-price">${product.price}</div>
              <button className="add-to-cart" onClick={() => dispatch(addToCart(product.id))}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} />}
    </>
  );
}

export default Product;