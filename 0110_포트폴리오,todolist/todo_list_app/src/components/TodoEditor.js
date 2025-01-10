import React, { useRef, useState } from 'react'

function TodoEditor({onCreate}) {
  const [context , setContext] = useState('')
  const inputRef = useRef()
  const onChangeContext = (event) => {
    setContext(event.target.value);
  } 

  const onSubmit = () => {
    if(!context) {
      inputRef.current.focus()
      return;
    }
    onCreate(context)
    setContext('');
  };
  const onKeyDown = (event) => {    
    if(event.keyCode === 13 ) {
      onSubmit();
    }
  }
  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기📝</h4>
      <div className='editor'>
        <input
        ref={inputRef}
        value={context} 
        onChange={onChangeContext}
        onKeyDown={onKeyDown}
        placeholder='새로운 Todo...'
         />
        <button 
        onClick={onSubmit} 
        >추가</button>
      </div>
    </div>
  )
}

export default TodoEditor
