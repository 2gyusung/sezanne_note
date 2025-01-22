
import { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';



function App({children}) {

  const [todos , setTodos] =useState([
    {
      id : 1,
      text : '리액트의 기초 알아보기',
      checked : true
    },
    {
      id : 2,
      text : '컴포넌트 스타일링 해 보기',
      checked : true
    },
    {
      id : 3,
      text : '일정 관리 앱 만들어 보기',
      checked : false
    },
  ])
  const nextId = useRef(4)
  const onInsertHandler = useCallback((text) => { //받아온 데이터를 집어 넣는다 value(insert에 있는 값이 들어온다)
      const todo = {
        id : nextId.current,
        text : text,
        checked : false
      }
      setTodos(todos.concat(todo)) //기존의 값과 새로운 값을 결합한다.
      nextId.current += 1;
  },[todos]) //todos 바뀌면 호출

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsertHandler={onInsertHandler}/>
        <TodoList todos={todos }/>
      </TodoTemplate>
    </div>
  );
}

export default App;
