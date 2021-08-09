// 堆是一种特殊的“完全二叉树”
// 所有节点满足value小于(等于)其左右子节点value，称之为最小堆
// 所有节点满足value大于(等于)其左右子节点value，称之为最大堆
// 此时堆顶的元素就是最小(大)元素

// 父节点下标计算公式：parentIndex = (index - 1) >> 1
// 左子节点下标计算公式：leftChildIndex = index * 2 + 1
// 右子节点下标计算公式：rightChildIndex = index * 2 + 2

// class MinHeap {
// 	constructor() {
// 		this.heap = [];
// 	}
// 	swap(index1, index2) {
// 		const temp = this.heap[index1];
// 		this.heap[index1] = this.heap[index2];
// 		this.heap[index2] = temp;
// 	}
// 	getParentIndex(index) {
// 		return (index - 1) >> 1;
// 	}
// 	getLeftChildIndex(index) {
// 		return index * 2 + 1;
// 	}
// 	getRightChildIndex(index) {
// 		return index * 2 + 2;
// 	}
// 	shiftUp(index) {
// 		if (index === 0) return;
// 		const parentIndex = this.getParentIndex(index);
// 		if (this.heap[parentIndex] > this.heap[index]) {
// 			this.swap(parentIndex, index);
// 			this.shiftUp(parentIndex);
// 		}
// 	}
// 	shiftDown(index) {
// 		const leftIndex = this.getLeftChildIndex(index);
// 		const rightIndex = this.getRightChildIndex(index);

// 		if (this.heap[index] > this.heap[leftIndex]) {
// 			this.swap(index, leftIndex);
// 			this.shiftDown(leftIndex);
// 		}
// 		if (this.heap[index] > this.heap[rightIndex]) {
// 			this.swap(index, rightIndex);
// 			this.shiftDown(rightIndex);
// 		}
// 	}
// 	insert(value) {
// 		this.heap.push(value);
// 		this.shiftUp(this.heap.length - 1);
// 	}
// 	pop() {
// 		if (this.heap.length === 0) return;
// 		if (this.heap.length === 1) return this.heap.pop();

// 		this.heap[0] = this.heap.pop();
// 		this.shiftDown(0);
// 	}
// 	peek() {
// 		return this.heap[0];
// 	}
// 	size() {
// 		return this.heap.length;
// 	}
// }

// 求数组中第K个最大元素
// function getMinKNum(nums, k) {
// 	const h = new MinHeap();
// 	nums.forEach(num => {
// 		h.insert(num);
// 		if (h.size() > k) h.pop();
// 	});
// 	console.log(h.heap);
// 	return h.peek();
// }

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
		if (this.heap[parentIndex].value > this.heap[index].value) {
			this.swap(parentIndex, index);
			this.shiftUp(parentIndex);
		}
	}
	shiftDown(index) {
		const leftIndex = this.getLeftChildIndex(index);
		const rightIndex = this.getRightChildIndex(index);

		if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
			this.swap(index, leftIndex);
			this.shiftDown(leftIndex);
		}
		if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
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

// 求数组中出现频率最高的前k个元素 返回顺序可以任意
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	// 一般解法
	// const map = new Map();
	// nums.forEach(num => {
	// 	map.set(num, map.has(num) ? map.get(num) + 1 : 1);
	// });
	// const mapArr = Array.from(map);
	// const arr = mapArr.sort((a, b) => b[1] - a[1]);
	// if (k > arr.length) {
	// 	return arr.slice(0, arr.length).map(el => el[0]);
	// }
	// return arr.slice(0, k).map(el => el[0]);

	// 使用最小堆解法
	const h = new MinHeap();
	const map = new Map();
	nums.forEach(num => {
		map.set(num, map.has(num) ? map.get(num) + 1 : 1);
	});
	// for(let [key, value] of map) {} //for of来遍历map可能更好理解
	map.forEach((value, key) => {
		h.insert({ value, key });
		if (h.size() > k) {
			h.pop();
		}
	});
	return h.heap.map(el => el.key);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

const arr = [
	[1, "a"],
	[2, "b"]
];

arr.forEach(([num, letter]) => {
	console.log(num, letter);
});

const map = new Map();
map.set(1, "a");
map.set(2, "b");
console.log(map);

map.forEach(ele => {
	console.log(ele);
});

for (let [num, letter] of map) {
	console.log(num, letter);
}

map.forEach((value, key) => {
	console.log(value, key);
});
