import React, { useRef, useState } from 'react'
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import './App.scss';
import TodoList from './components/TodoList';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    context : 'React 공부하기',
    createDate : new Date().getDate()
  },
  {
    id: 1,
    isDone: false,
    context : '영화 보기',
    createDate : new Date().getDate()
  },
  {
    id: 2,
    isDone: false,
    context : '노래 연습하기',
    createDate : new Date().getDate()
  }
]
function App() {
  const [todo, setTodo] = useState(mockTodo)

  const idRef = useRef(3)

  const onCreate = (context)=>  {
    const newItem = {
      id : idRef.current,
      context, // context : context
      isDone : false,
      createDate : new Date().getTime()
    }
    setTodo(newItem, ...todo) //배열을 해제 시켜서 객체로 나온다.
    idRef.current +=1;
  }

  return (
    <div className='App'>
      <Header/>
      <TodoEditor/>
      <TodoList/>
    </div>
  )
}

export default App
