function getMaxUnrepeatSubstr(str) {
	let left = 0;
	// let right = 0;
	let maxSubstr = "";
	const map = new Map();
	for (let right = 0; right < str.length; right++) {
		const c = str[right];
		if (map.has(c) && map.get(c) >= left) {
			left = map.get(c) + 1;
		} else {
			const tempStr = str.slice(left, right + 1);
			maxSubstr = tempStr.length > maxSubstr.length ? tempStr : maxSubstr;
		}
		map.set(c, right);
	}
	return maxSubstr;
}
console.log(getMaxUnrepeatSubstr("tmmzuxt"));
console.log(
	getMaxUnrepeatSubstr("我随便打了一段话我也不知道这段话的内容长度多abcdefghijklmn123456789长")
);

var lengthOfLongestSubstring = function (str) {
	let left = 0;
	let right = 0;
	let maxLength = 0;
	const map = new Map();
	for (right = 0; right < str.length; right++) {
		const c = str[right];
		//右边条件确保重复c在窗口内（左指针及以后）
		if (map.has(c) && map.get(c) >= left) {
			left = map.get(c) + 1;
			console.log(right - left + 1, maxLength, typeof maxLength);
		} else {
			//省略else亦可 但是是不是会多余判断
			const tempLength = right - left + 1;
			maxLength = Math.max(maxLength, tempLength);
		}
		map.set(c, right);
	}
	return maxLength;
};
console.log(lengthOfLongestSubstring("tmmzuxt"));
console.log(
	lengthOfLongestSubstring("我随便打了一段话我也不知道这段话的内容长度多abcdefghijklmn123456789长")
);
