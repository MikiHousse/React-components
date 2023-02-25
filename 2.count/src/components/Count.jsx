import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
// TODO: сделать импут изменяемым, оформить в красивую обложкуч
const List = ({max, min}) => {
	const [counter, setCounter] = useState(min)

	function applyCounter(num) {
		let validCounter = Math.max(min, Math.min(max, num))
		setCounter(validCounter)
	}

	function parseCountertStr(e) {
		let num = parseInt(e.target.value)
		applyCounter(isNaN(num) ? min : num)
	}

	let handleIncrement = () => applyCounter(counter + 1);
	let handleDecrement = () => applyCounter(counter - 1);

  	return (
		<div className=' container mx-auto '>
			<div className='flex gap-10'>
				<input 
				className='border-red-500 border-2' 
				type='text' 
				value={counter} 
				onChange={parseCountertStr}
				/>
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