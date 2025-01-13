import React from 'react'

function TodoItem({id, isDone, context, createDate, onUpdate,onDelete}) {
  const onChangeCheckbox = () => {
    onUpdate(id)
  }
  return (
    <div className={`TodoItem ${isDone ? 'active' : ''}`}>
      <div className='checkbox_col'>
        <input 
         checked={isDone}
         onChange={onChangeCheckbox}
         type='checkbox' 
         className='checkbox'
          />
      </div>
      <div className='title_col'>{context}</div>
      <div className='date_col'>
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className='btn_col'>
        <button onClick={()=> onDelete(id)}>삭제</button>
      </div>
    </div>
  )
}

export default TodoItem
