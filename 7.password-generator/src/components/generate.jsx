import React from 'react'
import { useState } from 'react'

const Generate = () => {
    const [legnth, setLength] = useState(6);
    const [password, setPassword] = useState('******');
    const [checked, setChecked] = useState(false);
    const [checkedUp, setCheckedUp] = useState(false)

    const MIN = 6;
    const MAX = 12;

    const handleClick = () => setChecked(!checked);
    console.log(checked)

    const handleClickUp = () => setCheckedUp(!checked);
    console.log(checkedUp)

    const change  = (e) => {
        setLength(e.target.value)
    }
    // const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const gen = () => {
        const ran = () => {
            let result = '';
            const char = '0123456789';
            const charactersLength = char.length;
            for (let i = 0; i < legnth; i++) {
                result += char.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        setPassword(ran(legnth))
    }
    const genLow = () => {
        const ran = () => {
            let result = '';
            const char = 'abcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = char.length;
            for (let i = 0; i < legnth; i++) {
                result += char.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        setPassword(ran(legnth))
    }

    // const genUp = () => {
    //     const ran = () => {
    //         let result = '';
    //         const char = 'abcdefghijklmnopqrstuvwxyz0123456789';
    //         const charactersLength = char.length;
    //         for (let i = 0; i < legnth; i++) {
    //             result += char.charAt(Math.floor(Math.random() * charactersLength));
    //         }
    //         return result;
    //     }

    //     setPassword(ran(legnth))
    // }

    

  return (
    <div className=' container mx-auto'>
        <h1 className='text-3xl pb-5'>Generate a secure password</h1>
        <form className='pb-5' action="">
            <input readOnly className='border-b-2' type="text" value={password}/>
        </form>
        <form className='flex pb-5' action="">
            <p className='pr-2'>Length</p>
            <input type="range" 
            value={legnth}
            onChange={change}
            min={MIN}
            max={MAX}
            />
            <p className='pl-2'>{legnth}</p>
        </form>
        <div>
            <button className=' px-5 py-2 bg-sky-500 rounded-xl' onClick={checked ? genLow : gen}>Generate</button>
        </div>
        <div>
            <form >
                <input disabled type="checkbox" name='Numbers (always enabled)' defaultChecked/>
                <label htmlFor="Numbers (always enabled)">Numbers (always enabled)</label>
            </form>
            <form >
                <input type="checkbox" name='Lowercase' onClick={handleClick} checked={checked}/> 
                <label htmlFor="Lowercase">Lowercase</label>
            </form>
            {/* <form >
                <input type="checkbox" name='Uppercase' onClick={handleClickUp} checked={checkedUp}/> 
                <label htmlFor="Uppercase">Uppercase</label>
            </form> */}
        </div>
    </div>
  )
};

export default Generate