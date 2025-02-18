import React from 'react'
import ListItem from './ListItem'

const ListMenu = ({menus}) => {
  return (
    <ul className='ListMenu'>
      {
        menus.map(menu=> {
          return   <ListItem {...menu} key={menu.name}/>
        })
      }
    
    </ul>
  )
}

export default ListMenu
