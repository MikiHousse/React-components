import React, { useState } from 'react'


const initialTodos = [
    { id: 0, name: 'Buy milk', check: false },
    { id: 1, name: 'Eat tacos', check: false },
    { id: 2, name: 'Brew tea', check: false },
  ];
let nextId = initialTodos.length;
  console.log(initialTodos.length)

const Todo = () => {
    const addDis = 'bg-blue-300 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-all active:bg-blue-400'
    const noDis = 'bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-all active:bg-blue-400'

    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialTodos);
    const [check, setCheck] = useState(false);

    const handlecCheck = (artistId) => {
        setArtists(artists.map(artist => {
            if (artist.id === artistId) {
                return check ? {
                    ...artist,
                    check: artist.check = setCheck(true)
                } : check 
            } else {
                return {
                    ...artist,
                    check: artist.check
                }
            }
        }))
        // if (!check) {
        //     setCheck(true) 
        // } else {
        //     setCheck(false) 
        // }
    }

    return (
        <div className='container mx-auto'>
          <h1>Todo List</h1>
          <input
            className=' rounded-lg pl-3'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button 
          disabled={name.length === 0}
          onClick={() => {
            setName('');
            setArtists([
              ...artists,
              { id: nextId++, name: name, check: false }
            ]);
          }}
          className={name.length === 0 ? addDis : noDis}
          >Add</button>
          <ul>
            {artists.map(artist => (
                
              <li className={`pr-4 text-xl ${check ? 'line-through' : ''}`} key={artist.id}><input onClick={() => handlecCheck(artist.id)} className='mr-2' type="checkbox" />{artist.name}{' '}<button className='rotate-45' onClick={() => {
                setArtists(
                    artists.filter(a => a.id !== artist.id),
                )
              }}>+</button></li>
            ))}
          </ul>
              <div className='flex'>
                <h3 className='pr-2'>Show:</h3>
                <ul className='flex gap-1'>
                    <li className=' text-blue-400 hover:text-blue-500 cursor-pointer'>All,</li>
                    <li className=' text-blue-400 hover:text-blue-500 cursor-pointer'>Active,</li>
                    <li className=' text-blue-400 hover:text-blue-500 cursor-pointer'>Done</li>
                </ul>
              </div>
        </div>
        
      );
}

export default Todo
