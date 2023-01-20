import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength' :
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty': 
                    value ? setEmpty(false) : setEmpty(true)
                    break;
            }
        }
    },[value])

    return {
        isEmpty,
        minLengthError,
    }
}

    const useInput = (initialValue, validations) => {
        const [value, setValue] = useState(initialValue)
        const [isDirty, setDirty] = useState(false)

        const valid = useValidation(value, validations)

        const onChange = (e) => {
            setValue(e.target.value)
        }

        const onBlur = (e) => {
            setDirty(true)
        }

        return {
            value,
            onChange,
            onBlur,
            ...valid
        }
    }

const Form = () => {
    const email = useInput('', {isEmpty: true, minLength: 3})
    const password = useInput('', {isEmpty: true, minLength: 5})




  return (
    <div className=' container mx-auto'>
        <div className='flex justify-center pt-[300px]'>
            <form className='grid' action="">
                <h1 className=' text-center pb-6'>Регистрация</h1>
                {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>fewfwe</div>}
                {(email.isDirty && email.minLengthError) && <div style={{color: 'red'}}>fewfwe</div>}
                <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} className='mb-6 border-2 border-neutral-700 rounded-md' name='email' type="text" placeholder='Enter your email'/>
                {(password.isDirty && password.isEmpty) && <div style={{color: 'red'}}>fewfwe</div>}
                {(password.isDirty && password.minLengthError) && <div style={{color: 'red'}}>fewfwe</div>}
                <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value} className='mb-6 border-2 border-neutral-700 rounded-md' name='password' type="password" placeholder='Enter your password'/>
                <div>
                    <button className=' bg-sky-500 px-5 py-2 rounded-lg hover:bg-sky-400' type='submit'>SingIn</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
