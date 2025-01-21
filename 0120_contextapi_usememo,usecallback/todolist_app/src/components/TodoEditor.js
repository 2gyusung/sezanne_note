import React, { useContext, useRef, useState } from 'react'
import { TodoDispatchContext } from '../App';

const TodoEditor = () => {
  const {onCreate} = useContext(TodoDispatchContext)
  const [context, setContext] = useState('');
  const inputRef = useRef();
  const onChangeContext = (event) => {
    setContext(event.target.value)
  }
  const onSubmit = () => {  //매개변수로 보낸다는 원리로 App.js으로 보낸다 list 추가기능
    if(!context) {
      inputRef.current.focus();
      return;
    }
    onCreate(context) //입력된 값을 전해줌
    setContext('')
  }
  console.log(context);

  const onKeyDownHandler = (event) =>  { // Enter키 클릭 시  list 추가기능
    if(event.key === 'Enter') {
      onSubmit()
    }
  }
  
  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기📋</h4>
      <div className='editor_wrapper'>
        <input 
        ref={inputRef}
        value={context}
        onChange={onChangeContext}
        onKeyDown={onKeyDownHandler}
        placeholder="새로운 todo"/>
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

export default TodoEditor
