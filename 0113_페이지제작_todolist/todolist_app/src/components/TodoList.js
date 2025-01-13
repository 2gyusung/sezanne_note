import React, { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList({todo, onUpdate, onDelete}) {
  // console.log(todo);
  const [search, setSearch] = useState('')
  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const getSearchResult = () => {
    return search === '' ? todo : todo.filter(it=> it.context.toLowerCase().includes(search.toLowerCase()))
  }
  return (
    <div className='TodoList'>
      <h4>Todo List📚</h4>
      <input
      value={search}
      onChange={onChangeSearch} 
      className='searchbar'
       placeholder='검색어를 입력하세요'/>
      <div className='list_wrapper'>
        {
          getSearchResult().map(it=> {
            return <TodoItem 
            {...it}
             key={it.id}
             onUpdate={onUpdate}
             onDelete={onDelete}/>
          })
        }
      </div>
    </div>
  )
}

export default TodoList
