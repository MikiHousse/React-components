import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const formatCount = () => {
        return count === 0 ? 'empty' : count;
    }
    const colotCount = () => {
        let classes = 'text-xl ';
        classes += count === 0 ? 'text-slate-500' : 'text-red-500';
        return classes
    }
    const clickCount = () => {
        let color = 'border-2 px-10 hover:bg-slate-400 rounded-lg ';
        if (! 'bg-slate-300') {
            color += ' bg-slate-700'
        } return color += ' bg-slate-300'

    }
    const handleIncrement = () => {
        setCount(count + 1)
        console.log(count)
    }
    const handleDecrement = () => {
        setCount(count - 1)
        console.log(count)
    }

    
    return (
        <>
            <div className=' container mx-auto'>
                <div className='pt-10 flex justify-center gap-5'>
                    <h1 className={colotCount()}>{formatCount()}</h1>
                    <div className=''>
                        <button className={clickCount()} onClick={handleIncrement}>+</button>
                    </div>
                    <div className=''>
                        <button className='border-2 px-10 bg-slate-300 hover:bg-slate-400 rounded-lg' onClick={handleDecrement}>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;