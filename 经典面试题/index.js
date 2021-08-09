// “水王数” 就是出现次数超过数组一半长度的数 如果存在 返回该数 否则返回-1
function getSW(nums) {
	if (nums.length === 0) return -1;
	if (nums.length === 1) return nums[0];

	const map = new Map();
	for (let num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	let sw = nums[0];
	for (let [num, count] of map) {
		if (count > map.get(sw)) {
			sw = num;
		}
	}
	if (map.get(sw) > nums.length >> 1) {
		return sw;
	} else {
		return -1;
	}
}

function getSW2(nums) {
	if (nums.length === 0) return -1;
	let candidate = "";
	let restHP = 0;
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (restHP === 0) {
			//血量为零 候选变为当前
			candidate = num;
			restHP += 1;
		} else if (candidate === num) {
			//血量不为零&&候选和当前一样 血量+1
			restHP += 1;
		} else {
			//血量不为零&&候选和当前不一样 血量-1
			restHP -= 1;
		}
	}
	if (restHP === 0) return -1;

	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		nums[i] === candidate && (count += 1);
	}
	return count > nums.length >> 1 ? candidate : -1;
}

// console.log(getSW([1, 2, 3, 4, 5]), getSW2([1, 2, 3, 4, 5]));
// console.log(getSW([1, 2, 1]), getSW2([1, 2, 1]));
// console.log(getSW([1, 5, 5, 1, 5, 4, 5, 7, 5, 9, 5]), getSW2([1, 5, 5, 1, 5, 4, 5, 7, 5, 9, 5]));
