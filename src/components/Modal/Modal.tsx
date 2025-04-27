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
	const shortBrake = document.getElementById('2') as HTMLInputElement | null;
	const longBrake = document.getElementById('3') as HTMLInputElement | null;

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
				<img src='public\close-button.svg' alt='close' />
			</button>
			<p className={styles['modal__title']}>Set Time</p>
			<ul className={styles['modal__list']}>
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
							<img src='public/check-button.svg' alt='check' />
						</button>

						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e =>
								resetLocalStorage({ e, inputName: pomodor, value: 1500 })
							}
						>
							<img src='public\reset-button.svg' alt='reset' />
						</button>
					</form>
				</li>
				<li>
					<label htmlFor='2' className={styles['modal__list-label']}>
						Short Brake
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
							onClick={e => setLocalStorage({ e, inputName: shortBrake })}
						>
							<img src='public\check-button.svg' alt='check' />
						</button>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e =>
								resetLocalStorage({ e, inputName: shortBrake, value: 300 })
							}
						>
							<img src='public\reset-button.svg' alt='reset' />
						</button>
					</form>
				</li>
				<li>
					<label htmlFor='3' className={styles['modal__list-label']}>
						Long Break
					</label>
					<form className={styles['modal__list-form']}>
						<input
							className={styles['modal__input']}
							name='long-break'
							id='3'
							type='number'
						/>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e => setLocalStorage({ e, inputName: longBrake })}
						>
							<img src='public\check-button.svg' alt='check' />
						</button>
						<button
							className={styles['modal__list-button']}
							type='submit'
							onClick={e =>
								resetLocalStorage({ e, inputName: longBrake, value: 900 })
							}
						>
							<img src='public\reset-button.svg' alt='reset' />
						</button>
					</form>
				</li>
			</ul>
			<button
				className={styles['modal__button-reset']}
				type='button'
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
