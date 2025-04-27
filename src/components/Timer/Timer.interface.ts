export interface TimerProps {
	initialSeconds: number;
}

export interface TimerContextType {
	buttonText: string;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
}
