import React from 'react'

const Succes = ({count}) => {
  return (
    <div className='w-[400px] h-[350px] my-[50px] mx-auto bg-white rounded-3xl p-10'>
        <img className='mx-auto pb-4' src="/assets/success.svg" alt="Success" width='100' height='100'/>
        <h3 className=' text-center text-2xl pb-4'>Успешно!</h3>
        <p className='text-center pb-4'>Всем {count} пользователям отправлено приглашение.</p>
        <div className='text-center'>
            <button onClick={() => window.location.reload()} className='bg-orange-400 w-full px-4 py-4 transition-all border rounded-2xl hover:bg-orange-500 active:bg-orange-300'>Вернуться к списку</button>
        </div>
    </div>
  )
}

export default Succes

// 