class  Graph {
    constructor() {
        this.adjacentcyList={}
    }

    addVertex(vertex){
        if(!this.adjacentcyList[vertex]){
            this.adjacentcyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2,undirected=true){
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


    dfs(start){
        let stack=[start]
        let visited=new Set()
        let result=[]
        visited.add(start)
        while (stack.length>0) {
            let vertex=stack.pop()
            result.push(vertex)
            this.adjacentcyList[vertex].forEach(neigbour => {
                if (!visited.has(neigbour)) {
                    stack.push(neigbour)
                    visited.add(neigbour)
                }
            });
        }
        return result
    }

}

const graph=new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('b')
graph.addEdge('a','b',true)
graph.addEdge('c','b',true)
graph.addEdge('a','c',true)

console.log('the dfs is :',graph.dfs('a'));

