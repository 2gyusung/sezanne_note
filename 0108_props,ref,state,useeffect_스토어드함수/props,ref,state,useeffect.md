# `객체분해할당`

# AppTest 컴포넌트
```js
import React from 'react'
import App from './App.css'
import Props from './components/Props'

const data = {
  name : "Gildong",
  gender : "m",
  childUser : {
    childName : 'Soonja',
    childGender : 'f'
  }
}

function AppTest() {

  return (
    <>
    <h2>Props.. study</h2>
    <Props users={data}/>
    {/* <Props {...data}/> */}
    </>
  )
}

export default AppTest

```

# 객체분해할당 1번
```js
import React from 'react'
const data = {
  name : "Gildong",
  gender : "m",
  childUser : {
    name : 'Soonja',
    gender : 'f'
  }
}
function Props() {
  const {name,gender} = data
  return (
    <div>
    <h2>
      name : {name}
    </h2>
    <h2>
      gender : {gender}
    </h2>
    <h2>
    childUser name : {data.childUser.name}
    </h2>
    </div>
  )
}

export default Props
```
# 객체분해할당 2번
```js
import React from 'react'
const data = {
  name : "Gildong",
  gender : "m",
  childUser : {
    childName : 'Soonja',
    childGender : 'f'
  }
}
function Props() {
  const {name,
    gender, 
    childUser : {
      childName,
      childGender
    }
  } = data
  return (
    <div>
    <h2>
      name : {name}
    </h2>
    <h2>
      gender : {gender}
    </h2>
    <h2>
    childUser name : {data.childUser.childName}
    childUser gender : {data.childUser.childGender}
    </h2>
    </div>
  )
}

export default Props
```
# 객체분해할당 3번
```js
import React from 'react'

function Props(props) {
  const {name,
    gender, 
    childUser : {
      childName,
      childGender
    }
  } = props.users;
  return (
    <div>
    <h2>
      name : {name}
    </h2>
    <h2>
      gender : {gender}
    </h2>
    <h2>
    childUser name : {users.childUser.childName}
    childUser gender : {users.childUser.childGender}
    </h2>
    </div>
  )
}

export default Props

```
# 객체분해할당 4번
```js
import React from 'react'

function Props({
  users :{
    name,
    gender, 
    childUser : {
      childName,
      childGender
    }
  }  

}) {
 
  return (
    <div>
    <h2>
      name : {name}
    </h2>
    <h2>
      gender : {gender}
    </h2>
    <h2>
    childUser name : {childName}
    childUser gender : {childGender}
    </h2>
    </div>
  )
}

export default Props

```

# 객체분해할당 5번
```js
import React from 'react'

function Props({users}) {
 const {name, gender} =users;
 const {childName, childGender} =users.childUser;
  return (
    <div>
    <h2>
      name : {name}
    </h2>
    <h2>
      gender : {gender}
    </h2>
    <h2>
    childUser name : {childName}
    childUser gender : {childGender}
    </h2>
    </div>
  )
}

export default Props

```
# 객체분해할당 6번
```js
import React from 'react'

function Props({name, gender, childUser : {childName, childGender}}) {
//  const {name, gender} =users;
//  const {childName, childGender} =users.childUser;
  return (
    <div>
    <h2>
      name : {name}
    </h2>
    <h2>
      gender : {gender}
    </h2>
    <h2>
    childUser name : {childName}
    childUser gender : {childGender}
    </h2>
    </div>
  )
}

export default Props

```
# 객체분해할당 7번
```js
import React from 'react'

function Props(props) {
//  const {name, gender} =users;
//  const {childName, childGender} =users.childUser;
 const {name, gender} =props;
 const {childName, childGender} =props.childUser;
  return (
    <div>
    <h2>
      name : {name}
    </h2>
    <h2>
      gender : {gender}
    </h2>
    <h2>
    childUser name : {childName}
    childUser gender : {childGender}
    </h2>
    </div>
  )
}

export default Props

```
# 객체분해할당 8번
```js
import React from 'react'

function Props(props) {
//  const {name, gender} =users;
//  const {childName, childGender} =users.childUser;
 const {name, gender} =props;
 const {childName, childGender} =props.childUser;
  return (
    <div>
    <h2>
      name : {name}
    </h2>
    <h2>
      gender : {gender}
    </h2>
    <h2>
    childUser name : {childName}
    childUser gender : {childGender}
    </h2>
    <h2>
    props : text : {props.text}
    </h2>
    </div>
  )
}

export default Props

```

