import React from 'react';

function ProductModal({ product}) {
  return (
    <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="productModalLabel">{product?.name}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-4">
              <img src={product?.image} className="img-fluid" alt="product image" />
            </div>
            <div className="col-md-8">
            <p className="h4">{product?.title}</p>
              <p>{product?.description}</p>
              <p className="h4">${product?.price}</p>
              <div className="star-rating mb-2">
            {Array.from({ length: 5 }, (_, index) => {
          const fullStars = Math.floor(product?.rating.rate);
          const isHalf = product?.rating.rate % 1 >= 0.25 && product.rating.rate % 1 < 0.75;
          if (index < fullStars) {
            return <i key={index} className="bi bi-star-fill text-warning me-1"></i>;
          } else if (index === fullStars && isHalf) {
            return <i key={index} className="bi bi-star-half text-warning me-1"></i>;
          } else {
            return <i key={index} className="bi bi-star text-warning me-1"></i>;
          }
        })}
        </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductModal;