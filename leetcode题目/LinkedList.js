/*
 * @Author: your name
 * @Date: 2021-06-07 16:13:54
 * @LastEditTime: 2021-06-07 16:43:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \菜鸟学算法\leetcode题目\链表.js
 */
const a = {
	val: "a"
};
const b = {
	val: "b"
};
const c = {
	val: "c"
};
const d = {
	val: "d"
};
let head = a;
a.next = b;
b.next = c;
c.next = d;
d.next = null;

function reverseLinkedList(head) {
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

head = reverseLinkedList(head);
console.log();

function LinkedList() {
	this.head = null;
	this.length = 0;
	function ListNode(val) {
		this.val = val;
		this.next = null;
	}
	LinkedList.prototype.append = function (val) {
		if (this.length === 0) {
			this.head = new ListNode(val);
		} else {
			let current = this.head;
			while (current) {
				current = current.next;
			}
			current.next = new ListNode(val);
		}
		this.length += 1;
	};
	LinkedList.prototype.insert = function (index, val) {
		// index should be in valid range
		if (index === 0) {
			// const newNode = new ListNode(val);
			// const temp = this.head
			// newNode.next = temp
			// this.head = newNode
			const newNode = new ListNode(val);
			newNode.next = this.head;
			this.head = newNode;
		} else {
		}
	};
}
