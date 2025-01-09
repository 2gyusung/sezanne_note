import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList() {
  return (
    <div className='TodoList'>
      <h4>Todo List 📍</h4>
      <input className='searchbar' placeholder='검색어를 입력하세요 !!'/>
      <div className='list_wrapper'>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      </div>
      </div>
  )
}

export default TodoList
