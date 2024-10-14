class Graph {
    constructor() {
        this.adjacentcyList = {}
    }
    // ------------------------------------ Add Node/Vertex On Graph---------------------------------- 

    addVertex(vertex) {
        if (!this.adjacentcyList[vertex]) {
            this.adjacentcyList[vertex] = new Set()
        }
    }

    // ------------------------------------ Connect The Two Node/Vertex---------------------------------- 

    addEdge(vertex1, vertex2, undirected = true) {
        if (!this.adjacentcyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacentcyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacentcyList[vertex1].add(vertex2)
        if (undirected) {
            this.adjacentcyList[vertex2].add(vertex1)
        }
    }

    // ------------------------------------ BFS ---------------------------------- 

    bfs(start) {
        let queue = [start]
        let visited = new Set()
        let result = []
        visited.add(start)
        while (queue.length > 0) {
            let vertex = queue.shift()
            result.push(vertex)
            this.adjacentcyList[vertex].forEach(element => {
                if (!visited.has(element)) {
                    queue.push(element)
                    visited.add(element)
                }
            });
        } return result
    }

    // ------------------------------------ DFS ---------------------------------- 

    dfs(start) {
        let stack = [start]
        let visited = new Set()
        let result = []
        visited.add(start)
        while (stack.length > 0) {
            let vertex = stack.pop()
            result.push(vertex)
            this.adjacentcy[vertex].forEach(ele => {
                if (!vertex.has(ele)) {
                    stack.push(ele)
                    visited.add(ele)
                }
            })
        } return result
    }

    // ------------------------------------ Find The Shortest Path ---------------------------------- 

    findTheShortestPath(start, end) {
        let queue = [{ node: start, path: [start] }]
        let visited = new Set()
        while (queue.length > 0) {
            let { node, path } = queue.shift()
            if (node === end) {
                return path
            }
            visited.add(node)
            this.adjacentcyList[node].forEach(ele => {
                if (!visited.has(ele)) {
                    queue.push({ node: ele, path: [...path, ele] })
                    visited.add(ele)
                }
            })
        } return null
    }

    // ------------------------------------ Path Existing ---------------------------------- 

    pathExisting(start, end) {
        if (!this.adjacentcyList[start] || !this.adjacentcyList[end]) {
            return false
        }

        let stack = [start]
        let visited = new Set()
        visited.add(start)
        while (stack.length > 0) {
            let vertex = stack.pop()
            if (vertex === end) {
                return true
            }
            this.adjacentcyList[vertex].forEach(ele => {
                if (!visited.has(ele)) {
                    stack.push(ele)
                    visited.add(ele)
                }
            })
        } return false
    }

    // ------------------------------------ Cycle Of Graph ---------------------------------- 


    cycle() {
        let visited = new Set()
        const dfs = (parent, vertex) => {
            visited.add(vertex)

            for (const neighbour of this.adjacentcyList[vertex]) {
                if (!visited.has(neighbour)) {
                    if (dfs(vertex, neighbour)) {
                        return true
                    }
                } else if (neighbour !== parent) {
                    return true
                }
            } return false
        }

        for (const vertex in this.adjacentcyList) {
            if (!visited.has(vertex)) {
                if (dfs(null, vertex)) {
                    return true
                }
            }
        }
        return true
    }

    // ------------------------------------ Remove Node/Vertex From Graph ---------------------------------- 

    reomveNode(vertex1, vertex2) {
        if (this.adjacentcyList[vertex1]) {
            this.adjacentcyList[vertex1].delete(vertex2)
        }
        if (this.adjacentcyList[vertex2]) {
            this.adjacentcyList[vertex2].delete(vertex1)
        }
    }

    remove(vertex) {
        if (!this.adjacentcyList[vertex]) {
            return null
        }

        for (const neighbour of this.adjacentcyList[vertex]) {
            this.reomveNode(neighbour, vertex)
        }

        delete this.adjacentcyList[vertex]
    }

    // ------------------------------------ Display ---------------------------------- 

    dispaly() {
        for (const vertex in this.adjacentcyList) {
            console.log(vertex, '==>', [...this.adjacentcyList[vertex]]);

        }
    }
}

const graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addEdge('a', 'c', true)
graph.addEdge('c', 'b', true)
graph.addEdge('b', 'c', true)
graph.addEdge('a', 'b', false)

graph.dispaly()
console.log('bfs :', graph.bfs('a'));
console.log('dfs :', graph.bfs('a'));
console.log("shortest path from 'a' to 'c':", graph.findTheShortestPath("a", "c"));
console.log("path existing between 'a' to 'c':", graph.pathExisting("a", "c"));
console.log("path existing between 'a' to 'd':", graph.pathExisting("a", "d"));
console.log("cycle of the graph :", graph.cycle());

graph.remove('a')

console.log('after delete');

graph.dispaly()
