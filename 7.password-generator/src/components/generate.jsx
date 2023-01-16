import React from 'react'
import { useState } from 'react'

const Generate = () => {
    const [legnth, setLength] = useState(6)
    const MIN = 6;
    const MAX = 12;

    const change  = (e) => {
        setLength(e.target.value)
    }

    const ran = (x) => {
        let result = '';
        const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = char.length;
        for (let i = 0; i < legnth; i++) {
            result += char.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const r = ran(legnth)

    

  return (
    <div className=' container mx-auto'>
        <h1 className='text-3xl'>Generate a secure password</h1>
        <form className='pb-2' action="">
            <input readOnly className='border-b-2' type="text" value={r}/>
        </form>
        <form className='flex' action="">
            <p className='pr-2'>Length</p>
            <input type="range" 
            onChange={change}
            min={MIN}
            max={MAX}
            />
        </form>
        <button onClick={ran(legnth)}>Generate</button>
    </div>
  )
}

export default Generate