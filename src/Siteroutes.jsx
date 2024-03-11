import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Categoris from './components/Categoris'
import Baslangiclar from './pages/Baslangiclar'
import Sicakicecek from './pages/Sicakicecek'
import Kahvaltilar from './pages/Kahvaltilar'
import Arasicaklar from './pages/Arasicaklar'
import Subeler from './pages/Subeler'
import Anasayfa from './pages/Anasayfa'
import PageNotFound from './pages/PageNotFound'

function Siteroutes() {
  return (
    <Routes>
      <Route path='/' element={<Anasayfa />} />
      <Route path='/Categoris' element={<Categoris />} />
      <Route path='/Baslangiclar' element={<Baslangiclar />} />
      <Route path='/Sicakicecek' element={<Sicakicecek />} />
      <Route path='/Kahvaltilar' element={<Kahvaltilar />} />
      <Route path='/Arasicaklar' element={<Arasicaklar />} />
      <Route path='/Subeler' element={<Subeler />} />
      <Route path='*' element={<PageNotFound />} />

    </Routes>
  )
}

export default Siteroutes