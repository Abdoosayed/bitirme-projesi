import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Tatlilar from './pages/Tatlilar'
import Baslangiclar from './pages/Baslangiclar'
import Sicakicecek from './pages/Sicakicecek'
import Kahvaltilar from './pages/Kahvaltilar'
import Arasicaklar from './pages/Arasicaklar'
import Aperatifler from './pages/Aperatifler'
import Anasayfa from './pages/Anasayfa'
import PageNotFound from './pages/PageNotFound'

function Siteroutes() {
  return (
    <Routes>
      <Route path='/' element={<Anasayfa />} />
      <Route path='/tatlilar' element={<Tatlilar />} />
      <Route path='/Baslangiclar' element={<Baslangiclar />} />
      <Route path='/Sicakicecek' element={<Sicakicecek />} />
      <Route path='/Kahvaltilar' element={<Kahvaltilar />} />
      <Route path='/Arasicaklar' element={<Arasicaklar />} />
      <Route path='/Aperatifler' element={<Aperatifler />} />
      <Route path='*' element={<PageNotFound />} />

    </Routes>
  )
}

export default Siteroutes