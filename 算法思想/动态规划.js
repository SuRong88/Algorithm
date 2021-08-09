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

// 动态规划的思想求解斐波那契数列第几项的值
// 时间复杂度O(n) 空间复杂度O(1)
function feibo(num) {
	let dp1 = 0;
	let dp2 = 1;

	for (let i = 2; i <= num; i++) {
		const temp = dp1;
		dp1 = dp2;
		dp2 = temp + dp2;
	}
	return dp2;
}

console.log("feibo:" + feibo(3));

// 最长连续递增序列的和 a[i] < a[i+1]
function findSumOfLCIS(nums) {
	if (nums.length === 0) return 0;

	let max = nums[0];
	let dp = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			dp[i] = nums[i] + dp[i - 1];
			max = Math.max(max, dp[i]);
		} else {
			dp[i] = nums[i];
		}
	}
	return max;
}
// 最长连续递增序列长度 a[i] < a[i+1]
function findLengthOfLCIS(nums) {
	// if (nums.length === 0) return 0;
	// let max = 1;
	// let dp = [1];
	// for (let i = 1; i < nums.length; i++) {
	// 	if (nums[i] > nums[i - 1]) {
	// 		dp[i] = dp[i - 1] + 1;
	// 		max = Math.max(max, dp[i]);
	// 	} else {
	// 		dp[i] = 1;
	// 	}
	// }
	// return max;
	if (nums.length === 0) return 0;
	let max = 1;
	let dp = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			dp += 1;
			max = Math.max(max, dp);
		} else {
			dp = 1;
		}
	}
	return max;
}
console.log(findSumOfLCIS([1, 3, 1, 7, 8, 9, 3, 2]), findLengthOfLCIS([1, 3, 1, 7, 8, 9, 3, 2]));
