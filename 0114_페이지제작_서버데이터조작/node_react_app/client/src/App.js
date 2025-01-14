import React, { useEffect, useState } from 'react'
import axios from 'axios';

const styled = {
  color : 'gray',
  textAlign : 'center'
}

const listStyled = {
  maxWidth : '500px',
  display : 'flex',
  justifyContent : 'center',
  gap : '30px'
}

function App() {
  const [todoList, setTodoList] = useState(null)

  const fetchData = async () => {
  const response =  await axios.get('http://localhost:4000/api/todo') //axios 방법1
        setTodoList(response.data)
  
  
    // fetch('http://localhost:4000/api/todo') 방법2
    // .then(responese => {
    //   return responese.json();
    // }) 
    // .then(data=> {
    //   console.log('data : ', data);
    //   setTodoList(data)
    // })
  }
  useEffect(()=> {
    fetchData()
  },[]) //create , mount 한번 생성후 실행된다
 
 
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const context = e.target.context.value;
    const isDone = e.target.isDone.checked;
    fetch('http://localhost:4000/api/todo', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({ //데이터를 json로 변환하여 서버 전달
        context,
        isDone
      })
    })
    .then(()=> { //데이터 성공하면 함수 실행하라
      fetchData()
    })
  }
  return (
    <div className='App' style={styled}>
      <h1>TodoList API TEST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name='context'/>
        <input name='isDone' type='checkbox'/>
        <input type='submit' value={'추가'}/>
      </form>
      <div className='todo-list'>
        {
          todoList?.map(item => 
            <div key={item.id} style={listStyled}>
              <h3>{item.id}</h3>
              <h3>{item.context}</h3>
              <h3>{item.isDone ? '!!' :"N"}</h3>
              </div>
          ) 
        }
      </div>
    </div>
  )
}


export default App
