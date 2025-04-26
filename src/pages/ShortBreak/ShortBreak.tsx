import { useEffect, useState } from 'react';
import Timer from '../../components/Timer/Timer';
import { localStorageGet } from '../../hooks/localStorage';

const ShortBreak = () => {
	//Обновление приходящих данных с localStorage
	const [time, setTime] = useState(() => localStorageGet('short-break') ?? 300);

	useEffect(() => {
		const interval = setInterval(() => {
			const newTime = localStorageGet('short-break');
			if (newTime !== time) {
				setTime(newTime ?? 300);
			}
		}, 500);

		return () => clearInterval(interval);
	}, [time]);
	return <Timer initialSeconds={time} />;
};

export default ShortBreak;
