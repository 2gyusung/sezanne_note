import React from 'react'
import App from './App.css'

const data = [
  {name : 'Gilldong',
    gender : 'm'
  },
  {name : 'Malja',
    gender : 'f'
  },
  {name : 'Sunduck',
    gender : 'f'
  },
  {name : 'Soonsin',
    gender : 'm'
  }
]

function Users({user : {name, gender}}) {
  // console.log(user);
  // const {name, gender} =props.users
  // const [a,b,c] =props.fruits
    return (
      <>
    <h2>name :{name} /gender: {gender}</h2>
    {/* <h2>{a}/{b}/{c}</h2> */}
      </>
  )
}

function AppTest() {
  // const array = ['apple','banana','cherry']
  return (
    <div>
      {
        data.map(item=> {
          return  <Users user={item} />
        })
      }
    </div>
  )
}

export default AppTest
