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
// 생성기능
  const onCreate = (context)=>  {
    const newItem = {
      id : idRef.current,
      context, // context : context
      isDone : false,
      createDate : new Date().getTime()
    }
    setTodo([newItem, ...todo]) //기존에 있던 거에 더해서 배열을 해제 시켜서 객체로 나온다.
    idRef.current +=1;
  }

  // 완료 체크 기능
  const onUpdated = (targetId) => { //상태데이터로 생성
    setTodo(
      todo.map(
        it => 
          it.id === targetId ?
          {...it, isDone : !it.isDone}
          :it

      )
    )
  }
  // 삭제 기능
  const onDelete = (targetId) => {
    setTodo(
      todo.filter(it=> it.id !== targetId)
    )
  }
  return (
    <div className='App'>
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} 
       onUpdated={onUpdated}
       onDelete={onDelete}
       />
    </div>
  )
}

export default App
