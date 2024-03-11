import React from 'react'
import { NavLink } from 'react-router-dom'

function catagorisnav() {
  return (
    <ul className="nav nav-tabs" data-bs-theme="dark">

      <NavLink className="nav-link" to="/" >ANA SAYFA</NavLink>
      <NavLink className="nav-link" to="/Categoris" >KATEGORİLER</NavLink>
      <NavLink className="nav-link" to="/URUNLER" >ÜRÜNLER</NavLink>

    </ul>
  )
}

export default catagorisnav