import React, {useState} from 'react'
import { useEffect, useMemo } from 'react';
import Counter from './counter'

const CountersList = () => {
    const data = [
        {id: 0, value: 0, price: 15.0, name: 'Четыре Сыра'},
        {id: 1, value: 0, price: 10.0, name: 'Даибло'},
        {id: 2, value: 0, price: 11.0, name: 'Песто'},
        {id: 3, value: 0, price: 13.0, name: 'Аррива'},
        {id: 4, value: 0, price: 10.0, name: 'Мясная'}];

    const [counters, setCounters] = useState(data)

    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id)
        setCounters(newCounters)
    }

    // const handleSum = (id) => {
    //     const sumPrice = counters.reduce(c => c.id === id )
    //     const newPrice = [...counters]
    //     newPrice[sumPrice].price++
    //     console.log('sum')
    // }


    const summary = () => {
        return counters.reduce((acc, id) => {
            return acc + id.price * id.value;
        }, 0)
    }

    const total = useMemo(summary, [counters])

    const handleReset = () => {
        setCounters(data)
    }

    const handleIncrement = (id) => {
        const index = counters.findIndex(c => c.id === id)
        const newValue = [...counters]
            newValue[index].value++

        setCounters(newValue)
        console.log('i')
        
    }

    const handleDecrement = (id) => {
            const index = counters.findIndex(c => c.id === id)
            const newValue = [...counters]
            newValue[index].value--
            setCounters(newValue)
            console.log('d')
    }

    // const handleUpdate = () => {
    //     const newData = [
    //         {id: 0, value: 1, name: 'Ненужная вещь'},
    //         {id: 1, value: 2, name: 'Ложка'},
    //         {id: 2, value: 3, name: 'Вилка'},
    //         {id: 3, value: 4, name: 'Тарелка'},
    //         {id: 4, value: 5, name: 'Набор'}];
    //     setCounters(newData)
    // }
    return (
        <div className=' container mx-auto'>
            {counters.map((count) => (
                <Counter 
                key={count.id} 
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                {...count}
                min={1}
                max={10}/>
            ))}
            <span>{total}</span>
            <button className='border-2 px-10 bg-red-300 hover:bg-slate-400 rounded-lg' onClick={handleReset}>Reset</button>
        </div>
  )
}

export default CountersList