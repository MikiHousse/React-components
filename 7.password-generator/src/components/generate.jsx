import React from 'react'
import { useState } from 'react'

const Generate = () => {
    const [length, setLength] = useState(6);
    const [password, setPassword] = useState('******');
    const [checked, setChecked] = useState(false);
    const [checkedUp, setCheckedUp] = useState(false)
    const [checkedSym, setCheckedSym] = useState(false)
    const MIN = 6;
    const MAX = 12;

    const handleClick = () => setChecked(!checked);
    console.log(checked)

    const handleClickUp = () => setCheckedUp(!checkedUp);
    console.log(checkedUp)

    const handleClickSym = () => setCheckedSym(!checkedSym);

    const change  = (e) => {
        setLength(e.target.value)
    }
    // const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const generation = () => {
        const ran = () => {
            let result = '';
            let char = '0123456789';
            let charLow = 'abcdefghijklmnopqrstuvwxyz0123456789';
            let charLowUp = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = char.length;
            if (checked) {
                char += 'abcdefghijklmnopqrstuvwxyz'
            } 
            
            for (let i = 0; i < length; i++) {
                console.log(char)
                result += char.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result
        }
        setPassword(ran(length))
    }
    const gen = () => {
        const ran = () => {
            let result = '';
            const char = '0123456789';
            const charactersLength = char.length;
            for (let i = 0; i < length; i++) {
                result += char.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        setPassword(ran(length))
    }
    const genLow = () => {
        const ran = () => {
            let result = '';
            const char = 'abcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = char.length;
            for (let i = 0; i < length; i++) {
                result += char.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        setPassword(ran(length))
    }

    const genUp = () => {
        const ran = () => {
            let result = '';
            const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = char.length;
            for (let i = 0; i < length; i++) {
                result += char.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        setPassword(ran(length))
    }

    const genSym = () => {
        const ran = () => {
            let result = '';
            const char = '!@#$%^&*()<>,.?/[]{}-=_+|/0123456789';
            const charactersLength = char.length;
            for (let i = 0; i < length; i++) {
                result += char.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        setPassword(ran(length))
    }

    const genSs = () => {
        const ran = () => {
            let result = '';
            const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            const charactersLength = char.length;
            for (let i = 0; i < length; i++) {
                result += char.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        setPassword(ran(length))
    }

  return (
    <div className=' container mx-auto'>
        <h1 className='text-3xl pb-5'>Generate a secure password</h1>
        <form className='pb-5' action="">
            <input readOnly className='border-b-2' type="text" value={password}/>
        </form>
        <form className='flex pb-5' action="">
            <p className='pr-2'>Length</p>
            <input type="range" 
            value={length}
            onChange={change}
            min={MIN}
            max={MAX}
            />
            <p className='pl-2'>{length}</p>
        </form>
        <div className='pb-4'>
            <form className='pb-2'>
                <input disabled type="checkbox" name='Numbers (always enabled)' defaultChecked/>
                <label htmlFor="Numbers (always enabled)">Numbers (always enabled)</label>
            </form>
            <form className='pb-2'>
                <input type="checkbox" name='Lowercase' onClick={handleClick} checked={checked}/> 
                <label htmlFor="Lowercase">Lowercase</label>
            </form>
            <form className='pb-2'>
                <input type="checkbox" name='Uppercase' onClick={handleClickUp} checked={checkedUp}/> 
                <label htmlFor="Uppercase">Uppercase</label>
            </form>
            <form className='pb-2'>
                <input type="checkbox" name='Symbols' onClick={handleClickSym} checked={checkedSym}/> 
                <label htmlFor="Symbols">Symbols</label>
            </form>
        </div>
        <div>
            <button className=' px-5 py-2 bg-sky-500 rounded-xl' 
            onClick={generation}>Generate</button>
        </div>
    </div>
  )
};

export default Generate

// (checked && checkedUp) ? genSs : gen && checked ? genLow : gen && checkedUp ? genUp : gen && checkedSym ? genSym : gen