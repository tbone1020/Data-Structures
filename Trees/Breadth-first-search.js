/*
	The Breadth-first Search(BFS) algorithm starts at the root of a binary tree 
	and visits every node from top to bottom in order from left to right.
*/
t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": {
            "value": 5,
            "left": null,
            "right": null
        },
        "right": null
    }
}

function traverseTree(tree) {
	// Check if the tree exists
	if (!tree) return []; 
	// For holding the tree's the values
	const printedTree = [];
	// BFS requires a queue to store node for reference later
	const queue = [];
	// Push the tree to the queue
	queue.push(tree);
	while (queue.length) {
		// grab the front node from the queue
		const currentNode = queue.shift();
		// Add the value to the array
		printedTree.push(currentNode.value);
		// From left to right we add the next nodes 
		// to the queue
		if (currentNode.left) {
			queue.push(currentNode.left)
		}
		if (currentNode.right) {
			queue.push(currentNode.right)
		}
	}
	return printedTree;
}
console.log(traverseTree(t));