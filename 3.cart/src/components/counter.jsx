import React from 'react'
// import { useState } from 'react'

const Counter = (props, {min, max}) => {
    const {value} = props
    // const {price} = props

    const formatValue = () => {
        return value === 0 ? 'empty' : value;
    }
    const colotCount = () => {
        let classes = 'text-xl ';
        classes += value === 0 ? 'text-slate-500' : 'text-red-500';
        return classes
    }
    const clickCount = () => {
        let color = 'border-2 px-10 hover:bg-slate-400 rounded-lg ';
        if (! 'bg-slate-300') {
            color += ' bg-slate-700'
        } return color += ' bg-slate-300'
    }


    const handleIncrement = () => {
            props.onIncrement(props.id)

    }

    const handleDecrement = () => {
        props.onDecrement(props.id)
    }


    
    return (
        <>
            <div >
                <div className='pt-10 flex justify-center gap-5'>
                    <span>{props.name}</span>
                    <span>{props.price}$</span>
                    <h1 className={colotCount()}>{formatValue()}</h1>
                    <div className=''>
                        <button className={clickCount()} onClick={handleIncrement}>+</button>
                    </div>
                    <div className=''>
                        <button className='border-2 px-10 bg-slate-300 hover:bg-slate-400 rounded-lg' onClick={handleDecrement}>-</button>
                    </div>
                    <div className=''>
                        <button className='border-2 px-10 bg-red-300 hover:bg-slate-400 rounded-lg' onClick={() => props.onDelete(props.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Counter