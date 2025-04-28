import styles from './Error.module.css';

const Error = () => {
	return (
		<div className={styles['error']}>
			<img src='public/images/error.webp' alt='ERROR 404' />
		</div>
	);
};

export default Error;
