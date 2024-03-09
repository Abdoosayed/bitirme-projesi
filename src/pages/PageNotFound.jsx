import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
    <>
        <h1>404- Sayfa bulunamadı</h1>
        <Link className="btn btn-info" to='/'  >Ana sayfaya gitmek için tıklayın</Link>
    </>
  )
}

export default PageNotFound