import React from 'react'
import { useState } from 'react';

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const List = () => {
  // const [liked, setLiked] = useState(false);
  if (product.isFruit) {
    return isFruit;
  }

  const listItems = products.map(product =>
    <button
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }} onClick={() => setLiked(true)}
    >
      {product.title}
    </button>
  );

  return (
    <div className='grid'>{listItems}</div>
  );

  

  // return (
  //   <div className=' container mx-auto'>
  //     <ul className='pt-6'>
  //       <li className='border-2 hover:bg-slate-200 cursor-pointer'>
  //         <a>First Item</a>
  //       </li>
  //       <li className='border-2 hover:bg-slate-200 cursor-pointer'>
  //         <a>Second Item</a> 
  //       </li>
  //     </ul>
  //   </div>
  // )
}



export default List