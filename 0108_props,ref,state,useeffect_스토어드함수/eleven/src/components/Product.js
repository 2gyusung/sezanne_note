import React from 'react'

function Product({product : {name,price,rating,coupon,post,url }}) {
  return (
    <div className='item'>
       <img src={url}/>
       <div className='price__info'>
        <p className='name'>{name}</p>
        <p className='price'>{price}<span>원</span></p>
        <p className='rating'>별점 : {rating}</p>
        <p className='coupon'>{coupon}</p>
        <p className='post'>{post}</p>
      </div>
    </div>
  )
}

export default Product
