import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './Timer.module.css';
import { TimerContextType, TimerProps } from './Timer.props';

const Timer: React.FC<TimerProps> = ({ initialSeconds }) => {
	//Управление таймером
	const { setButtonText, buttonText } = useOutletContext<TimerContextType>();
	const [time, setTime] = useState(initialSeconds);

	//Обновление приходящего времени
	useEffect(() => {
		setTime(initialSeconds);
	}, [initialSeconds]);

	useEffect(() => {
		if (time > 0 && buttonText === 'Pause') {
			const timerId = setInterval(() => {
				setTime(prev => prev - 1);
			}, 1000);

			return () => {
				clearInterval(timerId);
			};
		} else if (time === 0 && buttonText !== 'Start') {
			setTime(initialSeconds);
			setButtonText('Start');
		}
	}, [time, buttonText, setButtonText, initialSeconds]);

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
