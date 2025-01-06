import React from 'react'

function Viewer({count}) {
  return (
    <div className='Viewer'>
      <p>현재 카운트 : </p>
      <h1>{count}</h1>
    </div>
  )
}

export default Viewer
