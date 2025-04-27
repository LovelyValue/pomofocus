import { useEffect, useState } from 'react';
import Timer from '../../components/Timer/Timer';
import { localStorageGet } from '../../hooks/localStorage';

const LongBreak = () => {
	//Обновление приходящих данных с localStorage
	const [time, setTime] = useState(() => localStorageGet('long-break') ?? 900);

	useEffect(() => {
		const interval = setInterval(() => {
			const newTime = localStorageGet('long-break');
			if (newTime !== time) {
				setTime(newTime ?? 900);
			}
		}, 500);

		return () => clearInterval(interval);
	}, [time]);
	return <Timer initialSeconds={time} />;
};

export default LongBreak;
