import React, { useCallback, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss'

function TodoInsert({onInsertHandler}) {
  const [value , setValue] = useState('')
  const onChangeHandler =  useCallback((e) => {
    setValue(e.target.value)
  },[])


  const submitHandler = useCallback((e)=>{ //전송 기능이며, 함수로 app으로 다시 값을보낸다
    onInsertHandler(value)
    setValue('')
    e.preventDefalut();
  },[onInsertHandler, value])
  return (
    <form 
    className='TodoInsert'
    onSubmit={submitHandler}>
      <input
       placeholder='할 일을 입력하세요'
       value={value}
       onChange={onChangeHandler}
       />
      <button type='submit' >
        {/* react-icons */}
      <MdAdd/>
      </button>
      </form>
  )
}

export default TodoInsert
