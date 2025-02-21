import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='Home'>
      <h1>Home Page..</h1>
      <p>가장 먼저 보여줄 페이지</p>
      <ul>
        <li> <Link to={'/about'}>About</Link></li>
        <li>  <Link to={'/profiles/velopert'}>velopert</Link></li>
        <li>   <Link to={'/profiles/gildong'}>gildong</Link></li>
        <li>   <Link to={'/profiles/void'}>not profile</Link></li>
        <li>   <Link to={'/articles'}>Articles</Link></li>
      </ul>

    </div>
  )
}

export default Home
