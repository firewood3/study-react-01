import React, { useState } from 'react';

const Say = () => {
	const [message, setMessage] = useState('');
	const onClickEnter = () => setMessage('안녕하세요!');
	const onClickLeave = () => setMessage('안녕히 가세요!');

	const [color, setColor] = useState('');

	const [object, setObject] = useState({ a: 0, b: 0, c: 0 });

	const [arr, setArr] = useState([0, 0, 0]);

	return (
		<div>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
			<h1 style={{ color }}>{message}</h1>
			<button style={{ color: 'red' }} onClick={() => setColor('red')}>
				빨간색
			</button>
			<button style={{ color: 'green' }} onClick={() => setColor('green')}>
				초록색
			</button>
			<button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
				파란색
			</button>

			<h1>
				A: {object.a} B: {object.b} C: {object.c}
			</h1>
			<button
				onClick={() => {
					setObject({ ...object, a: object.a + 1 });
				}}
			>
				a+1
			</button>
			<button
				onClick={() => {
					setObject({ ...object, b: object.b + 1 });
				}}
			>
				b+1
			</button>
			<button
				onClick={() => {
					setObject({ ...object, c: object.c + 1 });
				}}
			>
				c+1
			</button>

			<h1>
				A: {arr[0]} B: {arr[1]} C: {arr[2]}
			</h1>
			<button
				onClick={() => {
					let nextArr = arr.concat();
					nextArr[0] = nextArr[0] + 1;
					setArr(nextArr);
				}}
			>
				A+1
			</button>
			<button
				onClick={() => {
					let nextArr = arr.concat();
					nextArr[1] = nextArr[1] + 1;
					setArr(nextArr);
				}}
			>
				B+1
			</button>
			<button
				onClick={() => {
					let nextArr = arr.concat();
					nextArr[2] = nextArr[2] + 1;
					setArr(nextArr);
				}}
			>
				C+1
			</button>
		</div>
	);
};

export default Say;
