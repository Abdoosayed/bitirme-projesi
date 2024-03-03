import React from 'react'
import { NavLink } from 'react-router-dom'

function catagorisnav() {
  return (
    <ul className="nav nav-tabs" data-bs-theme="dark">

      <NavLink className="nav-link" to="/Aperatifler" >APERATİFLER</NavLink>
      <NavLink className="nav-link" to="/TATLILAR" >TATLILAR</NavLink>
      <NavLink className="nav-link" to="/KAHVALTILAR" >KAHVALTILAR</NavLink>
      <NavLink className="nav-link" to="/Baslangiclar" >BAŞLANGIÇLAR</NavLink>
      <NavLink className="nav-link" to="/ARASICAKLAR" >ARA SICAKLAR</NavLink>
      <NavLink className="nav-link" to="/Sicakicecek" >SICAK İÇECEKLER</NavLink>

    </ul>
  )
}

export default catagorisnav