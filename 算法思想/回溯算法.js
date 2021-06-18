/*
 * @Author: your name
 * @Date: 2021-05-11 11:35:42
 * @LastEditTime: 2021-06-18 18:43:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\回溯算法.js
 */
// 回溯算法获取sku组合
// 简易
// 时间复杂度为O(n!) 空间复杂度O(n)也就是递归的深度
function getAll(nums) {
	const res = [];

	function backtrack(paths) {
		if (nums.length === paths.length) {
			res.push(paths);
			return;
		}
		nums.forEach(val => {
			if (!paths.includes(val)) {
				backtrack(paths.concat(val));
			}
		});
	}
	backtrack([]);
	return res;
}
console.log(getAll([1, 2, 3]));

return;

// 变化
function getAllAttr(...attrs) {
	const res = [];

	function backtrack(chunkIndex, paths) {
		const attr = attrs[chunkIndex];
		const isLast = chunkIndex === attrs.length - 1;
		attr.forEach(ele => {
			const current = paths.concat(ele);
			if (isLast) {
				res.push(current);
			} else {
				backtrace(chunkIndex + 1, current);
			}
		});
	}
	backtrack(0, []);
	return res;
}
const allAttr = getAllAttr(["黄色", "红色"], ["大", "中", "小"], ["64g", "32g"]);
console.log(allAttr);

// 进阶
// 所有不重复子集
//nums为不重复的正整数
function fn(nums) {
	const result = [];
	// function backtrack(paths, n) {
	// 	if (paths.length === n) {
	// 		result.push(paths);
	// 	} else {
	// 		nums.forEach((num, numIndex) => {
	// 			const last = paths[paths.length - 1];
	// 			if (numIndex < nums.indexOf(last)) return;
	// 			!paths.includes(num) && backtrack(paths.concat(num), n);
	// 		});
	// 	}
	// }
	// for (let n = 0; n <= nums.length; n++) {
	// 	backtrack([], n);
	// }
	function backtrack(paths, n, start) {
		if (paths.length === n) {
			result.push(paths);
		} else {
			for (let i = start; i < nums.length; i++) {
				backtrack(paths.concat(nums[i]), n, i + 1);
			}
		}
	}
	for (let n = 0; n <= nums.length; n++) {
		backtrack([], n, 0);
	}
	return result;
}
console.log(fn([1, 2, 3]));

// 尾递归调用
function feibo(index, sum1 = 1, sum2 = 1) {
	if (index < 2) {
		return sum2;
	}
	return feibo(index - 1, sum1, sum1 + sum2);
}
console.log(feibo(0), feibo(1), feibo(2), feibo(3));
