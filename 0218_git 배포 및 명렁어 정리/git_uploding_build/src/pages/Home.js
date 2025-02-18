import React from 'react'
import Header from '../components/Header'

const Home = ({menus}) => {
  return (
    <header>
      <Header menus={menus}/>
    </header>
  )
}

export default Home
