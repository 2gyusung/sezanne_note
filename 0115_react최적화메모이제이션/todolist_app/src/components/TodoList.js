import React, { useMemo, useState } from 'react'
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
  const analyzeTodo = useMemo(() => {
    console.log('analyzeTodo 함수 호출');
    
    const totalCount =  todo.length;
    const doneCount = todo.filter(it=> it.isDone).length
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  },[todo])
  const {totalCount, doneCount, notDoneCount} = analyzeTodo
  return (
    <div className='TodoList'>
      <h4>Todo List📚</h4>
      <div className='analyzeTodo'>
        <h4>총 개수 : {totalCount}</h4>
        <h4>완료된 할일 :{doneCount}</h4>
        <h4>완료하지 않은 할일 :{notDoneCount}</h4>
      </div>
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
