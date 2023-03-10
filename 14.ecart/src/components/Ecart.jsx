import React from 'react'
import { useState } from 'react'

// Нужно ли в данном примере разделять код на компаненты

const fruit = [
  {id: 0, name: 'Apple', price: 10, selected: 0, stock: 12},
  {id: 1, name: 'Melon', price: 20, selected: 0, stock: 5},
  {id: 2, name: 'Orange', price: 8, selected: 0, stock: 20},
]


const Ecart = () => {
  // products множественное число product единственное число
  const [products, setProducts] = useState(fruit)
  // const [count, setCount] = useState()
  const [cart, setCart] = useState([])

  //Не могу понять почему id в консоли выводит правильно а все остальное он пишет undefined
  const putToCart = (id, count = 1) => {
    setCart({
      ...cart,
      [id]: cart[id] + count
    }, console.log(id)
    )
  }

  // TODO: есть ли разниза межлу оператором in и === в данном примере 
  // 1. проверить что в стоке есть достаточное доступных товаров 
  // 2. если да то должны их вычесть из стока 
  // 3. нужно сформировать объекст заказа 
  // 4. очистить корзину
  let buy = (id, stock = 1) => {
    setCart(
      {
        ...cart,
        // если кликнутый id есть в объекте то мы прибовляем к данному объекту еще 1 такой же товар если нет то создаем новый товар и пишем максимальное количество товара в данный момент
        [id]: (id in cart) ? cart[id] + stock : Math.max(stock, 0),
      }
    )
    console.log(id)
  }

  // const upDisbaled = () => {
  //   if (count >= 12) {
  //     return true
  //   }
  // }
  // const prevDisabled = () => {
  //   if (count <= 0) {
  //     return true
  //   }
  // }

  return (
    <div className='container mx-auto'>
      <div className='pt-6 pb-4'>
        <h1 className='text-4xl'>Ecart</h1>
        <div>
          {
            cart.length ? (
              cart.map(cart => (
                <div key={cart.id}>
                    <button className='border-2 rounded-lg p-2 border-green-400 mr-2 disabled:bg-blue-200'>+1</button>
                    <button className='border-2 rounded-lg p-2 border-green-400 disabled:bg-blue-200'
                    >-1</button>
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
              onClick={() => {
                buy(product.id)
              }}
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
