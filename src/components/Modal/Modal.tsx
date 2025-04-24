import cn from 'classnames';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.props';

const Modal: React.FC<ModalProps> = ({ open }) => {
	return (
		<div
			className={cn(styles['hidden__div'], {
				[styles['show__div']]: open,
			})}
		>
			<button type='button' className={styles['modal__button-close']}>
				<img src='public\close-button.svg' alt='close' />
			</button>
			<p className={styles['modal__title']}>Set Time</p>
			<ul className={styles['modal__list']}>
				<li>
					<p className={styles['modal__paragraph']}>Pomodor</p>
					<div className={styles['modal__input-inner']}>
						<input
							className={styles['modal__input']}
							name='pomodor'
							id='1'
							type='text'
						/>
						<button className={styles['modal__list-button']}>
							<img src='public\check-button.svg' alt='check' />
						</button>
						<button className={styles['modal__list-button']}>
							<img src='public\reset-button.svg' alt='reset' />
						</button>
					</div>
				</li>
				<li>
					<p className={styles['modal__paragraph']}>Short Brake</p>
					<div className={styles['modal__input-inner']}>
						<input
							className={styles['modal__input']}
							name='short-brake'
							id='2'
							type='text'
						/>
						<button className={styles['modal__list-button']}>
							<img src='public\check-button.svg' alt='check' />
						</button>
						<button className={styles['modal__list-button']}>
							<img src='public\reset-button.svg' alt='reset' />
						</button>
					</div>
				</li>
				<li>
					<p className={styles['modal__paragraph']}>Long Break</p>
					<div className={styles['modal__input-inner']}>
						<input
							className={styles['modal__input']}
							name='long-brake'
							id='3'
							type='text'
						/>
						<button className={styles['modal__list-button']}>
							<img src='public\check-button.svg' alt='check' />
						</button>
						<button className={styles['modal__list-button']}>
							<img src='public\reset-button.svg' alt='reset' />
						</button>
					</div>
				</li>
			</ul>
			<button className={styles['modal__button']}>Reset</button>
		</div>
	);
};

export default Modal;
