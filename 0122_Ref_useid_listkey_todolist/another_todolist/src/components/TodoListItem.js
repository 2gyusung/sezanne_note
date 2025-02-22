import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md'
import './TodoListItem.scss'
import cn from 'classnames';


function TodoListItem({todo}) {  
  const {text, checked} = todo
  return (
    <div className='TodoListItem'> 
    <div className={cn('checkbox', {checked})}>
   {
    checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>
   } 
    <div className='text'>{text}</div>
    </div>
      <div className='remove'>
      <MdRemoveCircleOutline/>
      </div>
       </div>
  )
}

export default TodoListItem
