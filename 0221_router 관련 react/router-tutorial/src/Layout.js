import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Layout = () => {
  
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }
  const goArticles = () => {
    navigate('/articles', {replace: true})
  }
  return (
    <>
    <header>
      <p>Header</p>
      <button onClick={goBack}>뒤로가기</button> 
      <button onClick={goArticles}>게시글 목록</button> 
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      CopyLight 2005 all reservd.
    </footer>
    </>
  )
}

export default Layout
