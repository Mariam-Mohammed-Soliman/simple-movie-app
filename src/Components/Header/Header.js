import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary text-capitalize">
  <div className="container">
    <NavLink className="navbar-brand" to="/watchList">
      <span className='mt-2'><i className="fa-solid mx-2 fa-film"></i></span>
      <span className='brandName text-uppercase'>movies</span>
      </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="pt-1 navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 navbar-nav-scroll" >
        <li className="nav-item mx-lg-2">
          <NavLink className="nav-link active" aria-current="page" to="/watchList">watch list</NavLink>
        </li>
        <li className="nav-item mx-lg-2">
          <NavLink className="nav-link" to="/watched">watched</NavLink>
        </li>
        
        <li className="nav-item mx-lg-2 btn addBtn py-0 text-uppercase">
          <NavLink className="nav-link" to="/add">add</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>


  )
}

export default Header
