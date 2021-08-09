function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
const a = new ListNode("a");
const b = new ListNode("b");
const c = new ListNode("c");
const d = new ListNode("d");
a.next = b;
b.next = c;
c.next = d;
const head = a;
console.log(head);

/** 链表反转*/
function revertLinkedList(head) {
	let prev = null;
	let current = head;
	while (current) {
		const temp = current.next;
		current.next = prev;
		prev = current;
		current = temp;
	}
	return prev;
}
// console.log(revertLinkedList(head));
/** 链表反转 left - right之间进行反转 并返回头结点*/
function reverseBetween(head, left, right) {
	// 自己的方法
	// let current = head;
	// let leftNode = null;
	// let rightNode = null;
	// let count = 0;
	// let prev = null;
	// let next = null;

	// while (current) {
	// 	count += 1;
	// 	if (count === left) {
	// 		leftNode = current;
	// 	}
	// 	if (count === right) {
	// 		rightNode = current;
	// 	}
	// 	if (leftNode && rightNode) {
	// 		break;
	// 	}
	// 	if (!leftNode) {
	// 		prev = current;
	// 	}
	// 	current = current.next;
	// }
	// next = rightNode.next;
	// let p = null;
	// let q = leftNode;
	// while (q !== next) {
	// 	const temp = q.next;
	// 	q.next = p;
	// 	p = q;
	// 	q = temp;
	// }
	// console.log("test", q, next);
	// leftNode.next = next;
	// if (prev === null) {
	// 	return p;
	// } else {
	// 	prev.next = p;
	// 	return head;
	// }

	// 方法一
	// 思路：先找prev next leftNode rightNode,切断子区间，再反转子区间，最后连接起来
	// const dummy = new ListNode();
	// dummy.next = head;
	// let leftNode = null;
	// let rightNode = null;
	// let prev = dummy;
	// let next = null;
	// for (let i = 0; i < left - 1; i++) {
	// 	prev = prev.next;
	// }
	// rightNode = prev;
	// for (let i = 0; i < right - left + 1; i++) {
	// 	rightNode = rightNode.next;
	// }
	// leftNode = prev.next;
	// next = rightNode.next;

	// prev.next = null;
	// rightNode.next = null;

	// let p = null;
	// let q = leftNode;
	// while (q) {
	// 	const temp = q.next;
	// 	q.next = p;
	// 	p = q;
	// 	q = temp;
	// }

	// prev.next = rightNode;
	// leftNode.next = next;

	// return dummy.next;
	// 方法二 https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/
	const dummy = new ListNode();
	dummy.next = head;
	let prev = dummy;
	for (let i = 0; i < left - 1; i++) {
		prev = prev.next;
	}
	let current = prev.next;

	for (let i = 0; i < right - left; i++) {
		const next = current.next;
		current.next = next.next;
		next.next = prev.next;
		prev.next = next;
	}
	return dummy.next;
}
console.log("res", reverseBetween(head, 1, 4));

/** 输出链表倒数第k个元素*/
function getNthFromEnd(head, k) {
	// const revertHead = revertLinkedList(head);
	// let count = 0;
	// let current = revertHead;
	// let result;
	// while (current) {
	// 	count += 1;
	// 	if (count === k) {
	// 		result = current.val;
	// 		return result;
	// 	}
	// 	current = current.next;
	// }
	// 双指针法  牛逼
	const dummy = new ListNode();
	dummy.next = head;
	let p = dummy;
	let q = dummy;
	for (let i = 0; i <= k; i++) {
		q = q.next;
	}
	while (q) {
		p = p.next;
		q = q.next;
	}
	return p.next.val;
}
// console.log("输出链表倒数第k个元素", getNthFromEnd(head, 2));
/** 删除链表的倒数第 N 个节点  并返回头结点*/

// 我们可以设想假设设定了双指针 p 和 q 的话，当 q 指向末尾的 NULL，p 与 q 之间相隔的元素个数为 n 时，那么删除掉 p 的下一个指针就完成了要求。

// 设置虚拟节点 dummyHead 指向 head
// 设定双指针 p 和 q，初始都指向虚拟节点 dummyHead
// 移动 q，直到 p 与 q 之间相隔的元素个数为 n
// 同时移动 p 与 q，直到 q 指向的为 NULL
// 将 p 的下一个节点指向下下个节点

// 链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/dong-hua-tu-jie-leetcode-di-19-hao-wen-ti-shan-chu/
function removeNthFromEnd(head, n) {
	const dummy = new ListNode();
	dummy.next = head;
	let p = dummy;
	let q = dummy;
	for (var i = 0; i <= n; i++) {
		q = q.next;
	}
	while (q) {
		p = p.next;
		q = q.next;
	}
	p.next = p.next.next;
	return dummy.next;
}
/** 判断链表是否循环*/
function isCircleLinkedList(head) {
	// let current = head;
	// while (current) {
	// 	if (current.read) return true;
	// 	current.read = true;
	// 	current = current.next;
	// }
	// return false;

	if (!head) return false;
	let slow = head;
	let quick = head.next;
	while (slow && quick && quick.next) {
		if (slow === quick) return true;
		slow = slow.next;
		quick = quick.next.next;
	}
	return false;
}

/** 判断两个链表是否有交点*/

