import React, { useState } from 'react'


const initialTodos = [
    { id: 0, name: 'Buy milk', check: true },
    { id: 1, name: 'Eat tacos', check: true },
    { id: 2, name: 'Brew tea', check: false },
  ];

const all = 0;
const checked = 1;
const active = 2;

let nextId = initialTodos.length;

const Todo = () => {
    const addDis = 'bg-blue-300 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-all active:bg-blue-400';
    const noDis = 'bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-all active:bg-blue-400';

    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialTodos);
	const [filter, setFilter] = useState(all)
    const dataActive = 'text-blue-600 hover:text-blue-500 cursor-pointer font-bold';
    const dataDef = 'text-blue-400 hover:text-blue-500 cursor-pointer';

    const handlecCheck = (artistId) => {
      setArtists(
        artists.map(artist => ({
          ...artist,
          check: artistId === artist.id ? artist.check = true : artist.check = false
        }))
      )
    }
	//FIXME: При клике на один из фильтров и обратно слитают чекбоксы и не правильно происходить фильтрация
	const filtered = artists.filter(artist => {
		if (filter === checked) {
			return artist.check
		} else if (filter === active) {
			return !artist.check
		} else {
			return true
		}
	})

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
            {filtered.map(artist => (
              <li className={`pr-4 text-xl ${artist.check ? 'line-through' : ''}`} key={artist.id}>
                <input onClick={() => 
                {handlecCheck(artist.id)}} 
                className='mr-2' 
                type="checkbox" />{artist.name}{' '}
                <button className='rotate-45' onClick={() => {
                setArtists(
                    artists.filter(a => a.id !== artist.id),
                )
              }}>+</button></li>
            ))}
              </ul>
              <div className='flex'>
                <h3 className='pr-2'>Show:</h3>
					<ul className='flex gap-2'>
						<li className={filter === all ? dataActive : dataDef}><a href="/" onClick={e => {e.preventDefault(); setFilter(all)}}>All</a></li>
						<li className={filter === active ? dataActive : dataDef}><a href="/" onClick={e => {e.preventDefault(); setFilter(active)}}>Active</a></li>
						<li className={filter === checked ? dataActive : dataDef}><a href="/" onClick={e => {e.preventDefault(); setFilter(checked)}}>Done</a></li>
					</ul>
              </div>
        </div>

      );
}

export default Todo
