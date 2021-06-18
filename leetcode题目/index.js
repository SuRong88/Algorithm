/**
 * @param {number[]} arr
 * @param {number} duration
 * @return {number}
 */
function getSumTime(arr, duration) {
	if (arr.length === 0 || duration === 0) return 0;
	var sum = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] + duration < arr[i + 1]) {
			sum += duration;
		} else {
			sum += arr[i + 1] - arr[i];
		}
	}
	return sum + duration;
}

// console.log(getSumTime([0, 1, 4], 2));

// 校验闭合符号， 限定'()' '{}' '[]'
/**
 * @param {string} str
 * @return {boolean}
 */
function isValid(str) {
	if (str.length % 2 === 1) return false;
	var stack = [];
	// for (let i = 0; i < str.length; i++) {
	// 	var c = str[i];
	// 	if (c === "[" || c === "{" || c === "(") {
	// 		if (i >= str.length / 2) return false; //嵌套闭合校验， "([])" 为true, "()[]"为false
	// 		stack.push(c);
	// 	} else {
	// 		let last = stack[stack.length - 1];
	// 		let condition =
	// 			(c === "]" && last === "[") || (c === "}" && last === "{") || (c === ")" && last === "(");
	// 		if (condition) {
	// 			stack.pop();
	// 		} else {
	// 			return false;
	// 		}
	// 	}
	// }

	// 利用map简化if的判断
	const map = new Map();
	map.set("{", "}");
	map.set("(", ")");
	map.set("[", "]");
	for (let i = 0; i < str.length; i++) {
		var c = str[i];
		if (map.has(c)) {
			if (i >= str.length / 2) return false; //嵌套闭合校验， "([])" 为true, "()[]"为false
			stack.push(c);
		} else {
			let last = stack[stack.length - 1];
			let condition = map.get(last) === c;
			if (condition) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
}

// console.log(isValid("()"));
// console.log(isValid("()[]"));
// console.log(isValid("([{}])"));
// console.log(1);

// LRU算法
function LRU(capacity) {
	this.keyMap = new Map();
	this.capacity = capacity;
	LRU.prototype.get = function(key) {
		if (this.keyMap.has(key)) {
			const tempVal = this.keyMap.get(key);
			this.keyMap.delete(key);
			this.keyMap.set(key, tempVal);
			return tempVal;
		} else {
			return -1;
		}
	};
	LRU.prototype.put = function(key, val) {
		if (this.keyMap.has(key)) {
			this.keyMap.delete(key);
			this.keyMap.set(key, val);
		} else if (this.keyMap.size < this.capacity) {
			this.keyMap.set(key, val);
		} else {
			this.keyMap.delete(this.keyMap.keys().next().value);
			this.keyMap.set(key, val);
		}
	};
}
// let cache = new LRU(2);
// cache.put(1, 1);
// cache.put(2, 2);
// console.log("cache.get(1)", cache.get(1)); // 返回  1
// cache.put(3, 3); // 该操作会使得密钥 2 作废
// console.log("cache.get(2)", cache.get(2)); // 返回 -1 (未找到)
// cache.put(4, 4); // 该操作会使得密钥 1 作废
// console.log("cache.get(1)", cache.get(1)); // 返回 -1 (未找到)
// console.log("cache.get(3)", cache.get(3)); // 返回  3
// console.log("cache.get(4)", cache.get(4)); // 返回  4

// 求数组中连续n个元素的和， 使得n个元素的和达到最大值
function getArrRangeMax(arr, size) {
	// if (size > arr.length) {
	// 	console.error("size不能小于数组长度");
	// 	return -1;
	// }
	let start = 0;
	let end = size - 1;
	let sumMax;
	while (start <= arr.length - size) {
		let sum = 0;
		for (let i = start; i <= end; i++) {
			sum += arr[i];
		}
		sumMax = start === 0 ? sum : Math.max(sumMax, sum); //start === 0时， sum赋值给sumMax
		start += 1;
		end += 1;
	}
	return sumMax;
}
// console.log(getArrRangeMax([-2, -1, -5, -4, 0, -5], 13));

// 是否为4的幂
function is4Num(n, base = 4) {
	// if (num < base) {
	// 	return num === 1;
	// }
	// var stack = [];
	// while (num > 0) {
	// 	stack.push(num % base);
	// 	num = Math.floor(num / base);
	// }
	// // return stack.reverse().join("");

	// return stack[0] === 0;

	// 2的幂肯定大于等于1，然后通过类似计算汉明距离的方法用&运算把n的最右边的1的位变成0，
	// 因为除了1其他2的幂都是只有1位是1，所以如果这个1变成了0，
	// 结果就会变成0，也就是&运算后等于0就是2的幂

	// 4的幂肯定是2的幂，先通过判断2的幂的方法判断出是2的幂，
	// 如果从右开始第1位为第0位，那么4的幂的1都在偶数位，
	// 所以只要判断n的偶数位是否为1即可，
	// 构造32位二进制数1010  1010  1010  1010  1010  1010  1010  1010，
	// 用n和它进行&运算，如果是4的幂，结果会为0，例如4的二进制为0100，
	// 那么n和它进行&运算，结果就是0，所以是4的幂，假如是2，
	// 那么它的二进制就是0010，那么n和它进行&运算，结果就是0010，
	// 不是0，2也不是4的幂，所以此方法可以用来判断4的幂。
	// 那么1010  1010  1010  1010  1010  1010  1010  1010，可以用16进制0xaaaaaaaa表示
	return n >= 1 && (n & (n - 1)) == 0 && (n & 0xaaaaaaaa) == 0;
	// 如果一个数字是2的N次幂，那么它的二进制中只存在一个1
	// 是否为2的N次幂，n=4, 0100, 4-1 = 3, 0011；n=8, 1000, 8-1 = 7, 0111；
	// return n >= 1 && (n & (n - 1)) == 0;
}
// console.log(is4Num(13));
// console.log(is4Num(64));
// console.log(is4Num(-64));
// console.log(is4Num(96));
// console.log(is4Num(16));

// 滑窗算法
// 输出一个字符串中最长不重复子串的长度
function getSubstrMaxLengthofString(str) {
	if (!str) return 0;
	if (str === 1) return 1;
	const len = str.length;
	let l = 0;
	let r = 0;
	let maxLength = 0;
	let maxString = "";

	const map = new Map();
	for (let r = 0; r < len; r++) {
		const c = str[r];
		if (map.has(c) && map.get(c) >= l) {
			l = map.get(c) + 1;
		}
		const tempStr = str.slice(l, r + 1);
		// const tempStr = str.substr(l, r); 为什么结果不对？
		maxString = tempStr.length >= maxString.length ? tempStr : maxString;
		maxLength = Math.max(maxLength, r - l + 1);
		map.set(c, r);
	}
	return maxLength + "-" + maxString;
}

console.log(getSubstrMaxLengthofString("是一个子序列不是子串"));
console.log(getSubstrMaxLengthofString("abcabcbb"));

console.log(getSubstrMaxLengthofString("bbbbb"));
console.log(getSubstrMaxLengthofString("pwwkew"));


function reverseStr(str, num) {
	// num <= length
	var arr = str.split('')
	while (num--) {
		arr.push(arr.shift())
	}
	return arr.join('')
}

console.log(reverseStr('asfhdhfsd', 2));
