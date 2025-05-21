import React from 'react';
import { decrementCart, incrementCart, removeFromCart } from '../../Redux/E-commerce/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';

function CartPage() {
  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer);
  const cartData = cartReducer?.items || [];
  console.log(cartData, 'productData');

  const loading = cartReducer?.loading;
  const error = cartReducer?.error;

  if (loading) {
    return <div className="p-4">Loading products...</div>;
  }

  if (error) {
    return <div className="p-4 text-danger">Error: {error}</div>;
  }

  if (cartData.length === 0) {
    return <div className="p-4">No products available.</div>;
  }

  const totalPrice = cartData.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);

  return (
    <>
      <div className="container px-3 my-5 clearfix">
        <div className="card">
          <div className="card-header">
            <h2>Shopping Cart</h2>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered m-0">
                <thead>
                  <tr>
                    <th className="text-center py-3 px-4" style={{ minWidth: '400px' }}>Product Name &amp; Details</th>
                    <th className="text-right py-3 px-4" style={{ width: '100px' }}>Price</th>
                    <th className="text-center py-3 px-4" style={{ width: '120px' }}>Quantity</th>
                    <th className="text-right py-3 px-4" style={{ width: '100px' }}>Total</th>
                    <th className="text-center align-middle py-3 px-0" style={{ width: '40px' }}>
                      <a href="#" className="shop-tooltip float-none text-light" title="Clear cart">
                        <i className="ino ion-md-trash"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((product, index) => (
                    <tr key={index}>
                      <td className="p-4">
                        <div className="media ">
                          <img src={product.image} className="d-block ui-w-40 ui-bordered mr-4" alt="" style={{ width: '50px', height: '50px' }} />                        <div className="media-body">
                            <a href="#" className="d-block text-dark">{product.title}</a>
                          </div>
                        </div>
                      </td>
                      <td className="text-right font-weight-semibold align-middle p-4">${product.price}</td>
                      <td className=" p-4 d-flex align-middle justify-content-center align-items-center mt-4">
                        <button className='bg-primary text-white me-2 ms-1' onClick={() => dispatch(decrementCart(product.id))}>-</button>
                        <span>{product.quantity}</span>
                        <button className='bg-primary text-white ms-2 me-1' onClick={() => dispatch(incrementCart(product.id))}>+</button>

                      </td>
                      <td className="text-right font-weight-semibold align-middle p-4">${(product.price * product.quantity).toFixed(2)}</td>
                      <td className="text-center align-middle px-0">
                        <button className="btn btn-outline-danger p-0 border-0 bg-transparent" onClick={() => dispatch(removeFromCart(product.id))}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>


              <div className='d-flex justify-content-between'>
                <div className="float-right mt-2">
                  <Link to="/" className="btn btn-lg btn-default md-btn-flat mt-2 mr-3">Back to shopping</Link>
                  <button type="button" className="btn btn-lg btn-primary mt-2">Checkout</button>
                </div>

                <div className="text-right mt-2 pt-1">
                  <label className="text-muted font-weight-normal">Total price</label>
                  <div className="text-large"><strong>${totalPrice.toFixed(2)}</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage;