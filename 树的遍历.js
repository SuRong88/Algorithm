/*
 * @Author: your name
 * @Date: 2021-06-15 12:04:49
 * @LastEditTime: 2021-06-16 16:09:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\树的遍历.js
 */
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
// 先序遍历  根 左 右
function preOrderTraversal(root) {
	const result = [];
	if (!root) return result;

	function dfs(node) {
		if (!node) return;
		result.push(node.val);
		node.left && dfs(node.left);
		node.right && dfs(node.right);
	}
	dfs(root);

	return result;
}
// 中序遍历  左 根 右
function midOrderTraversal(root) {
	const result = [];
	if (!root) return result;

	function dfs(node) {
		if (!node) return;
		node.left && dfs(node.left);
		result.push(node.val);
		node.right && dfs(node.right);
	}
	dfs(root);

	return result;
}
// 后序遍历  左 右 根
function postOrderTraversal(root) {
	const result = [];
	if (!root) return result;

	function dfs(node) {
		if (!node) return;
		node.left && dfs(node.left);
		node.right && dfs(node.right);
		result.push(node.val);
	}
	dfs(root);

	return result;
}
// 层序遍历
function levelOrderTraversal(root) {
	const result = [];
	if (!root) return result;

	const queue = [root];
	while (queue.length) {
		const node = queue.shift();
		result.push(node.val);
		node.left && queue.push(node.left);
		node.right && queue.push(node.right);
	}

	return result;
}
// console.log("先序遍历：", preOrderTraversal(tree));
// console.log("中序遍历：", midOrderTraversal(tree));
// console.log("后序遍历：", postOrderTraversal(tree));
// console.log("层序遍历：", levelOrderTraversal(tree));
