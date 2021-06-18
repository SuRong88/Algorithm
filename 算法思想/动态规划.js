/*
 * @Author: your name
 * @Date: 2021-06-17 17:35:48
 * @LastEditTime: 2021-06-17 18:00:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\动态规划.js
 */
// 1.爬楼梯 (num为正整数)
// 斐波那契数列的应用
function upStair(num) {
	if (num === 1) return 1;

	// method1 时间复杂度O(n) 空间复杂度O(n)
	// const dp = [1, 1];
	// for (let i = 2; i <= num; i++) {
	// 	dp[i] = dp[i - 2] + dp[i - 1];
	// }
	// return dp[num];

	// method2 时间复杂度O(n) 空间复杂度O(1)
	let dp1 = 1;
	let dp2 = 1;

	for (let i = 2; i <= num; i++) {
		const temp = dp1;
		dp1 = dp2;
		dp2 = temp + dp2;
	}
	return dp2;
}
console.log(upStair(3), upStair(4)); //3 5
// 2.打家劫舍

// 时间复杂度O(n) 空间复杂度O(n)
function rob(nums) {
	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];

	const dp = [0, nums[0]];
	// 注意此时的i与nums下标的区别
	for (let i = 2; i <= nums.length; i++) {
		dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
	}

	return dp[nums.length];
}
console.log(rob([3, 5, 8, 10, 2, 9, 20]));
