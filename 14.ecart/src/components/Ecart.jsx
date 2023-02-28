import React from 'react'
import { useState } from 'react'

const fruit = [
  {id: 0, name: 'Apple', price: 10, selected: 0, stock: 12},
  {id: 1, name: 'Melon', price: 20, selected: 0, stock: 5},
  {id: 2, name: 'Orange', price: 8, selected: 0, stock: 20},
]

const Ecart = () => {
  const [products, setProducts] = useState(fruit)
  const [count, setCount] = useState(1)
  const upDisbaled = () => {
    if (count >= 12) {
      return true
    }
  }
  const prevDisabled = () => {
    if (count <= 0) {
      return true
    } 
  }

  return (
    <div className='container mx-auto'>
      <div className='pt-6 pb-4'>
        <h1 className='text-4xl'>Ecart</h1>
        <div>
          <button disabled={upDisbaled()} className='border-2 rounded-lg p-2 border-green-400 mr-2 disabled:bg-blue-200'
          onClick={() => setCount(count + 1)}>+1</button>
          <button disabled={prevDisabled()} className='border-2 rounded-lg p-2 border-green-400 disabled:bg-blue-200'
          onClick={() => setCount(count - 1)}>-1</button>
          <span>Apple - $10 x {count}</span>
        </div>
        <p className='pt-4'>Your cart is empty</p>
      </div>
      <hr/>
      <div className='pt-4'>
        <h2 className='text-3xl'>Inventory</h2>
        {
          products.map(product => (
            <div className='pt-4'>
              <button className=' border-2 rounded-lg p-2 border-green-400'>Buy</button>
              {' '}{product.name} - {product.price}$ ({product.selected} selected, {product.stock} in stock)
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Ecart
