// 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
// 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

// 最长回文串
var longestPalindrome = function (s) {
	if (s.length <= 0) return s.length;

	const map = new Map();
	let max = 0;
	for (let c of s) {
		map.set(c, map.has(c) ? map.get(c) + 1 : 1);
		if (map.get(c) % 2 === 0) {
			max += map.get(c);
			map.set(c, 0);
		}
	}
	return max === s.length ? max : max + 1;
};
console.log(longestPalindrome("abccccdd"));
// 最短回文串

// 最长回文子串
//中心扩展法
var longestPalindrome = function (s) {
	if (!s || s.length < 2) {
		return s;
	}
	var start = 0;
	var end = 0;
	var n = s.length;
	//中心扩展
	function centerExpend(left, right) {
		while (left >= 0 && right < n && s[left] == s[right]) {
			left--;
			right++;
		}
		return right - left - 1;
	}
	for (var i = 0; i < n; i++) {
		var len1 = centerExpend(i, i);
		var len2 = centerExpend(i, i + 1);
		//两种组合取最大的回文串长度
		var maxLen = Math.max(len1, len2);
		if (maxLen > end - start) {
			//更新最大回文串的首位字符索引
			start = i - ((maxLen - 1) >> 1); //>>右移操作
			end = i + (maxLen >> 1);
		}
	}
	return s.substring(start, end + 1);
};
