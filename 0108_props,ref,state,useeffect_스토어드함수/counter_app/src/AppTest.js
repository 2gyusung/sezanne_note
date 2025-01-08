import React, { useEffect, useRef, useState } from 'react'
import App from './App.scss'
// import Props from './components/Props'
import MultiProps from './components/MultiProps'
import postData from './json/post_data.json'

function AppTest() {
  const [titleData , setTitleData] = useState(postData)
  const myRef = useRef(0)
  let count = 0;
  useEffect(()=> {
    console.log('myRef Count', count);
    
  },[count])
    const onClickHandler = (id) => {
      setTitleData(
        postData.filter(item=> {
         return id === item.id
        })
      )
      myRef.current += 1;
    }
    console.log('myref',myRef.current);
    
    console.log(titleData);
    
  return (
    <>
    <h2>Props.. study {myRef.current}</h2>
    {/* <Props users={data}/>  */}
    {/* <Props {...data} text={'Hello'}/> */}
    {/* <MultiProps post={postData}/> */}
    {
      postData.map(post=> {
        return <MultiProps
         {...post} 
         key={post.title}
        onClickHandler={onClickHandler} />
      })
    }
    </>
  )
}

export default AppTest
