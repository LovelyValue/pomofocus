export const localStorageGet = (name: string): number | null => {
	const item = localStorage.getItem(name);
	return item ? (JSON.parse(item) as number) : null;
};

export const localStorageSet = (name: string, value: number): void => {
	localStorage.setItem(name, JSON.stringify(value));
};
