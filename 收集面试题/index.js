// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。
function MinStack() {
	this.numStack = [];
	this.minStack = [];
}
MinStack.prototype.push = function (num) {
	this.numStack.push(num);
	if (this.minStack.length > 0) {
		const min = this.minStack[this.minStack.length - 1];
		this.minStack.push(Math.min(num, min));
	} else {
		this.minStack.push(num);
	}
};
MinStack.prototype.pop = function () {
	this.numStack.pop();
	this.minStack.pop();
};
MinStack.prototype.top = function (num) {
	return this.numStack[this.numStack.length - 1];
};
MinStack.prototype.getMin = function (num) {
	return this.minStack[this.minStack.length - 1];
};
const minStack = new MinStack();

minStack.push(1);
console.log(minStack, minStack.getMin());
minStack.push(3);
console.log(minStack, minStack.getMin());
minStack.push(0);
console.log(minStack, minStack.getMin());

const arr = [0, 1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
	const ele = arr[i];
}

// 查找数组中第k个最小元素

// 题目如下：

// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
function plusOne(arr) {
	let carry = 1;
	const result = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		const sum = arr[i] + carry;
		const num = sum % 10;
		carry = parseInt(sum / 10);
		result.unshift(num);
	}
	carry && result.unshift(carry);
	return result;
}

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([4, 3, 2, 1]), plusOne([0]));

// 题目如下：

// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
// 进阶：
// 你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?
// 使用总值 - 数组总值即可
function getTheLostNum(n, arr) {
	const allSum = ((0 + n) * (n + 1)) >> 1;
	let arrSum = 0;
	arr.forEach(num => {
		arrSum += num;
	});
	return allSum - arrSum;
}
console.log(getTheLostNum(3, [1, 3]));
console.log(getTheLostNum(7, [1, 2, 3, 5, 6, 7]));
