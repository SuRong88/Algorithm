function isValid(str) {
	if (str.length % 2 === 1) return false;
	const map = new Map();
	map.set("}", "{");
	map.set("]", "[");
	map.set(")", "(");
	const stack = [];
	for (let i = 0; i < str.length; i++) {
		const c = str.charAt(i);
		if (!map.has(c)) {
			stack.unshift(c);
		} else {
			// if (i < str.length >> 1) return false; 严格闭合
			if (stack[0] === map.get(c)) {
				stack.shift();
			} else {
				return false;
			}
		}
	}
	// for (const c of str) {
	// 	if (map.has(c)) {
	// 		if (stack[stack.length - 1] === map.get(c)) {
	// 			stack.pop();
	// 		} else {
	// 			return false;
	// 		}
	// 	} else {
	// 		stack.push(c);
	// 	}
	// }
	return stack.length === 0;
}
// console.log("[]{) ---", isValid("[]{)"));
// console.log("[](){} ---", isValid("[](){}"));
// console.log("[()] ---", isValid("[()]"));

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

// minStack.push(1);
// console.log(minStack, minStack.getMin());
// minStack.push(3);
// console.log(minStack, minStack.getMin());
// minStack.push(0);
// console.log(minStack, minStack.getMin());

const arr = [0, 1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
	const ele = arr[i];
}

class MinHeap {
	constructor() {
		this.heap = [];
	}
	swap(index1, index2) {
		const temp = this.heap[index1];
		this.heap[index1] = this.heap[index2];
		this.heap[index2] = temp;
	}
	getParentIndex(index) {
		return (index - 1) >> 1;
	}
	getLeftChildIndex(index) {
		return index * 2 + 1;
	}
	getRightChildIndex(index) {
		return index * 2 + 2;
	}
	shiftUp(index) {
		if (index === 0) return;
		const parentIndex = this.getParentIndex(index);
		if (this.heap[parentIndex][1] > this.heap[index][1]) {
			this.swap(parentIndex, index);
			this.shiftUp(parentIndex);
		}
	}
	shiftDown(index) {
		const leftIndex = this.getLeftChildIndex(index);
		const rightIndex = this.getRightChildIndex(index);

		if (this.heap[leftIndex] && this.heap[index][1] > this.heap[leftIndex][1]) {
			this.swap(index, leftIndex);
			this.shiftDown(leftIndex);
		}
		if (this.heap[rightIndex] && this.heap[index][1] > this.heap[rightIndex][1]) {
			this.swap(index, rightIndex);
			this.shiftDown(rightIndex);
		}
	}
	insert(value) {
		this.heap.push(value);
		this.shiftUp(this.heap.length - 1);
	}
	pop() {
		if (this.heap.length === 0) return;
		if (this.heap.length === 1) return this.heap.pop();

		this.heap[0] = this.heap.pop();
		this.shiftDown(0);
	}
	peek() {
		return this.heap[0];
	}
	size() {
		return this.heap.length;
	}
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const map = new Map();
	nums.forEach(num => {
		map.set(num, map.has(num) ? map.get(num) + 1 : 1);
	});
	const mapArr = Array.from(map);
	const h = new MinHeap();
	mapArr.forEach(el => {
		h.insert(el);
		if (h.size() > k) {
			h.pop();
		}
	});
	return h.peek()[0];
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
