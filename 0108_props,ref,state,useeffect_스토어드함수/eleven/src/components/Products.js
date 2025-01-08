import React from 'react'
import Product from './Product'

function Products({data}) {
  console.log('data',data);
  return (
    
    <div>
     
        <div className='products'>
      {
        data.map(product=>  ( 
          <Product product={product} key={product.id} />
        ))
      }
      </div>
    </div>
  )
}

export default Products
