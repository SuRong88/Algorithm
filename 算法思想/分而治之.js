// 先“分”后“合”，基本就是二分法和递归的结合
// 快速排序
function quickSort(arr) {
	if (arr.length <= 1) return arr;
	const mid = arr[0];
	const left = [];
	const right = [];
	// 关键一步 必须从1开始 否则出现栈溢出
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < mid) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([mid], quickSort(right));
}
// 归并排序
function mergeSort(array) {
	function rec(arr) {
		if (arr.length <= 1) return arr;
		const mid = arr.length >> 1;
		const left = arr.slice(0, mid);
		const right = arr.slice(mid);
		const leftArr = rec(left);
		const rightArr = rec(right);
		const result = [];
		while (leftArr.length || rightArr.length) {
			if (leftArr.length && rightArr.length) {
				leftArr[0] < rightArr[0] ? result.push(leftArr.shift()) : result.push(rightArr.shift());
			} else if (leftArr.length) {
				result.push(leftArr.shift());
			} else {
				result.push(rightArr.shift());
			}
		}
		return result;
	}
	return rec(array);
}

let arr = [12, 458, 153, 4, 157, 74872, 4741, 777, 3, 10, 40, 1];
// console.log(quickSort(arr));
arr = [12, 458, 153, 4, 157, 74872, 4741, 777, 3, 10, 40, 1];
// console.log(mergeSort(arr));

const treeRevert = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 3,
			left: null,
			right: null
		},
		right: {
			val: 4,
			left: null,
			right: null
		}
	},
	right: {
		val: 5,
		left: {
			val: 6,
			left: null,
			right: null
		},
		right: {
			val: 7,
			left: null,
			right: null
		}
	}
};

const treeSame = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 4,
			left: null,
			right: null
		},
		right: {
			val: 5,
			left: null,
			right: null
		}
	},
	right: {
		val: 3,
		left: {
			val: 6,
			left: null,
			right: null
		},
		right: {
			val: 7,
			left: null,
			right: null
		}
	}
};

const treeSymmetric = {
	val: 1,
	left: {
		val: 3,
		left: {
			val: 7,
			left: null,
			right: null
		},
		right: {
			val: 6,
			left: null,
			right: null
		}
	},
	right: {
		val: 2,
		left: {
			val: 5,
			left: null,
			right: null
		},
		right: {
			val: 4,
			left: null,
			right: null
		}
	}
};

// 反转二叉树
function revertTree(root) {
	function rec(node) {
		if (!node.left && !node.right) return node;
		return {
			val: node.val,
			left: rec(node.right),
			right: rec(node.left)
		};
	}
	return rec(root);
}

// 是否相同树（两棵树）
function isSameTree(root1, root2) {
	if (root1 === null && root2 === null) return true;
	if (root1 === null || root2 === null) return false;
	if (root1.val !== root2.val) return false;
	return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
}

// 是否对称树（两棵树）
function isSymmetricTree(root1, root2) {
	if (root1 === null && root2 === null) return true;
	if (root1 === null || root2 === null) return false;
	if (root1.val !== root2.val) return false;
	return isSymmetricTree(root1.left, root2.right) && isSymmetricTree(root1.right, root2.left);
}

// console.log(revertTree(treeRevert));
console.log(isSameTree(treeSame, treeSame), isSameTree(treeSame, treeSymmetric));
console.log(isMirrorTree(treeSame, treeSame), isMirrorTree(treeSame, treeSymmetric));

// 是否镜像树
function isMirrorTree(root) {
	function rec(node) {
		if (node.left && node.right) return true;
		if (node.left || node.right) return false;
		if (node.left.val !== node.right.val) return false;
		return rec(node.left) && rec(node.right);
	}
	return rec(root);
}

// 是否对称树
function isDuiCTree(root) {
	function rec(node) {
		if (node.left && node.right) return true;
		if (node.left || node.right) return false;
		if (node.left.val !== node.right.val) return false;
		return rec(node.left) && rec(node.right);
	}
	return rec(root);
}

function getNum(nums) {
	const result = [];

	function backtrack(paths) {
		if (nums.length === paths.length) {
			result.push(paths);
		} else {
			for (let num of nums) {
				!paths.includes(num) && backtrack(paths.concat(num));
			}
		}
	}
	backtrack([]);

	return result;
}
getNum([1, 2, 3]);

const tree1 = {
	val: 1,
	left: {
		val: 3,
		left: {
			val: 7,
			left: null,
			right: null
		},
		right: {
			val: 6,
			left: null,
			right: null
		}
	},
	right: {
		val: 2,
		left: {
			val: 5,
			left: null,
			right: null
		},
		right: {
			val: 4,
			left: null,
			right: null
		}
	}
};
const tree2 = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 4,
			left: null,
			right: null
		},
		right: {
			val: 4,
			left: null,
			right: null
		}
	},
	right: {
		val: 2,
		left: {
			val: 5,
			left: null,
			right: null
		},
		right: {
			val: 5,
			left: null,
			right: null
		}
	}
};

function check(root) {
	if (root.left === null && root.right === null) {
		return true;
	}
	if ((root.left === null && root.right) || (root.left && root.right == null)) {
		return false;
	}
	if (root.left.val !== root.right.val) {
		return false;
	} else {
		return check(root.left) && check(root.right);
	}
}

console.log("是否镜像树", check(tree1), check(tree2));
