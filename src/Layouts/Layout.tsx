import { NavLink } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
	return (
		<div className={styles['layout']}>
			<div className={styles['inner__link']}>
				<NavLink to='/'>Pomodoro</NavLink>
				<NavLink to='/short-break'>Short Break</NavLink>
				<NavLink to='/long-break'>Long Break</NavLink>
			</div>
		</div>
	);
};

export default Layout;
