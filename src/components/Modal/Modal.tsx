import cn from 'classnames';
import { localStorageSet } from '../../hooks/localStorage';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.props';

const Modal: React.FC<ModalProps> = ({ open, close }) => {
	const pomodor = document.getElementById('1') as HTMLInputElement | null;
	const shortBrake = document.getElementById('2') as HTMLInputElement | null;
	const longBrake = document.getElementById('3') as HTMLInputElement | null;

	return (
		<div
			className={cn(styles['hidden__div'], {
				[styles['show__div']]: open,
			})}
		>
			<button
				type='button'
				className={styles['modal__button-close']}
				onClick={close}
			>
				<img src='public\close-button.svg' alt='close' />
			</button>
			<p className={styles['modal__title']}>Set Time</p>
			<ul className={styles['modal__list']}>
				<li>
					<p className={styles['modal__paragraph']}>Pomodor</p>
					<form className={styles['modal__form']}>
						<input
							className={styles['modal__input']}
							name='pomodor'
							id='1'
							type='number'
						></input>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e => {
								e.preventDefault();
								if (pomodor) {
									localStorageSet(pomodor.name, Number(pomodor.value) * 60);
								}
							}}
						>
							<img src='public/check-button.svg' alt='check' />
						</button>

						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e => {
								e.preventDefault();
								if (pomodor) {
									localStorageSet(pomodor.name, 1500);
									pomodor.value = '';
								}
							}}
						>
							<img src='public\reset-button.svg' alt='reset' />
						</button>
					</form>
				</li>
				<li>
					<p className={styles['modal__paragraph']}>Short Brake</p>
					<form className={styles['modal__form']}>
						<input
							className={styles['modal__input']}
							name='short-break'
							id='2'
							type='number'
						/>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e => {
								e.preventDefault();
								if (shortBrake) {
									localStorageSet(
										shortBrake.name,
										Number(shortBrake.value) * 60
									);
								}
							}}
						>
							<img src='public\check-button.svg' alt='check' />
						</button>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e => {
								e.preventDefault();
								if (shortBrake) {
									localStorageSet(shortBrake.name, 300);
									shortBrake.value = '';
								}
							}}
						>
							<img src='public\reset-button.svg' alt='reset' />
						</button>
					</form>
				</li>
				<li>
					<p className={styles['modal__paragraph']}>Long Break</p>
					<form className={styles['modal__form']}>
						<input
							className={styles['modal__input']}
							name='long-break'
							id='3'
							type='number'
						/>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e => {
								e.preventDefault();
								if (longBrake) {
									localStorageSet(longBrake.name, Number(longBrake.value) * 60);
								}
							}}
						>
							<img src='public\check-button.svg' alt='check' />
						</button>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e => {
								e.preventDefault();
								if (longBrake) {
									localStorageSet(longBrake.name, 900);
									longBrake.value = '';
								}
							}}
						>
							<img src='public\reset-button.svg' alt='reset' />
						</button>
					</form>
				</li>
			</ul>
			<button
				className={styles['modal__button']}
				type='submit'
				onClick={() => {
					localStorage.clear();
					if (pomodor) pomodor.value = '';
					if (shortBrake) shortBrake.value = '';
					if (longBrake) longBrake.value = '';
				}}
			>
				Reset
			</button>
		</div>
	);
};

export default Modal;
