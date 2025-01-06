import React from 'react'

function Controller({handleCount}) {
  const onClickCnt = (e) => { //방법2
    const value = Number(e.target.value)
    handleCount(value)
  }
  return (
    <div className='Controller'>
      <button onClick={()=> handleCount(-1)}>-1</button>
      <button value={-10} onClick={onClickCnt}>-10</button>  {/*방법2*/}
      <button onClick={()=> handleCount(-100)}>-100</button>
      <button onClick={()=> handleCount(100)}>+100</button>
      <button onClick={()=> handleCount(10)}>+10</button>
      <button onClick={()=> handleCount(1)}>+1</button>
    </div>
  )
}

export default Controller
