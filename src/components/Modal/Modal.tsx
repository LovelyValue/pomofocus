import cn from 'classnames';
import { localStorageSet } from '../../hooks/localStorage';
import {
	ModalProps,
	ResetLocalStorageParams,
	SetLocalStorageParams,
} from './Modal.interface';
import styles from './Modal.module.css';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	//Получение input со страницы
	const pomodor = document.getElementById('1') as HTMLInputElement | null;
	const shortBreak = document.getElementById('2') as HTMLInputElement | null;
	const longBreak = document.getElementById('3') as HTMLInputElement | null;

	//Установка значение в localStorage из input
	const setLocalStorage = ({ e, inputName }: SetLocalStorageParams) => {
		e.preventDefault();
		if (inputName) {
			localStorageSet(inputName.name, Number(inputName.value) * 60);
		}
	};

	//Сброс до стандартного значения в localStorage
	const resetLocalStorage = ({
		e,
		inputName,
		value,
	}: ResetLocalStorageParams) => {
		e.preventDefault();
		if (inputName) {
			localStorageSet(inputName.name, value);
			inputName.value = '';
		}
	};

	// Полный сброс localStorage
	const fullResetLocalStorage = () => {
		localStorage.clear();
		if (pomodor) pomodor.value = '';
		if (shortBreak) shortBreak.value = '';
		if (longBreak) longBreak.value = '';
	};

	return (
		<div
			className={cn(styles['modal--hidden'], {
				[styles['modal--show']]: isOpen,
			})}
		>
			<button
				type='button'
				className={styles['modal__button-close']}
				onClick={onClose}
			>
				<img src='public/icons/close-button.svg' alt='close' />
			</button>
			<p className={styles['modal__title']}>Set Time</p>
			<ul className={styles['modal__list']}>
				{/* Pomodoro */}
				<li>
					<label htmlFor='1' className={styles['modal__list-label']}>
						Pomodor
					</label>
					<form className={styles['modal__list-form']}>
						<input
							className={styles['modal__list-input']}
							name='pomodor'
							id='1'
							type='number'
						></input>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e => setLocalStorage({ e, inputName: pomodor })}
						>
							<img src='public/icons/check-button.svg' alt='check' />
						</button>

						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e =>
								resetLocalStorage({ e, inputName: pomodor, value: 1500 })
							}
						>
							<img src='public/icons/reset-button.svg' alt='reset' />
						</button>
					</form>
				</li>
				{/* Short Break */}
				<li>
					<label htmlFor='2' className={styles['modal__list-label']}>
						Short Break
					</label>
					<form className={styles['modal__list-form']}>
						<input
							className={styles['modal__list-input']}
							name='short-break'
							id='2'
							type='number'
						/>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e => setLocalStorage({ e, inputName: shortBreak })}
						>
							<img src='public/icons/check-button.svg' alt='check' />
						</button>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e =>
								resetLocalStorage({ e, inputName: shortBreak, value: 300 })
							}
						>
							<img src='public/icons/reset-button.svg' alt='reset' />
						</button>
					</form>
				</li>
				{/* long Break */}
				<li>
					<label htmlFor='3' className={styles['modal__list-label']}>
						Long Break
					</label>
					<form className={styles['modal__list-form']}>
						<input
							className={styles['modal__list-input']}
							name='long-break'
							id='3'
							type='number'
						/>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e => setLocalStorage({ e, inputName: longBreak })}
						>
							<img src='public/icons/check-button.svg' alt='check' />
						</button>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e =>
								resetLocalStorage({ e, inputName: longBreak, value: 900 })
							}
						>
							<img src='public/icons/reset-button.svg' alt='reset' />
						</button>
					</form>
				</li>
			</ul>
			{/* Reset */}
			<button
				className={styles['modal__button-reset']}
				type='button'
				onClick={fullResetLocalStorage}
			>
				Reset
			</button>
		</div>
	);
};

export default Modal;
