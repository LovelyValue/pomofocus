import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './Timer.module.css';

const Timer = ({ initialSeconds }) => {
	const [setButtonText, buttonText] = useOutletContext();
	const [time, setTime] = useState(initialSeconds);

	useEffect(() => {
		if (time > 0 && buttonText === 'Pause') {
			const timerId = setInterval(() => {
				setTime(prev => prev - 1);
			}, 1000);

			return () => {
				clearInterval(timerId);
			};
		} else if (time === 0 && buttonText !== 'Start') {
			setTime(30);
			setButtonText('Start');
		}
	}, [time, buttonText, setButtonText]);

	//Перевод времени в минуты и секунды
	const minutes = Math.floor(time / 60)
		.toString()
		.padStart(2, '0');
	const seconds = Math.floor(time % 60)
		.toString()
		.padStart(2, '0');

	return <div className={styles['timer']}>{`${minutes}:${seconds}`}</div>;
};

export default Timer;
