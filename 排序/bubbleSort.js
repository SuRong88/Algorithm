/*
 * @Author: your name
 * @Date: 2021-06-16 09:29:12
 * @LastEditTime: 2021-06-17 15:11:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\排序\bubbleSort.js
 */
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		const temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		const temp = arr[i];
		let j = i;
		while (arr[j - 1] > temp && j > 0) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = temp;
	}
	return arr;
}

function quickSort(arr) {
	if (arr.length === 0) return []; //关键
	if (arr.length === 1) return arr;
	// if (arr.length <= 1) return arr;

	const leftArr = [];
	const rightArr = [];

	const mid = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < mid) {
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}

	// 二分法+递归
	// concat(0, [1,2,3]) concat([0],1,2,3) concat(0,1,2,3) concat([0,1,2,3]) 结果都一样
	return quickSort(leftArr).concat([mid], quickSort(rightArr));
}

let arr = [135, 48, 143543, 4, 111, 444, 1435410, 1211, 584, 544, 7487687867];
// console.log(bubbleSort(arr));

// arr = [135, 48, 143543, 4, 111, 444, 1435410, 1211, 584, 544, 7487687867];
// console.log(selectionSort(arr));

// arr = [135, 48, 143543, 4, 111, 444, 1435410, 1211, 584, 544, 7487687867];
// console.log(insertionSort(arr));

// arr = [1, 5, 0, 2, 4, 1];
// console.log(quickSort(arr));

function mergeSort(arr) {
	const rec = arr => {
		if (arr.length === 1) {
			return arr;
		}
		const mid = arr.length >> 1;
		const left = arr.slice(0, mid);
		const right = arr.slice(mid);
		const leftArr = rec(left);
		const rightArr = rec(right);
		const res = [];
		while (leftArr.length || rightArr.length) {
			if (leftArr.length && rightArr.length) {
				res.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift());
			} else if (leftArr.length) {
				res.push(leftArr.shift());
			} else if (rightArr.length) {
				res.push(rightArr.shift());
			}
		}
		console.log(res);
		return res;
	};
	return rec(arr);
}

function shellSort() {}

arr = [49, 48, 37, 36, 35, 26, 24, 17, 12, 8];
console.log(mergeSort(arr));

// 总结：
// 归并排序 和 快速排序 都是“分而治之”思想的体现
