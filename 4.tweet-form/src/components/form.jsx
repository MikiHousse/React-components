import React from 'react'
import { useState } from 'react'


const Form = () => {
    const [tweet, setTweet] = useState('');
    
    const MAX_LENGTH = 140;
    let maxCharacters = MAX_LENGTH - tweet.length;
    
    const modal = () => {
        return alert(`'${tweet}'`)
    }

    const handleChange = (e) => {
        setTweet(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleDisabled = () => {
        return maxCharacters === MAX_LENGTH ? true : false
    }

  return (
    <div className='text-white w-1/4 mx-auto p-10'>
        <h1 className='pb-4 text-xl font-bold'>Tweet</h1>
        <form onSubmit={handleSubmit}>
            <textarea 
            maxlength={MAX_LENGTH} 
            className='border-2 border-gray-400 bg-slate-700 pl-2 rounded-xl' 
            placeholder='Input up to 140 characets...' 
            value={tweet}
            onChange={e => handleChange(e)} cols="30" rows="5"/>
        </form>
        <br />
        <div className='flex'>
            <button 
            disabled={handleDisabled()} 
            type='submit' 
            onClick={modal} 
            className='bg-blue-500 px-10 py-4 hover:bg-blue-600 rounded-xl disabled:bg-slate-400'>Tweet</button>
            <p className='pl-28 pt-3 text-xl text-blue-500 font-semibold'>{maxCharacters}</p>
        </div>
    </div>
  )
}


export default Form