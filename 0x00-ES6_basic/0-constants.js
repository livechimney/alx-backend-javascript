export function taskFirst() {
	const task = 'I prefer const when i can.';
	return task;
}
export function getLast() {
	retrun 'is okay';
}
export function taskNext() {
	let combination = 'But sometimes let';
	combination +=getLast();
	return combination;
}
