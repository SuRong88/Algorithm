// DFS
// DFS递归(depth first search)
function DFS(source) {
	const result = [];
	const dfs = data => {
		data.forEach(ele => {
			result.push(ele.id);
			ele.children && dfs(ele.children);
		});
	};
	dfs(source);
	return result;
}
// DFS非递归
function DFS(source) {
	const result = [];
	const stack = JSON.parse(JSON.stringify(source));
	while (stack.length > 0) {
		const node = stack.shift();
		result.push(node.id);
		if (node.children) {
			// 倒序插入
			for (let i = node.children.length - 1; i >= 0; i--) {
				stack.unshift(node.children[i]);
			}
		}
	}

	return result;
}
// BFS非递归(breadth first search)
function BFS(source) {
	const result = [];
	const queue = JSON.parse(JSON.stringify(source));
	while (queue.length) {
		const node = queue.shift();
		result.push(node.id);
		if (node.children) {
			for (let i = 0; i < node.children.length; i++) {
				queue.push(node.children[i]);
			}
		}
	}
	return result;
}
// 测试
const root = [
	{
		id: "1",
		children: [
			{
				id: "1-1",
				children: [
					{
						id: "1-1-1"
					},
					{
						id: "1-1-2"
					}
				]
			},
			{
				id: "1-2",
				children: [
					{
						id: "1-2-1"
					},
					{
						id: "1-2-2"
					}
				]
			}
		]
	},
	{
		id: "2",
		children: [
			{
				id: "2-1",
				children: [
					{
						id: "2-1-1"
					},
					{
						id: "2-1-2"
					}
				]
			},
			{
				id: "2-2",
				children: [
					{
						id: "2-2-1"
					},
					{
						id: "2-2-2"
					}
				]
			}
		]
	},
	{
		id: "3",
		children: [
			{
				id: "3-1",
				children: [
					{
						id: "3-1-1"
					},
					{
						id: "3-1-2"
					}
				]
			},
			{
				id: "3-2",
				children: [
					{
						id: "3-2-1"
					},
					{
						id: "3-2-2"
					}
				]
			}
		]
	}
];

const res01 = DFS(root);
const res02 = BFS(root);
console.log("深度优先：", res01, "广度优先：", res02);
