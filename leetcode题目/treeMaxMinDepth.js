const tree = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 3,
			left: {
				val: 5,
				left: null,
				right: null
			},
			right: null
		},
		right: {
			val: 4,
			left: null,
			right: null
		}
	},
	right: {
		val: 6,
		left: null,
		right: {
			val: 7,
			left: null,
			right: {
				val: 8,
				left: null,
				right: {
					val: 9,
					left: null,
					right: {
						val: 10,
						left: null,
						right: null
					}
				}
			}
		}
	}
};

// 深度优先
function DFS(root) {
	const result = [];
	// if (!root) return result;

	// function dfs(node) {
	// 	if (!node) return;
	// 	result.push(node.val);
	// 	dfs(node.left);
	// 	dfs(node.right);
	// }

	// dfs(root);

	const stack = [];
	stack.unshift(root);
	while (stack.length) {
		const node = stack.shift();
		result.push(node.val);
		node.right && stack.unshift(node.right);
		node.left && stack.unshift(node.left);
	}

	return result;
}
// 广度优先
function BFS(root) {
	const result = [];
	const queue = [];
	queue.push(root);
	while (queue.length) {
		const node = queue.shift();
		result.push(node.val);
		node.left && queue.push(node.left);
		node.right && queue.push(node.right);
	}
	return result;
}

// 最大深度
function maxDepthOfTree(root) {
	let max = 0;
	if (!root) return max;
	const stack = [];
	stack.unshift({
		node: root,
		depth: 1
	});
	while (stack.length) {
		const { node, depth } = stack.shift();
		max = Math.max(max, depth);
		node.right &&
			stack.unshift({
				node: node.right,
				depth: depth + 1
			});
		node.left &&
			stack.unshift({
				node: node.left,
				depth: depth + 1
			});
	}
	return max;
}
// 最小深度
function minDepthOfTree(root) {
	let min = 0;
	if (!root) return min;
	const queue = [];
	queue.push({
		node: root,
		depth: 1
	});
	while (queue.length) {
		const { node, depth } = stack.shift();
		if (!node.left && !node.right) {
			min = depth;
			break;
		}
		node.left &&
			queue.push({
				node: node.left,
				depth: depth + 1
			});
		node.right &&
			queue.push({
				node: node.right,
				depth: depth + 1
			});
	}
	return min;
}
// 函数式编程
var ops = {
	plus: (x, y) => x + y,
	mul: (x, y) => x * y,
	and: (x, y) => x & y
};

function operation(op, array) {
	// slice(1) array[0]是为了解决除了加减以外的运算
	return array.slice(1).reduce(ops[op], array[0]);
}

const array = [2, 3, 4];
const plus = operation("plus", array);
const mul = operation("mul", array);
const and = operation("and", array);
// console.log(plus, mul, and);

// 层序遍历 二维数组
function levelOrder(root) {
	const result = [];
	const queue = [];
	queue.push(root);
	while (queue.length) {
		const newQueue = [];
		let len = queue.length;
		result.push([]);
		while (len--) {
			const node = queue.shift();
			result[result.length - 1].push(node.val);
			node.left && newQueue.push(node.left);
			node.right && newQueue.push(node.right);
		}
		queue.push(...newQueue);
	}
	return result;
}

// console.log(DFS(tree));
// console.log(BFS(tree));
console.log(levelOrder(tree)); //queue中只保留同级的所有节点
// console.log("最大深度：" + maxDepthOfTree(tree), "最小深度：" + minDepthOfTree(tree));
