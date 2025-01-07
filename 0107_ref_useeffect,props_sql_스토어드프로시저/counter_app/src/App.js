
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import './App.scss';
import {useEffect, useState } from 'react';
import axios from 'axios';

function Even() {
  useEffect(()=> {
       return () => {
        console.log('Even 컴포넌트 언마운트!!');
        
       } 
  });
  return (
    <h2>현재 카운트는 짝수입니다</h2>
  )
}

function App() {

  const [post, setPost] = useState(null)
  const [isLoading , setIsLoading] =useState(true)

  useEffect(()=> {
       axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=> {
      console.log(res);
      setPost(res.data)
      setIsLoading(false)
    })
  },[])
  

  console.log('post',post);
  
  const [count, setCount] = useState(0)
  const handleCount = (value) => {
    setCount(count + value)
  }
  
  



    const createEleTwo = () => {
      document.querySelector('.title').textContent = 'Good!!'
    }
  return (
    <div className="App">
      <div className='inner'>
      <h1>CounterApp</h1>
      <section>
      <Viewer count={count}/>
      {count % 2 === 0 &&<Even/> }
      </section>
      <section>
      <Controller handleCount={handleCount}/>
      </section>
      <section>
      </section>
      <section>
        {
          isLoading ? (
            <h3>loading...</h3>
          ) : (
            <div className='data'>
              <h3>{post[0].title}</h3>
              <h3>{post[1].title}</h3>
            </div>
          )
        }
      </section>
      </div>
    </div>
  );
}

export default App;
