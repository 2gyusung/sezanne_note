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