# `배열구조할당`
```js
import React from 'react'
import App from './App.css'
// import Props from './components/Props'
import MultiProps from './components/MultiProps'
import postData from './json/post_data.json'

function AppTest() {
  
  return (
    <>
    <h2>Props.. study</h2>
    {/* <Props users={data}/>  */}
    {/* <Props {...data} text={'Hello'}/> */}
    <MultiProps post={postData}/>
    </>
  )
}

export default AppTest

```
```js
function AppTest() {
  
  return (
    <>
    <h2>Props.. study</h2>
    {/* <Props users={data}/>  */}
    {/* <Props {...data} text={'Hello'}/> */}
    <MultiProps {...postData}/>
    </>
  )
}

export default AppTest

import React from 'react'
import App from './App.css'
// import Props from './components/Props'
import MultiProps from './components/MultiProps'
import postData from './json/post_data.json'

function AppTest() {
  
  return (
    <>
    <h2>Props.. study</h2>
    {/* <Props users={data}/>  */}
    {/* <Props {...data} text={'Hello'}/> */}
    {/* <MultiProps post={postData}/> */}
    {
      postData.map(post=> {
        return <MultiProps data ={post} />
      })
    }
    </>
  )
}

export default AppTest

```

```js
import React from 'react'
import App from './App.scss'
// import Props from './components/Props'
import MultiProps from './components/MultiProps'
import postData from './json/post_data.json'

function AppTest() {
  
  return (
    <>
    <h2>Props.. study</h2>
    {/* <Props users={data}/>  */}
    {/* <Props {...data} text={'Hello'}/> */}
    {/* <MultiProps post={postData}/> */}
    {
      postData.map(post=> {
        return <MultiProps
         data ={post} 
         key={post.title} />
      })
    }
    </>
  )
}

export default AppTest


import React from 'react';

function MultiProps({data}) {
  console.log('props', data);
  
  return (
    <div className='post'>
      <h3>fake data jsonplaceholder {data.id}</h3>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  )
}

export default MultiProps;

```

```js
import React from 'react'
import App from './App.scss'
// import Props from './components/Props'
import MultiProps from './components/MultiProps'
import postData from './json/post_data.json'

function AppTest() {
  
  return (
    <>
    <h2>Props.. study</h2>
    {/* <Props users={data}/>  */}
    {/* <Props {...data} text={'Hello'}/> */}
    {/* <MultiProps post={postData}/> */}
    {
      postData.map(post=> {
        return <MultiProps
         {...post} 
         key={post.title} />
      })
    }
    </>
  )
}

export default AppTest


import React from 'react';

function MultiProps({id, title, body}) {
  // console.log('props', data);
  
  return (
    <div className='post'>
      <h3>fake data jsonplaceholder {id}</h3>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  )
}

export default MultiProps;

```
```js
import React from 'react'
import App from './App.scss'
// import Props from './components/Props'
import MultiProps from './components/MultiProps'
import postData from './json/post_data.json'

function AppTest() {
    const titleData = []
    const onClickHandler = (title) => {
      console.log(title);
      titleData.push(title);
      console.log(titleData);
    }
    
  return (
    <>
    <h2>Props.. study</h2>
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

import React from 'react';

function MultiProps({id, title, body , onClickHandler}) {
  // console.log('props', data);
  
  return (
    <div className='post'>
      <h3>fake data jsonplaceholder {id}</h3>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={()=> onClickHandler(title)}>Click</button>
    </div>
  )
}

export default MultiProps;


```
# `state을 활용한 양방향`

```js
import React, { useState } from 'react'
import App from './App.scss'
// import Props from './components/Props'
import MultiProps from './components/MultiProps'
import postData from './json/post_data.json'

function AppTest() {
  const [titleData , setTitleData] = useState(null)
    const onClickHandler = (title) => {
      setTitleData([title])
    }
    console.log(titleData);
    
  return (
    <>
    <h2>Props.. study</h2>
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


import React from 'react';

function MultiProps({id, title, body , onClickHandler}) {
  // console.log('props', data);
  
  return (
    <div className='post'>
      <h3>fake data jsonplaceholder {id}</h3>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={()=> onClickHandler(title)}>Click</button>
    </div>
  )
}

export default MultiProps;

```
# fileter 포함해서 usestate
```js
import React, { useState } from 'react'
import App from './App.scss'
// import Props from './components/Props'
import MultiProps from './components/MultiProps'
import postData from './json/post_data.json'

function AppTest() {
  const [titleData , setTitleData] = useState(postData)
    const onClickHandler = (id) => {
      setTitleData(
        postData.filter(item=> {
         return id === item.id
        })
      )
    }

    console.log(titleData);
    
  return (
    <>
    <h2>Props.. study</h2>
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

import React from 'react';

function MultiProps({id, title, body , onClickHandler}) {
  // console.log('props', data);
  
  return (
    <div className='post'>
      <h3>fake data jsonplaceholder {id}</h3>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={()=> onClickHandler(id)}>Click</button>
    </div>
  )
}

export default MultiProps;

```
 # 
```js
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


import React from 'react';

function MultiProps({id, title, body , onClickHandler}) {
  // console.log('props', data);
  
  return (
    <div className='post'>
      <h3>fake data jsonplaceholder {id}</h3>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={()=> onClickHandler(id)}>Click</button>
    </div>
  )
}

export default MultiProps;

```