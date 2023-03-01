import React from 'react'
import { useState } from 'react'

const fruit = [
  {id: 0, name: 'Apple', price: 10, selected: 0, stock: 12},
  {id: 1, name: 'Melon', price: 20, selected: 0, stock: 5},
  {id: 2, name: 'Orange', price: 8, selected: 0, stock: 20},
]


const Ecart = () => {
  const products = fruit
  const [count, setCount] = useState()
  const [carts, setCarts] = useState({})
  const order = (item) => {
    // const itemIndex = carts.findIndex(cart => cart.id === item.id);
    setCarts({...carts,  item})
  }
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
          {
            carts.length ? (
              carts.map(cart => (
                <div key={cart.id}>
                    <button disabled={upDisbaled()} className='border-2 rounded-lg p-2 border-green-400 mr-2 disabled:bg-blue-200'>+1</button>
                    <button disabled={prevDisabled()} className='border-2 rounded-lg p-2 border-green-400 disabled:bg-blue-200'
                    onClick={() => setCount(count - 1)}>-1</button>
                    <span>{cart.name} - ${cart.price} x {cart.selected}</span> 
                </div>))) : (<p className='pt-4'>Your cart is empty</p>
            )
          }
        </div>
      </div>
      <hr/>
      <div className='pt-4'>
        <h2 className='text-3xl'>Inventory</h2>
        {
          products.map(product => (
            <div key={product.id} className='pt-4'>
              <button className='border-2 rounded-lg p-2 border-green-400'
              onClick={() => order(product.id)}
              >Buy</button>
              {' '}{product.name} - {product.price}$ ({product.selected} selected, {product.stock} in stock)
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Ecart
