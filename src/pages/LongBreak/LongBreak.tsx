import { useEffect, useState } from 'react';
import Timer from '../../components/Timer/Timer';
import { localStorageGet } from '../../hooks/localStorage';

const LongBreak = () => {
	//Обновление приходящих данных с localStorage
	const [time, setTime] = useState(() => localStorageGet('long-break') ?? 900);

	useEffect(() => {
		const interval = setInterval(() => {
			const newTime = localStorageGet('long-break');
			setTime(prevTime => (newTime !== prevTime ? newTime ?? 900 : prevTime));
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return <Timer initialSeconds={time} />;
};

export default LongBreak;
