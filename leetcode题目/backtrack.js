/*
 * @Author: your name
 * @Date: 2021-06-09 10:27:12
 * @LastEditTime: 2021-06-11 10:58:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \菜鸟学算法\leetcode题目\backtrack.js
 */
function getAll(source) {
	const result = [];

	function backtrack(paths, chunkIndex) {
		const chunk = source[chunkIndex];
		const isLast = chunkIndex === source.length - 1;
		chunk.forEach(el => {
			const current = paths.concat(el);
			if (isLast) {
				result.push(current);
			} else {
				backtrack(current, chunkIndex + 1);
			}
		});
	}
	backtrack([], 0);

	return result;
}
console.log(
	getAll([
		["a", "b"],
		["大", "中", "小"],
		["128g", "256g"]
	])
);

function getAllNum(nums) {
	const result = [];

	function backtrack(paths) {
		const isLast = paths.length === nums.length;
		if (isLast) {
			result.push(paths);
		} else {
			nums.forEach(el => {
				!paths.includes(el) && backtrack(paths.concat(el));
			});
		}
	}
	backtrack([]);

	return result;
}

console.log(getAllNum(["a", "b", "c"]));

// 应用
// 输入键盘数字（2 - 9）， 输出可能的字母组合
var letterCombinations = function (digits) {
	const map = new Map();
	map.set("2", "abc".split(""));
	map.set("3", "def".split(""));
	map.set("4", "ghi".split(""));
	map.set("5", "jkl".split(""));
	map.set("6", "mno".split(""));
	map.set("7", "pqrs".split(""));
	map.set("8", "tuv".split(""));
	map.set("9", "wxyz".split(""));

	if (digits.length === 0) return [];
	if (digits.length === 1) map.get(digits);

	const digitArr = digits.split("");
	const backtrackArr = [];
	digitArr.forEach((digit, index) => {
		backtrackArr.push(map.get(digit));
	});

	const result = [];

	function backtrack(nums, chunkIndex) {
		const chunk = backtrackArr[chunkIndex];
		const isLast = chunkIndex === backtrackArr.length - 1;

		chunk.forEach(el => {
			const current = nums.concat(el);
			if (isLast) {
				result.push(current.join(""));
			} else {
				backtrack(current, chunkIndex + 1);
			}
		});
	}
	backtrack([], 0);

	return result;
};

console.log(letterCombinations("2345"));
