const number = 6;

function guess(num) {
	let res;
	if (num > number) {
		res = 1;
	} else if (num < number) {
		res = -1;
	} else {
		res = 0;
	}
	return res;
}

function guessNumber(arr) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = (low + high) >> 1;
		const compare = guess(arr[mid]);
		if (compare === 1) {
			high = mid - 1;
		} else if (compare === -1) {
			low = mid + 1;
		} else {
			return mid;
		}
	}
	return -1;
}

console.log(guessNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
