Graph.prototype.DFSutil = function(n, visited) {
    // Only nodes that haven't been visited
    if (!visited[n]) {
        this.DFSList.push(n);
        let node = this.graph[n]; // grab the next vertices
        visited[n] = true;
        for (let v = 0; v < node.length; v++) {
            this.DFSutil(node[v], visited);
        }
    }
    return;
}

Graph.prototype.DFS = function(start = 0) {
    // Depth First Search utilizes recursion to visit each node and it's children nodes

    this.DFSList = [];
    let visited = {};
    visited[start] = true;
    this.DFSList.push(start);

    // Loop from the first index to the end of the graph
    for (let i = 0; i < this.graph[start].length; i++) {
        let node = this.graph[start][i];

        // Start the recursion
        this.DFSutil(node, visited);
        
    }
    console.log(`Graph in order of DFS is [${this.DFSList}]`);
    return this;
}

Graph.prototype.BFS = function() {
    /* Breadth First Search uses a queue data structure
    to visit each of the starting node's edges and then visit those node's edges. We need 
    to also keep track of what nodes have been visited to prevent an infinite loop */

    const queue = []; // Holds all nodes to visit
    const list = [];
    const visited = {}; // Store visited nodes
    
    // Push index 0 of the graph
    queue.push(0);
    list.push(0);
    visited[0] = true;
    
    // Loop while the queue isn't empty  
    while (queue.length) {

        // Grab the front node and graph index
        let n = queue.shift(); 
        let node = this.graph[n]; 
        
        // Loop through each of the indexes
        for (let v = 0; v < node.length; v++) {
            // Only add to queue if the node hasn't been visited
            if (!visited[node[v]]) {
                visited[node[v]] = true;
                list.push(node[v]);
                queue.push(node[v]);
            }
        }
    }
    // Display the results
    console.log(`Graph in order of BFS is [${list}]`);
    return this;
}

Graph.prototype.addEdge = function(edge, node) {
    // Add new edge to the graph
    this.graph[edge].push(node);
    return this;
}

Graph.prototype.displayGraph = function() {
    // Display the graph array
    console.log(this.graph);
    return this;
}

function Graph(n) {
    this.graph = [];

    // Make the graph array a 2D array
    for (let i = 0; i < n; i++)
        this.graph[i] = [];
}

let graph = new Graph(5);

/* We can chain the functions together by including "return this;" in each of the functions.
This will use the graph object to call the next function */
graph.addEdge(4, 1)
    .addEdge(4, 2)
    .addEdge(3, 2)
    .addEdge(3, 4)
    .addEdge(0, 1)
    .addEdge(0, 2)
    .addEdge(2, 4)
    .addEdge(2, 3)
    .addEdge(1, 4)
    .addEdge(4, 0)
    .displayGraph()
    .BFS()
    .DFS(0);
