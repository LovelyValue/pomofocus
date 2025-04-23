import cn from 'classnames';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.props';

const Modal: React.FC<ModalProps> = ({ open }) => {
	return (
		<div
			className={cn(styles['hidden__div'], {
				[styles['show__div']]: open,
			})}
		></div>
	);
};

export default Modal;
