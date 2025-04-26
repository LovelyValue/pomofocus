import { useEffect, useState } from 'react';
import Timer from '../../components/Timer/Timer';
import { localStorageGet } from '../../hooks/localStorage';

const Pomodoro = () => {
	//Обновление приходящих данных с localStorage
	const [time, setTime] = useState(() => localStorageGet('pomodor') ?? 1500);

	useEffect(() => {
		const interval = setInterval(() => {
			const newTime = localStorageGet('pomodor');
			if (newTime !== time) {
				setTime(newTime ?? 1500);
			}
		}, 500);

		return () => clearInterval(interval);
	}, [time]);

	return <Timer initialSeconds={time} />;
};

export default Pomodoro;
