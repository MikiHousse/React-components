import React from 'react'
import useInput from './useInput'

const Form = () => {
    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 8})


  return (
    <div className=' container mx-auto'>
        <div className='flex justify-center pt-[300px]'>
            <form className='grid' action="">
                <h1 className=' text-center pb-6'>Регистрация</h1>
                {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>Неккоректная длина</div>}
                {(email.isDirty && email.emailError) && <div style={{color: 'red'}}>Электронная почта имеет неверное значение</div>}
                <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} className='mb-6 border-2 border-neutral-700 rounded-md' name='email' type="text" placeholder='Enter your email'/>
                {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>Слишком длинный пароль</div>}
                {(password.isDirty && password.minLengthError) && <div style={{color: 'red'}}>Неккоректная длина</div>}
                <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value} className='mb-6 border-2 border-neutral-700 rounded-md' name='password' type="password" placeholder='Enter your password'/>
                <div>
                    <button disabled={!email.inputValid || !password.inputValid} className=' bg-sky-500 px-5 py-2 rounded-lg hover:bg-sky-400 disabled:bg-slate-500' type='submit'>SingIn</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
