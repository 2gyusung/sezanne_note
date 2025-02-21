import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

const Articles = () => {
  const activeStyle = {
    color : 'orange',
    fontSize : '26px'
  }
  return (
    <div>
    <ul className='Articles'>
      <li>
        <NavLink 
        to={'/articles/1'}
        style={({isActive}) =>( isActive ? activeStyle : undefined)}
        >
          게시물1</NavLink>
      </li>
      <li>
        <NavLink 
        to={'/articles/2'}
        style={({isActive}) =>( isActive ? activeStyle : undefined)}
        >
          게시물2</NavLink>
      </li>
      <li>
        <NavLink 
        to={'/articles/3'}
        style={({isActive}) =>( isActive ? activeStyle : undefined)}
        >
          게시물3</NavLink>
      </li>
      {/* <li>
        <Link to={'/articles/2'}>게시물2</Link>
      </li>
      <li>
        <Link to={'/articles/3'}>게시물3</Link>
      </li> */}
    </ul>
    <Outlet/>
    </div>
  )
}

export default Articles
