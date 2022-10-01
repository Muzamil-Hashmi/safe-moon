import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
//    <div className="container-fluid"></div>
<nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container ">
    <a className="navbar-brand" href="#"><img src="assets/logo.png" alt=" "width={50} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/protocol'>Protocol</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Glob'>Glob</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled">Merch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Partner</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Markets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">How to Buy</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>




  
  )
}
