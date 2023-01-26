import React from 'react'
import User from './users'

const Invite = ({items, isLoading}) => {
  return (
    <>
        <div className='w-[400px] h-[600px] my-[50px] mx-auto bg-white rounded-3xl p-10'>
            <div>
                <input className='border-2 border-zinc-300 p-4 rounded-2xl w-full pl-6' type="text" placeholder='Найти пользователя'/>
            </div>
            <ul className=' list-none p-0 m-0 overflow-auto mt-7 h-[73%]'>
                    <User/>
            </ul>
            <div className='text-center'>
                <button className='bg-orange-400 w-full px-4 py-4 transition-all border rounded-2xl hover:bg-orange-500 active:bg-orange-300'>Отправить приглашение</button>
            </div>
        </div>
    </>
  )
}

export default Invite