class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BineryTree {
  constructor() {
    this.root = null
  }

  // ------------------------------------ Insert The Value ---------------------------------- 

  insert(value) {
    const node = new Node(value)
    if (!this.root) {
      this.root = node
      return
    }
    let queue = [this.root]
    while (queue.length > 0) {
      let curr = queue.shift()
      if (!curr.left) {
        curr.left = node
        break
      } else {
        queue.push(curr.left)

      }
      if (!curr.right) {
        curr.right = node
        break
      } else {
        queue.push(curr.right)
      }
    }
  }

  // ------------------------------------ Delete Node From The BST ---------------------------------- 

  deleteNodes(node) {
    let queue = [this.root]
    while (queue.length > 0) {
      let curr = queue.shift()
      if (curr === node) {
        curr = null
      }
      if (curr.left) {
        if (curr.left === node) {
          curr.left = null

        } else {
          queue.push(curr.left)
        }
      }
      if (curr.right) {
        if (curr.right === node) {
          curr.right = null
        } else {
          queue.push(curr.right)
        }
      }
    }
  }

  delete(value) {
    if (!this.root) {
      return null
    }

    let queue = [this.root]
    let lastNode = null
    let deleteNode = null
    while (queue.length > 0) {
      lastNode = queue.shift()
      if (lastNode.value === value) {
        deleteNode = lastNode
      }
      if (lastNode.left) {
        queue.push(lastNode.left)
      }
      if (lastNode.right) {
        queue.push(lastNode.right)
      }
    }
    if (deleteNode) {
      deleteNode.value = lastNode.value
      this.deleteNodes(lastNode)
    }
  }

  // ------------------------------------ Check The Two Tree Are Identical Or Not ---------------------------------- 

  static areIdentical(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
      return true
    }
    if (tree1 === null || tree2 === null) {
      return false
    }
    return (tree1.value === tree2.value) && BineryTree.areIdentical(tree1.left, tree2.left)
      && BineryTree.areIdentical(tree1.right, tree2.right)
  }

  // ------------------------------------ Search Value---------------------------------- 

  search(value) {
    if (!this.root) {
      return null
    }
    let queue = [this.root]
    while (queue.length > 0) {
      let curr = queue.shift()
      if (curr.value === value) {
        return true
      }
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
    } return false
  }

  // ------------------------------------ Dispaly ---------------------------------- 

  print() {
    if (!this.root) {
      return null
    }
    let queue = [this.root]
    while (queue.length > 0) {
      let curr = queue.shift()
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
    }
  }
}


const tree = new BineryTree()

tree.insert(6)
tree.insert(8)
tree.insert(2)
tree.insert(9)
tree.insert(19)
tree.insert(76)

tree.print()

console.log('search value is :', tree.search(99));
console.log('search value is :', tree.search(9));
console.log('after delete the node');

tree.delete(6)
tree.print()

const tree1 = new BineryTree()

tree1.insert(6)
tree1.insert(8)
tree1.insert(2)
tree1.insert(9)
tree1.insert(19)
tree1.insert(76)

console.log('check the two tree is BT :', BineryTree.areIdentical(tree.root, tree1.root));
