import React, { useReducer } from 'react';

const reducer = (state , action) => { //state 초기값 0 / action :type dispatch에서 보내온 data 
    switch(action.type) {
      case 'INCREASE' : return state + action.data;
      case 'DECREASE' : return state - action.data;
      default : return
    }
  
}

const TestComp = () => {
  // const [count, setCount] = useState(0)
  const [count, dispatch] = useReducer(reducer, 0);
      // const onIncrease = () => {
      //   setCount(count + 1)
      // }
      // const onDecrease = () => {
      //   setCount(count - 1 )
      // }
  
  return (
    <div className='TestComp'>
      <h3>테스트컴포넌트</h3>
           <h2>{count}</h2>
  <div>
        <button onClick={()=> dispatch({type : 'INCREASE', data : 1})}>+1</button>    
         <button onClick={()=> dispatch({type : 'DECREASE', data : 1})}>-1</button>    
       </div>
    </div>
  )
}

export default TestComp
