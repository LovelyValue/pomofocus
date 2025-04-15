import cn from 'classnames';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
	//Управление изменением текста кнопки
	const [buttonText, setButtonText] = useState('Start');
	const changeText = (text: string) => {
		if (text !== 'Start') {
			setButtonText('Start');
		} else {
			setButtonText('Pause');
		}
	};

	return (
		<div className={styles['layout']}>
			<div className={styles['layout__inner-link']}>
				<NavLink
					to='/'
					className={({ isActive }) =>
						cn(styles['layout__link'], {
							[styles['active']]: isActive,
						})
					}
				>
					Pomodoro
				</NavLink>
				<NavLink
					to='/short-break'
					className={({ isActive }) =>
						cn(styles['layout__link'], {
							[styles['active']]: isActive,
						})
					}
				>
					Short Break
				</NavLink>
				<NavLink
					to='/long-break'
					className={({ isActive }) =>
						cn(styles['layout__link'], {
							[styles['active']]: isActive,
						})
					}
				>
					Long Break
				</NavLink>
			</div>
			<Outlet />
			<div className={styles['layout__inner-button']}>
				<button
					type='button'
					className={styles['layout__button']}
					onClick={() => changeText(buttonText)}
				>
					{buttonText}
				</button>
				<button
					type='button'
					className={cn(styles['hidden__button'], {
						[styles['show_button']]: buttonText === 'Pause',
					})}
				>
					<img src='public\next-button.svg' alt='next' />
				</button>
			</div>
		</div>
	);
};

export default Layout;
