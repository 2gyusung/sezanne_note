import React, { useContext } from 'react'
import { TodoDispatchContext } from '../App';

function TodoItem({id, isDone, context, createDate}) {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext)
  // console.log(`TodoItem 업데이트${id}`);
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

export default React.memo(TodoItem)
