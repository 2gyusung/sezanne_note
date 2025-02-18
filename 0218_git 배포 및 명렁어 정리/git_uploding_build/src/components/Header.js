import React from 'react'
import ListMenu from './ListMenu'

const Header = ({menus}) => {
  return (
    <nav>
      <ListMenu menus={menus}/>
    </nav>
    
  )
}

export default Header
