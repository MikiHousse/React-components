import { func } from 'prop-types'
import React from 'react'
import { useState } from 'react'
// import { useState } from 'react';
import PropTypes from 'prop-types'

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

const List = ({max = 1, min}) => {
	const [counter, setCounter] = useState(min)

	function applyCounter(num) {
		let validNum = Math.max(min, Math.min(max, num))
		setCounter(validNum)
	}

	// function handleIncrement() {
	// 	if (counter < max) {
	// 		setCounter(counter + 1)
	// 	}

	// }

	// const handleDecrement = () => {
	// 	if (counter > min) {
	// 		setCounter(counter - 1)
	// 	}
	// }

	function parseCountertStr(e) {
		let num = parseInt(e.target.value)
		applyCounter(isNaN(num) ? min : num)
	}

	let handleIncrement = () => applyCounter(counter + 1);
	let handleDecrement = () => applyCounter(counter - 1);
  

  	return (
		<div className=' container mx-auto '>
			<div className='flex gap-10'>
				<input className='border-red-500 border-2' type='text' value={ counter } onChange={parseCountertStr}/>
				<div>
					<button onClick={handleIncrement}>+</button>
				</div>
				<div>
					<button onClick={handleDecrement}>-</button>
				</div>
			</div>
		</div>
  	)
}

List.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number
}

export default List