import React, { useRef, useState } from 'react'
import './main.scss'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
const mokTodo = [
  {id : 0,
    isDone : false,
    context : 'React 공부하기',
    createDate : new Date().getTime()
  },
  {id : 1,
    isDone : false,
    context : 'HTML 만들기',
    createDate : new Date().getTime()
  },
  {id : 2,
    isDone : false,
    context : 'SQL 복습하기',
    createDate : new Date().getTime()
  },
]
function App() {
  const [todo, setTodo] = useState(mokTodo);
  const idRef = useRef(3);
  const onCreate = (context) => {// onSubmit 보낸 값을 여기 대입
    const newItem = 
          {id : idRef.current,
         isDone : false,
        context, //context : context
        createDate : new Date().getTime()
      }
    setTodo([newItem, ...todo]) //newItem을  + ...todo 배열을 합해서 todo 기존에 있는 거랑 추가하겠다
    idRef.current += 1
  }
  const onUpdate = (targetId) => { //check 기능
    setTodo(
     todo.map(
      (it) =>  it.id === targetId ? {...it, isDone: !it.isDone} : it       
      
     )
    )
  }
  const onDelete = (targetId) => { // 삭제 기능
    setTodo(
      todo.filter(it => it.id !== targetId)
    )
  }
  console.log(todo);
  
  return (
    <div className='App'>
      <Header />
      <TodoEditor
       onCreate={onCreate}
        />
      <TodoList
        todo={todo}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  )
}

export default App
