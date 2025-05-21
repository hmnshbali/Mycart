import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation, Navigate, useSearchParams } from 'react-router-dom';
import { setCategory, setSearchQuery } from '../../Redux/E-commerce/action';

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.items);
  const { filterType } = useParams();
  const category = useSelector((state) => state.category);
  const searchQuery = useSelector((state) => state.searchQuery);
  const [searchParams, setSearchParams] = useSearchParams();

  // const cat = searchParams.get('category');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (category === '') {
      setSearchParams({});
      dispatch(setCategory(''));

    } else {
      setSearchParams({ category });
      dispatch(setCategory(e.target.value));
    }
  };

  

  const handleSearchChange = (e) => {
    const searchQuery=e.target.value;
    if(searchQuery===''){
      setSearchParams({});
      dispatch(setSearchQuery(''));
    }else{
      setSearchParams({searchQuery});
      dispatch(setSearchQuery(e.target.value));
    }
  };
    
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top ">
        <div className="container py-2 ms-5 ps-5">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <svg className="me-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8C17.6569 8 19 6.65685 19 5C19 3.34315 17.6569 2 16 2C14.3431 2 13 3.34315 13 5C13 6.65685 14.3431 8 16 8Z" fill="#3B82F6" />
              <path d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="#3B82F6" />
              <path d="M16 30C17.6569 30 19 28.6569 19 27C19 25.3431 17.6569 24 16 24C14.3431 24 13 25.3431 13 27C13 28.6569 14.3431 30 16 30Z" fill="#3B82F6" />
            </svg>
            <span className="h5 mb-0">Mycart</span>
          </a>    
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>      

          <div className="">
            <select value={category} onChange={handleCategoryChange}>
              <option value="">All Categories</option>
              <option value="Men's Clothing">Men's Clothing</option>
              <option value="Jewelery">Jewelery</option>
              <option value="Electronics">Electronics</option>
              <option value="Women's Clothing">Women's Clothing</option>
            </select>
          </div>
          <form className="d-flex me-3" role="search">
            <input className="form-control" type="search" placeholder="Search" value={searchQuery} onChange={handleSearchChange} style={{ width: '400px' }} />
            <button className="btn btn-primary ms-2" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
          <div className="d-flex align-items-center">
            <a href="#" className="btn btn-light position-relative me-3">
              <Link to="/cart" className="btn btn-light position-relative me-3">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItems.length}</span>
              </Link>
            </a>
            <a href="#" className="btn btn-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">

        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="d-flex list-unstyled gap-5 ps-2 pt-2">
              <li className="nav-item"><a className="nav-link" href="#">Best Sellers</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Gift Cards</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Gift Ideas</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Deal of the day</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Top Deals</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Membership Deals</a></li>
              <li className="nav-item"><a className="nav-link" href="#">New Releases</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
