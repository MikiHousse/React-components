import React, { useState } from 'react'


const initialTodos = [
    { id: 0, name: 'Buy milk', check: true },
    { id: 1, name: 'Eat tacos', check: true },
    { id: 2, name: 'Brew tea', check: false },
  ];

const all = 0;
const active = 1;
const checked = 2;


let nextId = initialTodos.length;

const Todo = () => {

    const [name, setName] = useState('');
    const [todos, setTodos] = useState(initialTodos);
	  const [filter, setFilter] = useState(all);
    
    const handlecCheck = (todoId) => {
      setTodos(
        todos.map(todo => ({
          ...todo,
          check: todoId === todo.id ? !todo.check : todo.check
        }))
      )
    }

	const filtering = todos.filter(todo => {
		if (filter === checked) {
			return todo.check
		} else if (filter === active) {
			return !todo.check
		} else {
			return true
		}
	})

    return (
        <div className='container mx-auto'>
          <h1>Todo List</h1>
          <input
            className='rounded-lg pl-3'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button 
            disabled={name.length === 0}
            onClick={() => {
              setName('');
              setTodos([
                { id: nextId++, name: name, check: false },
                ...todos
              ]);
            }}
            className={`px-4 py-2 rounded-md transition-all 
            ${name.length === 0 ? 'bg-blue-300' : 'bg-blue-500 active:bg-blue-400 hover:bg-blue-700 hover:text-white'}`}
          >Add</button>
          <ul>
            {filtering.map(todo => (
              <li className={`pr-4 text-xl ${todo.check ? 'line-through' : ''}`} key={todo.id}>
                <input
                onClick={() => handlecCheck(todo.id)}
                checked={todo.check}
                className='mr-2 cursor-pointer'
                type="checkbox" />{todo.name}{' '}
                <button className='rotate-45' onClick={() => {
                setTodos(
                  todos.filter(t => t.id !== todo.id),
                )
              }}>+</button></li>
            ))}
              </ul>
            <div className='flex'>
              <h3 className='pr-2'>Show:</h3>
					    <ul className='flex gap-2'>
                <li className={`text-blue-600 hover:text-blue-500 cursor-pointer ${filter === all ? 'font-bold' : ''}`}><a href="/" onClick={e => {e.preventDefault(); setFilter(all)}}>All</a></li>
                <li className={`text-blue-600 hover:text-blue-500 cursor-pointer ${filter === active ? 'font-bold' : ''}`}><a href="/" onClick={e => {e.preventDefault(); setFilter(active)}}>Active</a></li>
                <li className={`text-blue-600 hover:text-blue-500 cursor-pointer ${filter === checked ? 'font-bold' : ''}`}><a href="/" onClick={e => {e.preventDefault(); setFilter(checked)}}>Done</a></li>
					    </ul>
            </div>
        </div>

      );
}

export default Todo
