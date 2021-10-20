// 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

// 链接：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree
var sortedArrayToBST = function (nums) {
	if (nums.length === 0) return null;
	function rec(nums, start, end) {
		if (start > end) {
			return null;
		}
		const mid = (end + start) >> 1;
		const root = new TreeNode(nums[mid]);
		root.left = rec(nums, start, mid - 1);
		root.right = rec(nums, mid + 1, end);
		return root;
	}
	return rec(nums, 0, nums.length - 1);
};

var isMirror = function (root) {
	if (root === null) return true;
	function rec(left, right) {
		if (left === null && right === null) {
			return true;
		} else if (left === null || right === null) {
			return false;
		}
		if (left.val !== right.val) {
			return false;
		}
		return rec(left.left, right.left) && rec(left.right, right.right);
	}
	return rec(root.left, root.right);
};