/** 两个链表的数字相加*/
// [1,2,3] 代表321  [1,8,2] 代表281  输出[2,0,6]代表602
// 321 + 281 = 602
function addTwoNumbers(l1, l2) {
	let p1 = l1;
	let p2 = l2;
	let carry = 0;
	const l3 = new ListNode();
	let p3 = l3;
	while (p1 || p2) {
		const val1 = p1 ? p1.val : 0;
		const val2 = p2 ? p2.val : 0;
		const sum = val1 + val2 + carry;
		const num = sum % 10;
		carry = parseInt(sum / 10);
		p3.next = new ListNode(num);
		p1 && (p1 = p1.next);
		p2 && (p2 = p2.next);
		p3 = p3.next;
	}
	carry && (p3.next = new ListNode(carry));
	return l3.next;
}
/** 删除某个节点(非末尾节点)*/

// 使其可以删除某个链表中给定的（非末尾）节点。
// 传入函数的唯一参数为 要被删除的节点 。
function deleteNode(node) {
	node.val = node.next.val;
	node.next = node.next.next;
}

/** 合并两个有序链表*/

// 将两个升序链表合并为一个新的 升序 链表并返回。
// 新链表是通过拼接给定的两个链表的所有节点组成的。
function mergeTwoLists(l1, l2) {
	// 方法一：常规
	// let p1 = l1;
	// let p2 = l2;
	// const l3 = new ListNode();
	// let p3 = l3;
	// while (p1 && p2) {
	// 	if (p1.val <= p2.val) {
	// 		p3.next = new ListNode(p1.val);
	// 		// p3.next = p1;
	// 		p1 = p1.next;
	// 	} else {
	// 		p3.next = new ListNode(p2.val);
	// 		// p3.next = p2;
	// 		p2 = p2.next;
	// 	}
	// 	p3 = p3.next;
	// }
	// p3.next = p1 ? p1 : p2;
	// return l3.next;

	// 方法二：递归
	let p1 = l1;
	let p2 = l2;
	if (p1 === null) {
		return p2;
	} else if (p2 === null) {
		return p1;
	} else if (p1.val <= p2.val) {
		p1.next = mergeTwoLists(p1.next, p2);
		return p1;
	} else {
		p2.next = mergeTwoLists(p1, p2.next);
		return p2;
	}
}

// var swapPairs = function(head) {

// };

// 两个链表的交点 没有则返回null
// https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/solution/liang-ge-lian-biao-de-di-yi-ge-gong-gong-pzbs/

function b(l1, l2) {
	let pA = l1;
	let pB = l2;
	while (pA !== pB) {
		pA = pA ? pA.next : l2;
		pB = pB ? pB.next : l1;
	}
	return pA;

	// let pA = l1;
	// let pB = l2;
	// let readArr = new Set();
	// while (pA) {
	// 	readArr.add(pA);
	// 	pA = pA.next;
	// }
	// while (pB) {
	// 	if (readArr.has(pB)) {
	// 		return pB;
	// 	}
	// 	pB = pB.next;
	// }

	// return null;
}

// 判断是否为“回文链表”
// 1 -> 2 false   1 -> 2 -> 2 -> 1 true
// 思路：获取链表的前半部分和后半部分，将后半部分反转，
// 然后前后两个半链表进行对比，最后把后半部分反转回来

var isPalindrome = function (head) {
	// 获取链表前半部分的最后一个节点
	// 关键：快慢指针，当链表个数为奇数是，例如size为5，那么第三个节点隶属前半部分
	function getFirstHalfEnd(head) {
		let slow = head;
		let fast = head;
		while (fast.next && fast.next.next) {
			slow = slow.next;
			fast = fast.next.next;
		}
		return slow;
	}
	// 反转
	function reverse(head) {
		let prev = null;
		let curr = head;
		while (curr) {
			const temp = curr.next;
			curr.next = prev;
			prev = curr;
			curr = temp;
		}
		return prev;
	}
	// code
	if (head === null) return true; //为啥他妈null算是呢

	let firstHalfEnd = getFirstHalfEnd(head);
	let secondHalfStart = reverse(firstHalfEnd.next);
	let p1 = head;
	let p2 = secondHalfStart;

	while (p2) {
		if (p1.val !== p2.val) return false;
		p1 = p1.next;
		p2 = p2.next;
	}
	firstHalfEnd.next = reverse(secondHalfStart);

	return true;
};

// 删除升序链表中出现重复元素的元素

var deleteDuplicates = function (head) {
	if (head === null) return null;

	const map = new Map();
	let curr = head;
	while (curr) {
		const val = curr.val;
		map.set(val, map.has(val) ? map.get(val) + 1 : 1);
		curr = curr.next;
	}
	const dummy = new ListNode();
	dummy.next = head;
	prev = dummy;
	curr = head;
	while (curr) {
		if (map.get(curr.val) > 1) {
			prev.next = curr.next;
		} else {
			prev = curr;
		}
		curr = curr.next;
	}
	return dummy.next;
};

// 合并K个升序链表
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
		if (this.heap[parentIndex].val > this.heap[index].val) {
			this.swap(parentIndex, index);
			this.shiftUp(parentIndex);
		}
	}
	shiftDown(index) {
		const leftIndex = this.getLeftChildIndex(index);
		const rightIndex = this.getRightChildIndex(index);

		if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
			this.swap(index, leftIndex);
			this.shiftDown(leftIndex);
		}
		if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
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

		const val = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.shiftDown(0);
		return val;
	}
	peek() {
		return this.heap[0];
	}
	size() {
		return this.heap.length;
	}
}

var mergeKLists = function (lists) {
	if (lists.length === 0) return null;
	const h = new MinHeap();
	lists.forEach(head => {
		head && h.insert(head);
	});
	const l3 = new ListNode();
	let p3 = l3;
	while (h.size()) {
		const top = h.pop();
		p3.next = top;
		p3 = p3.next;
		top.next && h.insert(top.next);
	}
	return l3.next;
};
