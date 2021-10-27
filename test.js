function getAll(arrs) {
	if (arrs.length < 1) return [];
	const res = [];
	function backtrack(temp, chunkIndex) {
		const chunkArr = arrs[chunkIndex];
		chunkArr.forEach(el => {
			const curr = temp.concat(el);
			const isLast = chunkIndex === arrs.length - 1;
			if (isLast) {
				res.push(curr);
			} else {
				backtrack(curr, chunkIndex + 1);
			}
		});
	}
	backtrack([], 0);
	return res;
}

// console.log(
// 	getAll([
// 		["红", "绿"],
// 		["大", "小"],
// 		["64g", "128g"]
// 	])
// );

function flatObj(source) {
	const res = {};
	function rec(val, path) {
		if (typeof val === "object" && val !== null) {
			if (Array.isArray(val)) {
				for (let index in val) {
					rec(val[index], `${path}[${index}]`);
				}
			} else {
				for (let k in val) {
					rec(val[k], path ? `${path}.${k}` : k);
				}
			}
		} else {
			res[path] = val;
		}
	}
	rec(source, "");
	return res;
}

const obj = {
	date: new Date(),
	arr: [
		{
			a: 1,
			b: [22]
		}
	],
	key: "jr"
};
console.log(flatObj(obj));

function isObject(val) {
	return typeof val === "object" && typeof val !== null;
}

function isPlainObject(val) {
	return Object.prototype.toString.call(val) === "[object Object]";
}

function deepClone(source) {
	if (!isObject(source)) return source;

	function rec(val) {
		if (!isObject(val)) return val;

		const res = Array.isArray(val) ? [] : {};
		for (let k in val) {
			res[k] = rec(val[k]);
		}
		return res;
	}
	return rec(source);
}

const copyObj = deepClone(obj);
obj.key = "jc";
console.log(obj, copyObj);

function randomUnrepeatNums(n, m, count) {
	if (count > m - n + 1) {
		throw new Error("参数不合法");
	}

	const arr = [];
	const set = new Set();
	while (arr.length < count) {
		const num = Math.floor(Math.random() * (m - n + 1) + n);
		set.has(num) || (arr.push(num), set.add(num));
	}
	return arr.sort((a, b) => a - b);
}

console.log(randomUnrepeatNums(10, 200, 100));

function deepClone(source) {
	if (!isObject(source)) return source;

	function rec(val) {
		if (!isObject(val)) {
			return val;
		} else {
			const res = Array.isArray(val) ? [] : {};
			for (let k in val) {
				res[k] = rec(val[k]);
			}
			return res;
		}
	}

	return rec(source);
}

function fn(arr) {
	if (arr.length === 0) return "";
	if (arr.length === 1) return arr[0];

	const str = arr[0];
	let index = 0;
	while (index < str.length) {
		const strSub = str.slice(0, index + 1);
		// for (let i = 1; i < arr.length; i++) {
		// 	if (!arr[i].startsWith(strSub)) {
		// 		return str.slice(0, index);
		// 	}
		// }
		for (let curr of arr) {
			if (!curr.startsWith(strSub)) {
				return str.slice(0, index);
			}
		}
		index++;
	}

	return str;
}

const strs = ["flower", "", "flow", "floight"];
console.log("字符串数组公共前缀", fn(strs));
