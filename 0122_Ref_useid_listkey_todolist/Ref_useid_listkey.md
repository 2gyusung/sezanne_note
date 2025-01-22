# ref :                                                                          current 값을 같이 따라온다. state 발동 시 숫자가 바뀌며 ui은 안보이개 올라간다

```jsx

import React, { useRef } from "react";

function App() {
  const topRef = useRef(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
      console.log(topRef.current);
      
    }
  };

  return (
    <div className="App">
      <div ref={topRef} style={{ height: "50vh", background: "green" }}>
        페이지 상단
      </div>
      <div style={{ height: "150vh", background: "yellow" }}>
        페이지 상단으로 이동 - 버튼 클릭
      </div>
      <button onClick={scrollToTop}>상단으로 이동</button>
    </div>
  );
}

export default App;



import React, { useRef, useState } from "react";

function RefComp() {
  const [stateCount, setStateCount] = useState(0);
  let count = 0;
  const refCount = useRef(0);

  return (
    <div>
      <h2>state: {stateCount}</h2>
      <h2>var: {count}</h2>
      <h2>ref: {refCount.current}</h2>
      <button
        onClick={() => {
          setStateCount(stateCount + 1);
          console.log("state:", stateCount);
        }}
      >
        Increment State
      </button>
      <button
        onClick={() => {
          count++;
          console.log("var up:", count);
        }}
      >
        Increment Var
      </button>
      <button
        onClick={() => {
          refCount.current++;
          console.log("ref up:", refCount.current);
        }}
      >
        Increment Ref
      </button>
    </div>
  );
}

export default RefComp;

```
# useid : shortid이랑 동일하게 유일한 키를 나온다
```jsx
import React from 'react'

function UseId({id,name}) {
  return (
    <div>
      <label htmlFor={`${id}-${name}`}>{name}</label>
      <input id={`${id}-${name}`}/>
    </div>
  )
}

export default UseId

```
# listkey : 유일성을 가진 키여야한다
```jsx
import React, { useState } from 'react'

function ListKey() {

  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState(['밥먹기', '영화보기', '코딩하기'])

  const addList = () => {
    // setList((prevList)=> {
    //   return [inputValue, ...prevList] 방법 1

    // })
    setList(()=> {
      return [inputValue, ...list] //방법 2
    })
    setInputValue('')
  }

  return (
    <div>
      <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
      <button
      onClick={addList}
      >추가</button>
      <ul>
        {
          list.map((item,idx) => 
          {
            return (
              <div key={idx}>
                <li>{item}</li>
                <input />
              </div>
            )
          })

        }
      </ul>
    </div>
  )
}

export default ListKey

```