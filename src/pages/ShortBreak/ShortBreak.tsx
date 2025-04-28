import { useEffect, useState } from 'react';
import Timer from '../../components/Timer/Timer';
import { localStorageGet } from '../../hooks/localStorage';

const ShortBreak = () => {
	//Обновление приходящих данных с localStorage
	const [time, setTime] = useState(() => localStorageGet('short-break') ?? 300);

	useEffect(() => {
		const interval = setInterval(() => {
			const newTime = localStorageGet('short-break');
			setTime(prevTime => (newTime !== prevTime ? newTime ?? 300 : prevTime));
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return <Timer initialSeconds={time} />;
};

export default ShortBreak;
