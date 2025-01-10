import React from 'react'

const active = {
  color : 'gray',
  textDecoration :'line-through'
}

function TodoListItem ({id, isDone, context ,createDate, onUpdated,onDelete})  {
    const onChangeIsDone = () => { //주의하기
      // isDone = !isDone
      onUpdated(id) //체크한 부분을 가져가서 id를 반환
  }
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <div className='TodoListItem'>
      <div 
   
      className={'checkbox_col'}
      >
        <input
        checked={isDone} //체크유무
        onChange ={onChangeIsDone} //주의하기
        type='checkbox'/>
      </div>
      <div className={`title_col ${isDone ? 'active' :  ' '}` }>
       {context}
      </div>
      <div className='date_col'>
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  )
}

export default TodoListItem

