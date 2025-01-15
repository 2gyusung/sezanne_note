import React, { useCallback, useReducer, useRef, useState } from 'react'
import './main.scss'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
// import TestComp from './TestComp'
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

    function reducer(state, action) {
      switch(action.type) {
        case '0NCREATE' : {
          return [action.newItem, ...state] //action.newItem  + 줄임 ...state에 더한다
        }
        case 'ONUPDATE' : {
          return state.map(it => it.id === action.targetId ? {...it, isDone : !it.isDone} : it
          )
        }
        case 'ONDELETE' : {
          return state.filter(it=> it.id !== action.targetId)
          
        }
        default :
        return state;
      }

    }
function App() {
  const [todo, dispatch] = useReducer(reducer , mokTodo)
  const idRef = useRef(3);
  const onCreate = (context) => { // 생성기능
    dispatch({
      type: '0NCREATE',
      newItem: {
        id : idRef.current,
        context,
        isDone : false,
        createDate : new Date().getTime()
      }
    })
    idRef.current += 1;
  }
  const onUpdate = useCallback((targetId) => { //check 기능
    dispatch({
      type: 'ONUPDATE',
      targetId : targetId
    })

  }, [])
  const onDelete = useCallback((targetId) => { // 삭제 기능
    dispatch({
      type: 'ONDELETE',
      targetId : targetId
    })
  },[])
  console.log(todo);

 
  
  return (
    <div className='App'>
      {/* <TestComp/> */}
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
