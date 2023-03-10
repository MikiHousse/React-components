import React from 'react'
import { useState } from 'react';

//TODO: Оформить
const Calculator = () => {
    const [height, setHeight] = useState(140)
    const [weight, setWeight] = useState(30)
    const MIN_HIEGHT = 140;
    const MAX_HIEGHT = 200;
    const MIN_WEIGHT = 30;
    const MAX_WEIGHT = 180;

    const result = ((weight / height ** 2) * 10000).toFixed(1)

    const bmiСategory = () => {
        if (result < 18) {
            return <span className='text-yellow-600'>Underweight</span>
        } else if (result < 19 || result < 25) {
            return <span className='text-green-600'>Normal Weight</span>
        } else if (result < 25 || result < 30) {
            return <span className='text-yellow-600'>Overweight</span>
        } else if (result < 30 || result < 93) {
            return <span className='text-red-600'>Obese</span>
        }
    }

    const changeHieght = (e) => {
        setHeight(e.target.value)
    }

    const changeWeight = (e) => {
        setWeight(e.target.value)
    }

  return (
    <div className='container mx-auto text-white w-1/4 pt-10'>
        <h1 className=' text-2xl pb-4'>BMI Calculator</h1>
        <p className='text-xl'>Height, cm</p>
        <form className='flex' action="">
            <input 
                type="range"
                onChange={changeHieght}
                min={MIN_HIEGHT}
                max={MAX_HIEGHT}
                step={1}
                value={height}/>
            <div>{height}</div>
        </form>
        <p className='text-xl'>Weight, kg</p>
        <form className='flex pb-4' action="">
            <input 
                type="range"
                onChange={changeWeight}
                min={MIN_WEIGHT}
                max={MAX_WEIGHT}
                step={1}
                value={weight}/>
            <div>{weight}</div>
        </form>
        <p className='text-xl'>BMI: {result} {bmiСategory()}</p>
    </div>
  )
}

export default Calculator
