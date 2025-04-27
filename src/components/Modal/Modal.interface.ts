export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export interface SetLocalStorageParams {
	e: React.MouseEvent<HTMLButtonElement>;
	inputName: HTMLInputElement | null;
}

export interface ResetLocalStorageParams {
	e: React.MouseEvent<HTMLButtonElement>;
	inputName: HTMLInputElement | null;
	value: number;
}
