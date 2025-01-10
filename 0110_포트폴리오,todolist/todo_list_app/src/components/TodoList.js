import React, { useState } from 'react'
import TodoListItem from './TodoListItem'

function TodoList({todo , onUpdated, onDelete}) {
  const [search, setSearch] = useState('')
  
  const onChangeSearch = (event) => { //검색한 내용
    setSearch(event.target.value)
  }
  const getSearchResult = () => { //검색 기능
    return search === '' ? todo : todo.filter(it => it.context.toLowerCase().includes(search.toLowerCase()))
  }
  return (
    <div className='TodoList'>
      <h4>Todo List 📍</h4>
      <input value={search} className='searchbar' onChange={onChangeSearch} placeholder='검색어를 입력하세요 !!'/>
      <div className='list_wrapper'>
        {
          getSearchResult().map(it => {
            return<TodoListItem key={it.id} {...it}  onUpdated={onUpdated} onDelete={onDelete} />
          })
        }
    
      </div>
      </div>
  )
}

export default TodoList
