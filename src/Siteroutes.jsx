import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Tatlilar from './pages/Tatlilar'
import Baslangiclar from './pages/Baslangiclar'
import Sicakicecek from './pages/Sicakicecek'
import Kahvaltilar from './pages/Kahvaltilar'
import Arasicaklar from './pages/Arasicaklar'
import Aperatifler from './pages/Aperatifler'

function Siteroutes() {
  return (
    <Routes>
    <Route path='/tatlilar' element={<Tatlilar/>} />
    <Route path='/Baslangiclar' element={<Baslangiclar/>} />
    <Route path='/Sicakicecek' element={<Sicakicecek/>} />
    <Route path='/Kahvaltilar' element={<Kahvaltilar/>} />
    <Route path='/Arasicaklar' element={<Arasicaklar/>} />
    <Route path='/Aperatifler' element={<Aperatifler/>} />
   </Routes>
  )
}

export default Siteroutes