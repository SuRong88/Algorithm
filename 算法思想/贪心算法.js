// 贪心算法的思想
// 逐步求出局部最优解 最终得出最终最优解
// 但是得到的结果不一定是最终最优解(不得其解)
// 1.分饼干
// arr1为小朋友的食量 arr2为饼干的分量
function divide(arr1, arr2) {
	let num = 0;
	const sort1 = arr1.sort((a, b) => a - b);
	const sort2 = arr2.sort((a, b) => a - b);
	for (let i = 0; i < sort2.length; i++) {
		// num的值最多等于arr1的长度，也就是孩子的人数
		if (num > sort1.length) {
			break;
		}
		if (sort2[i] >= sort1[num]) {
			num++;
		}
	}
	return num; //最多满足孩子食量的数目
}
// 2.股票买卖时机(多次买卖)
function maxProfit1(prices) {
	if (prices.length < 2) {
		return 0;
	}
	let sum = 0;
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
			sum += prices[i] - prices[i - 1];
		}
	}
	return sum;
}

// console.log(divide([1, 2, 3], [4, 5]), divide([1, 2, 6, 3], [4, 5, 7, 1, 9, 8])); // 2 3

// console.log(maxProfit1([7, 1, 5, 3, 6, 4]), maxProfit1([[7, 6, 4, 3, 1]]));

// 股票买卖时机(只执行一次买卖)
function maxProfit2(prices) {
	if (prices.length < 2) {
		return 0;
	}
	let max = 0;
	let min = prices[0];
	for (let i = 1; i < prices.length; i++) {
		max = Math.max(max, prices[i] - min);
		min = Math.min(min, prices[i]);
	}
	return max;
}

console.log(maxProfit2([0]), maxProfit2([0, 1, 3]), maxProfit2([7, 6, 9]));
