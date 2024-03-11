import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
    <>
        <h1 className="text-center">404- Sayfa bulunamadı</h1>
        <Link className="btn btn-info mx-auto p-2 "  to='/'  >Ana sayfaya gitmek için tıklayın</Link>
    </>
  )
}

export default PageNotFound