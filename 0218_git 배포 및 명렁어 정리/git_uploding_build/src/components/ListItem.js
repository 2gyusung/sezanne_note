import React from 'react'

const ListItem = ({path, name}) => {
  console.log(path,name);
  
  return (
    <div>
      <li>
     <a href={path}>{name.toUpperCase()}</a>
      </li>
    </div>
  )
}

export default ListItem
