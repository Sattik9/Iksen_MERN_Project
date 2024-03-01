import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate=useNavigate();
  const name=localStorage.getItem("name");
  const role=localStorage.getItem("role");
  const LogOut=(e)=>{
        e.preventDefault()
        localStorage.clear();
        navigate("/login");
        toast("logout successful!");
  }
  return (
    <>
    <header id="header" className="header fixed-top d-flex align-items-center">
  <div className="d-flex align-items-center justify-content-between">
    <a href="index.html" className="logo d-flex align-items-center">
      <img src="assets/img/logo.png" alt />
      <span className="d-none d-lg-block">NiceAdmin</span>
    </a>
  </div>
  
  <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">
      <li className="nav-item dropdown pe-3">
        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
         <span className="d-none d-md-block dropdown-toggle ps-2">{name}</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li className="dropdown-header">
            <h6>{name}</h6>
            <span>{role}</span>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item d-flex align-items-center" onClick={(e)=>LogOut(e)}>
              <i className="bi bi-box-arrow-right" />
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</header>

    
    
    </>
  )
}

export default Navbar