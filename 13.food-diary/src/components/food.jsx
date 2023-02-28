import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react'
const currentKcal = 500;
const MIN = 100;
const MAX = 2000;

const cat = 'Breakfast';

const initialNotes = [
    {id: 0, text: "Breakfast", calories: 900, timestamp: new Date(2023, 1, 1, 10, 0, 0)},
    {id: 1, text: "Lunch", calories: 550, timestamp: new Date(2023, 1, 1, 10, 0, 0)},
    {id: 2, text: "Dinner", calories: 800, timestamp: new Date(2023, 1, 1, 10, 0, 0)},
  ]

let nextId = initialNotes.length;

const Food = () => {
    const [calories, setCalories] = useState(currentKcal);
    const [category, setCategory] = useState(cat);
    const [foodCategorys, setFoodCategory] = useState(initialNotes);
    const [time, setTime] = useState(new Date());
    const [searchValue, setSearchValue] = useState('')
    const step = 100;
    const onChangeSearchValuee = (e) => {
        setSearchValue(e.target.value);
      }

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let data = `${year}-0${month}-${date}`;

    let fil = foodCategorys.filter(note => {
        const category = (note.text).toLowerCase()
        if (category.includes(searchValue.toLowerCase())) {
            return true
        }
    })

    function formatDate(date) {
        return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
    }


  return (
    <div className='container mx-auto'>
        <h1 className=' text-2xl pt-4 text-center'>Food Diary</h1>
        <div className='pt-6'>
            <div className='flex gap-5 justify-center'>
                <select className=' text-xl rounded-sm' 
                autoComplete='off' 
                name="text" 
                onChange={e => setCategory(e.target.value)}
                value={category}>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </select>
                <input className='text-2xl pl-2' type="date" 
                value={formatDate(time)}
                onChange={e => setTime(new Date(e.target.value))}
                />
                <div className='flex'>
                    <input className=' rounded-l-sm text-2xl pl-2' type="number" min={MIN} max={MAX} onChange={e => setCalories(e.target.value)} step={step} value={calories}/>
                    <div className=' bg-slate-200 rounded-r-sm pt-[3px] px-4 text-2xl'>kcal</div>
                </div>
                <button onClick={() => {
                    setFoodCategory([
                        ...foodCategorys,
                        {id: nextId++, text: category, timestamp: time, calories: calories}
                    ])
                }} className='bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-all active:bg-blue-400'>Add</button>
            </div>
        </div>
        <div className='flex justify-center pt-6'>
            <input className='text-2xl pl-2 pr-[325px] rounded-xl py-2' autoComplete='off' type="search" value={searchValue}
            onChange={onChangeSearchValuee}
            placeholder='Search...'/>
        </div>
        <div>
            <ul className='grid text-center pt-10'>
                    {
                        fil.map((foodCategory) => (
                            <li key={foodCategory.id}>
                                <small>{new Date(foodCategory.timestamp).toLocaleDateString("ru")} {new Date(foodCategory.timestamp).toLocaleTimeString("ru")}</small>
                                <br/>
                                {foodCategory.text}{' - '}{foodCategory.calories}{' '}
                            <button className='rotate-45' onClick={() => {
                                setFoodCategory(
                                    foodCategorys.filter(t => t.id !== foodCategory.id),
                                )
                              }}>+</button></li>
                        ))
                    }
            </ul>
        </div>
    </div>
  )
}

export default Food
