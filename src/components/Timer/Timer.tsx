import { useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { TimerContextType, TimerProps } from './Timer.interface';
import styles from './Timer.module.css';

const Timer: React.FC<TimerProps> = ({ initialSeconds }) => {
	//Обновление приходящего времени
	useEffect(() => {
		setTime(initialSeconds);
	}, [initialSeconds]);

	//Управление таймером
	const { setButtonText, buttonText } = useOutletContext<TimerContextType>();
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
			const audio = new Audio('public/audio/end-timer.mp3');
			audio.play();

			setTime(initialSeconds);
			setButtonText('Start');
		}
	}, [time, buttonText, setButtonText, initialSeconds]);

	//Перевод времени в минуты и секунды
	const { minutes, seconds } = useMemo(() => {
		const mins = Math.floor(time / 60)
			.toString()
			.padStart(2, '0');
		const secs = Math.floor(time % 60)
			.toString()
			.padStart(2, '0');
		return { minutes: mins, seconds: secs };
	}, [time]);

	return <div className={styles['timer']}>{`${minutes}:${seconds}`}</div>;
};

export default Timer;
