import React from 'react'
import Products from './Products'

function Body({data}) {
  return (
    <div>
         <h1 className='title'>11번가 특가 찬스</h1>
      <Products data={data}/>
    </div>
  )
}

export default Body
