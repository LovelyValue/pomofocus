import cn from 'classnames';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal/Modal';
import { useModalState } from '../hooks/useModalState';
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

	//Изменение текста кнопки при переключение страницы
	const location = useLocation();
	useEffect(() => {
		setButtonText('Start');
	}, [location]);

	//Переключение страниц с помощью кнопки
	const navigate = useNavigate();
	const links = ['/', '/short-break', 'long-break'];
	const changeLink = (link: string[]) => {
		if (link[0] === location.pathname) {
			return link[1];
		} else if (link[1] === location.pathname) {
			return link[2];
		} else if (link[2] === location.pathname) {
			return link[0];
		}
	};

	//Управление модальным окном
	const { isOpen, onToggle } = useModalState();
	const handleClick = () => {
		onToggle();
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

			<Outlet context={{ buttonText, setButtonText }} />

			<div className={styles['layout__inner-button']}>
				<button
					type='button'
					className={styles['layout__button']}
					onClick={() => changeText(buttonText)}
				>
					{buttonText}
				</button>
				<button
					onClick={() => navigate(changeLink(links) ?? '/', { replace: false })}
					type='button'
					className={cn(styles['hidden__button'], {
						[styles['show__button']]: buttonText === 'Pause',
					})}
				>
					<img src='public\next-button.svg' alt='next' />
				</button>
			</div>
			<Modal open={isOpen} />
			<button
				type='button'
				className={styles['settings-button']}
				onClick={handleClick}
			>
				<img src='public\settings-button.svg' alt='settings' />
			</button>
		</div>
	);
};

export default Layout;
