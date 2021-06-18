/*
 * @Author: your name
 * @Date: 2021-06-11 09:48:58
 * @LastEditTime: 2021-06-18 18:32:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\leetcode题目\test.js
 */
function sleep(time) {
	var start = Date.now();
	var sum = 0;
	while (Date.now() - start <= time) {
		sum += 1;
		// if (Date.now() - start >= time) {
		// 	break;
		// }
	}
	console.log(sum);
}

// sleep(2000);
// console.log("finish");

function sleep2(delay, callback) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(callback());
		}, delay);
	});
}

async function test() {
	await sleep2(2000, () => "jr");
	console.log("finish");
}
// test();

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
