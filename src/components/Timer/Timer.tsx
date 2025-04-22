import { useEffect, useState } from 'react';
import styles from './Timer.module.css';

const Timer = ({ initialSeconds }) => {
	const [time, setTime] = useState(initialSeconds);
	const [state, setState] = useState(false);

	useEffect(() => {
		if (time > 0 && state) {
			const timerId = setInterval(() => {
				setTime(prev => prev - 1);
			}, 100);

			return () => clearInterval(timerId);
		} else if (time == 0 && state) {
			setTime(60);
			setState(false);
		}
	}, [time, state]);

	//Перевод времени в минуты и секунды
	const minutes = Math.floor(time / 60)
		.toString()
		.padStart(2, '0');
	const seconds = Math.floor(time % 60)
		.toString()
		.padStart(2, '0');

	// const changeState = () => {
	// 	return state ? setState(false) : setState(true);
	// };

	return <div className={styles['timer']}>{`${minutes}:${seconds}`}</div>;
};

export default Timer;
