function sleep(time) {
	var start = Date.now();
	var sum = 0;
	while (Date.now() - start <= time) {
		sum += 1;
		// if (Date.now() - start >= time) {
		// 	break;
		// }
	}
	console.log(sum);
}

// sleep(2000);
// console.log("finish");

function sleep2(delay, callback) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(callback());
		}, delay);
	});
}

async function test() {
	await sleep2(2000, () => "jr");
	console.log("finish");
}
// test();

function fn(nums) {
	const result = [];
	// function backtrack(paths, n) {
	// 	if (paths.length === n) {
	// 		result.push(paths);
	// 	} else {
	// 		nums.forEach((num, numIndex) => {
	// 			const last = paths[paths.length - 1];
	// 			if (numIndex < nums.indexOf(last)) return;
	// 			!paths.includes(num) && backtrack(paths.concat(num), n);
	// 		});
	// 	}
	// }
	// for (let n = 0; n <= nums.length; n++) {
	// 	backtrack([], n);
	// }
	function backtrack(paths, n, start) {
		if (paths.length === n) {
			result.push(paths);
		} else {
			for (let i = start; i < nums.length; i++) {
				backtrack(paths.concat(nums[i]), n, i + 1);
			}
		}
	}
	for (let n = 0; n <= nums.length; n++) {
		backtrack([], n, 0);
	}
	return result;
}
// console.log(fn([1, 2, 3]));
var count = function (arr, num) {
	let n = 0;
	arr.forEach(el => {
		if (el === num) {
			n += 1;
		}
	});
	return n;
};

var intersect = function (nums1, nums2) {
	if (nums1.length < 0 || nums2.length < 0) {
		return [];
	}

	const result = [];

	nums1.forEach(el => {
		const min = Math.min(count(nums1, el), count(nums2, el));
		const n = count(result, el);
		n < min && nums2.includes(el) && result.push(el);
	});
	return result;
};

console.log(
	intersect([1, 2], [1, 1]),
	intersect([1, 2, 2, 1], [2, 2]),
	intersect([4, 9, 5], [9, 4, 9, 8, 4])
);
