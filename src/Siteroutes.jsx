import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Categoris from './components/Categoris'
import Subeler from './pages/Subeler'
import Anasayfa from './pages/Anasayfa'
import PageNotFound from './pages/PageNotFound'

function Siteroutes() {
  return (
    <Routes>
      <Route path='/' element={<Subeler />} />
      <Route path='/Categoris' element={<Categoris />} />
      <Route path='/URUNLER' element={<Anasayfa />} />
      <Route path='*' element={<PageNotFound />} />

    </Routes>
  )
}

export default Siteroutes