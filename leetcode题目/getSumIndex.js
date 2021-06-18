/*
 * @Author: your name
 * @Date: 2021-06-11 16:04:32
 * @LastEditTime: 2021-06-11 16:04:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\leetcode题目\getSumIndex.js
 */
function getIndexs(array, n) {
	const res = [];
	const len = array.length;
	if (len <= 1) return res;

	// for (let i = 0; i < len; i++) {
	// 	if (i === len - 1) break;
	// 	for (let j = i + 1; j < len; j++) {
	// 		const sum = array[i] + array[j];
	// 		if (sum === n) {
	// 			return [i, j];
	// 		}
	// 	}
	// }
	// return res;

	const map = new Map();
	for (let i = 0; i < len; i++) {
		let temp = n - array[i];
		if (map.has(temp)) {
			return [map.get(temp), i];
		} else {
			map.set(array[i], i);
		}
	}
	return res;
}
console.log(getIndexs([8, 7, 6, 1, 1, 2, 3, 4], 6));
