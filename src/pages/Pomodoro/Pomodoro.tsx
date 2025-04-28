import { useEffect, useState } from 'react';
import Timer from '../../components/Timer/Timer';
import { localStorageGet } from '../../hooks/localStorage';

const Pomodoro = () => {
	//Обновление приходящих данных с localStorage
	const [time, setTime] = useState(() => localStorageGet('pomodor') ?? 1500);

	useEffect(() => {
		const interval = setInterval(() => {
			const newTime = localStorageGet('pomodor');
			setTime(prevTime => (newTime !== prevTime ? newTime ?? 1500 : prevTime));
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return <Timer initialSeconds={time} />;
};

export default Pomodoro;
