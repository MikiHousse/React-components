import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

let nextId = 3
const current = 500;
const MIN = 100;
const MAX = 2000;
const fooding = [
    {id: 0, what: 'Breakfast', },
    {id: 1, what: 'Dinner', },
    {id: 2, what: 'Breakfast', },
]

const Food = () => {
    const [kcal, setKcal] = useState(current)
    const [lists, setList] = useState(fooding)
    const step = 100

    let newDate = new Date();
    console.log(newDate)
    let date = newDate.getDate();
    console.log(date)
    let month = newDate.getMonth() + 1;
    console.log(month)
    let year = newDate.getFullYear();
    console.log(year)

    // function applyCurrent(num) {
    //     let validNum = Math.max(MIN, Math.min(MAX, num))
    //     setList(validNum)
    // }

    // function parseCurrentStr() {
    //     let num = parseInt(kcal)
    //     applyCurrent(isNaN(num) ? MIN : num)
    // }

    // useEffect(() => {
    //     setKcal(current)
    // }, [current])

  return (
    <div className='container mx-auto'>
        <h1 className=' text-2xl pt-4 text-center'>Food Diary</h1>
        <div className='pt-6'>
            <div className='flex gap-5 justify-center'>
                <select className=' text-xl rounded-sm' autoComplete='off' name="text">
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </select>
                <input className='text-2xl pl-2' type="date" defaultValue={`${year}-0${month}-0${date}`}/>
                <div className='flex'>
                    <input className=' rounded-l-sm text-2xl pl-2' type="number" min={MIN} max={MAX} onChange={e => setKcal(e.target.value)} step={step} value={kcal}/>
                    <div className=' bg-slate-200 rounded-r-sm pt-[3px] px-4 text-2xl'>kcal</div>
                </div>
                <button className='bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-all active:bg-blue-400'>Add</button>
            </div>
        </div>
        <div className='flex justify-center pt-6'>
            <input className='text-2xl pl-2 pr-[325px] rounded-xl py-2' autoComplete='off' type="search" placeholder='Search...'/>
            <ul>
                {
                    lists.map((list) => (
                        <li key={list.id}>{list.what}</li>
                    ))
                }
            </ul>
        </div>
     
    </div>
  )
}

export default Food
