import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [tweet, setTweet] = useState('');
    const MAX_LENGTH = 140;
    let result = MAX_LENGTH - tweet.length;
    
    const send = () => {
        return alert(`'${tweet}'`)
    }


  return (
    <div className=' container mx-auto my-5'>
        <h1 className='pb-4 text-xl'>Tweet</h1>
        <form onSubmit={e => {
            e.preventDefault()
        }}>
            <textarea className='border-2 border-emerald-500' placeholder='Input up to 140 characets...' value={tweet}
            onChange={e => setTweet(e.target.value)} cols="30" rows="5"/>
        </form>
        <br />
        <div className='flex'>
            <button type='submit' onClick={send} className='bg-amber-400 px-10 py-4 hover:bg-amber-500 rounded-xl'>Tweet</button>
            <p className='pl-24'>{result}</p>
        </div>
    </div>
  )
}


export default Form