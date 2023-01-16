import React from 'react'
import { useState } from 'react';

const Slider = () => {
    const [value, setValue] = useState({
        r: 255,
        g: 255,
        b: 255,
    })
    const MIN = 0;
    const MAX = 255;
    let rgb = `rgb(${value.r},${value.g},${value.b})`

    let styleConfig = { backgroundColor : rgb}

    const changeR = (e) => {
        setValue({
            ...value,
            r: e.target.value
        });
    }

    const changeG = (e) => {
        setValue({
            ...value,
            g: e.target.value
        });
    }

    const changeB = (e) => {
        setValue({
            ...value,
            b: e.target.value
        });
    }


    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    
    function rgb2hex(r, g, b) {
        return "#" + componentToHex(value.r) + componentToHex(value.g) + componentToHex(value.b);
    }

    console.log(rgb2hex())


    return (
        <div className=' container mx-auto'>
            <h1 className='text-2xl '>Color chooser</h1>
            <p>R</p>
            <form action="">
                <input type="range"
                onChange={changeR}
                min={MIN}
                max={MAX}
                value={value.r}
                />
                <span>{value.r}</span>
            </form>
            <p>G</p>
            <form action="">
                <input type="range"
                onChange={changeG}
                min={MIN}
                max={MAX}
                value={value.g}
                />
                <span>{value.g}</span>
            </form>
            <p>B</p>
            <form action="">
                <input type="range"
                onChange={changeB}
                min={MIN}
                max={MAX}
                value={value.b}
                />
                <span>{value.b}</span>
            </form>
            <div className='border-2 mt-3 w-20 h-20' style={styleConfig}></div>
            <p>Dec: rgba ({value.r}, {value.g}, {value.b}, 1)</p>
            <p>Hex: {rgb2hex()}</p>
        </div>
    )
}

export default Slider
