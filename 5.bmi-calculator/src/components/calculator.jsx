import React from 'react'
import { useState } from 'react';

const Calculator = () => {
    const [height, setHeight] = useState(140)
    const MIN_HIEGHT = 140;
    const MAX_HIEGHT = 200;
    const [weight, setWeight] = useState(30)
    const MIN_WEIGHT = 30;
    const MAX_WEIGHT = 180;
    const h = height;
    const m = weight;
    const result = ((m / h ** 2) * 10000).toFixed(1)

    const bmi = () => {
        if(result < 18) {
            return <span className=' text-yellow-600'>Underweight</span>
        } else if (result < 19 || result < 25) {
            return <span className=' text-green-600'>Normal Weight</span>
        } else if (result < 25 || result < 30) {
            return <span className=' text-yellow-600'>Overweight</span>
        } else if (result < 30 || result < 93) {
            return <span className=' text-red-600'>Obese</span>
        }
    }

    const changeHieght = (e) => {
        setHeight(e.target.value)
    }

    const changeWeight = (e) => {
        setWeight(e.target.value)
    }

  return (
    <div className=' container mx-auto'>
        <h1 className=' text-2xl'>BMI Calculator</h1>
        <p>Height, cm</p>
        <form className='flex' action="">
            <input type="range"
                onChange={changeHieght}
                min={MIN_HIEGHT}
                max={MAX_HIEGHT}
                step={1}
                value={height}/>
            <div>{height}</div>
        </form>
        <p>Weight, kg</p>
        <form className='flex' action="">
            <input type="range"
                onChange={changeWeight}
                min={MIN_WEIGHT}
                max={MAX_WEIGHT}
                step={1}
                value={weight}/>
            <div>{weight}</div>
        </form>
        <hr />
        <p>BMI: {result} {bmi()}</p>
    </div>
  )
}

export default Calculator
