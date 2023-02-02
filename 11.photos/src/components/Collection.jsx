import React from 'react'

const Collection = ({ name, images }) => {
    return (
      <div className="collection max-w-[470px] bg-white p-7 rounded-3xl cursor-pointer transition-all">
        <img className="collection__big object-cover h-[250px] w-full rounded-3xl mb-4" src={images[0]} alt="Item" />
        <div className="collection__bottom flex justify-between">
          <img className="collection__mini object-cover w-[31%] h-[80px] rounded-2xl" src={images[1]} alt="Item" />
          <img className="collection__mini object-cover w-[31%] h-[80px] rounded-2xl" src={images[2]} alt="Item" />
          <img className="collection__mini object-cover w-[31%] h-[80px] rounded-2xl" src={images[3]} alt="Item" />
        </div>
        <h4 className='m-0 mt-4 text-xl'>{name}</h4>
      </div>
    );
  }

export default Collection


