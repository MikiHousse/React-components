import React from 'react'
import { Users } from './users'
import { data } from './mock'


const Invite = ({searchValue, onChangeSearchValuee, invites, onClickInvite, onClickSentInvites}) => {
    const dis = invites.length > 0
    return (
    <>
        <div className='w-[400px] h-[650px] my-[50px] mx-auto bg-white rounded-3xl p-10'>
            <div>
                <input value={searchValue} onChange={onChangeSearchValuee} className='border-2 border-zinc-300 p-4 rounded-2xl w-full pl-6' type="text" placeholder='Найти пользователя'/>
            </div>
                <ul className=' list-none p-0 m-0 overflow-auto mt-7 h-[75%]'>
                    {
                        data.filter(obj => {
                            const fullName = (obj.first_name + obj.last_name).toLowerCase();
                            if(fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())) {
                                return true
                            }
                        }).map((obj) => (
                            <Users 
                            onClickInvite={onClickInvite}
                            isInvited={invites.includes(obj.id)} 
                            key={obj.id} 
                            {...obj}/>
                        ))
                    }
                </ul>
                
                <div className='text-center'>
                    <button disabled={!dis} onClick={onClickSentInvites} className='bg-orange-400 w-full px-4 py-4 transition-all border rounded-2xl hover:bg-orange-500 active:bg-orange-300'>Отправить приглашение</button>
                </div>
        </div>
    </>
  )
}

export default Invite