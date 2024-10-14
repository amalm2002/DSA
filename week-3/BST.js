class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    //--------------------------------- Insert The Value ----------------------------------------

    insert(value) {
        let node = new Node(value)
        if (!this.root) {
            this.root = node
            return
        } else {
            let curr = this.root
            while (true) {
                if (curr.value > value) {
                    if (curr.left === null) {
                        curr.left = node
                        break
                    } else {
                        curr = curr.left
                    }
                } else if (curr.value < value) {
                    if (curr.right === null) {
                        curr.right = node
                        break
                    } else {
                        curr = curr.right
                    }
                } else {
                    console.log("you can't add the duplicate values")
                    return
                }
            }
        }
    }

    //--------------------------------- Inorder ----------------------------------------

    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    //--------------------------------- Preorder ----------------------------------------

    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    //--------------------------------- Postorder ----------------------------------------

    postorder(root) {
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);

        }
    }

    //--------------------------------- Delete The Value ----------------------------------------

    min(root) {
        if (!root.left) {
            return root.value
        } return this.min(root.left)
    }

    deleteNode(root, value) {
        if (!root) {
            return null
        }
        if (root.value > value) {
            root.left = this.deleteNode(root.left, value)
        } else if (root.value < value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left) {
                return root.right
            }
            if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    delete(value) {
        if (!this.root) {
            return null
        } else {
            this.root = this.deleteNode(this.root, value)
        }
    }

    //--------------------------------- FInd The Height Of The Tree ----------------------------------------

    heightOfTheTree(root) {
        if (!root) {
            return -1
        }

        let leftHeight = this.heightOfTheTree(root.left)
        let rightHeight = this.heightOfTheTree(root.right)

        return Math.max(leftHeight, rightHeight) + 1
    }

    //--------------------------------- Find The Depth Of The Tree ----------------------------------------

    depthOfTheTree(node, value) {
        if (!node || !value) {
            return null
        }
        let curr = node
        let depth = 0
        while (curr) {
            if (curr.value === value) {
                return depth
            } else if (curr.value > value) {
                curr = curr.left
            } else if (curr.value < value) {
                curr = curr.right
            }
            depth++
        }
        return -1
    }

    //--------------------------------- Level Order ----------------------------------------

    levelOrder() {
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

    //--------------------------------- Find The Closest Value From The BST ----------------------------------------

    findTheClosest(target) {
        let curr = this.root
        let closest = curr.value
        while (curr) {
            if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
                closest = curr.value
            }
            if (curr.value > target) {
                curr = curr.left
            } else {
                curr = curr.right
            }
        }
        return closest
    }

    //--------------------------------- Check The Tree is BST Or Not ----------------------------------------

    isBinarySearchTree(root, min = -Infinity, max = Infinity) {
        if (!root) {
            return true
        }
        if (root.value <= min || root.value >= max) {
            return false
        }
        return (this.isBinarySearchTree(root.left, min, root.value) && this.isBinarySearchTree(root.right, root.value, max))
    }

    //--------------------------------- Check The Two Tree is BST Or Not ----------------------------------------

    ischecking(tree1, tree2) {
        return this.isBinarySearchTree(tree1) && this.isBinarySearchTree(tree2)
    }

    //--------------------------------- Find The Odd Number ----------------------------------------

    isOddNumber(root, odd = []) {
        if (root) {
            if (root.value % 2 == 1) {
                odd.push(root.value)
            }
            this.isOddNumber(root.left, odd)
            this.isOddNumber(root.right, odd)
        }
        return odd
    }

    //--------------------------------- BST Convert To Array ----------------------------------------

    createArray(root, arr) {
        if (root) {
            this.createArray(root.left, arr)
            arr.push(root.value)
            this.createArray(root.right, arr)
        }
    }

    converToArray(root) {
        let array = []
        this.createArray(root, array)
        return array
    }

    //--------------------------------- Array To Convert BST ----------------------------------------

    arrayToBST(arr, start = 0, end = arr.length - 1) {
        if (start > end) {
            return null
        }

        let mid = Math.floor((start + end) / 2)
        let node = new Node(arr[mid])

        node.left = this.arrayToBST(arr, start, mid - 1)
        node.right = this.arrayToBST(arr, mid + 1, end)

        return node
    }

    bulidarray(arr) {
        arr.sort((a, b) => a - b)
        this.root = this.arrayToBST(arr)
    }

    //--------------------------------- Find The Power Of Two ----------------------------------------

    isPowerOfTwo(value) {
        return (value > 0) && (value & value - 1) === 0
    }

    findThePowerOfTwo(root, power = []) {
        if (root) {
            if (this.isPowerOfTwo(root.value)) {
                power.push(root.value)
            }
            this.isPowerOfTwo(root.left)
            this.isPowerOfTwo(root.right)
        }
        return power
    }

    //--------------------------------- Find The Largest Value From BST ----------------------------------------

    findTheLargest() {
        if (!this.root) {
            return null
        }
        let curr = this.root
        while (curr.right) {
            curr = curr.right
        } return curr.value
    }

    //--------------------------------- Find The Second Largest ----------------------------------------

    findTheSecondLargest() {
        let first = -Infinity
        let second = -Infinity
        let curr = this.root
        function traverse(curr) {
            if (!curr) {
                return null
            }
            if (curr.value > first) {
                second = first
                first = curr.value
            } else if (curr.value > second && curr.value !== first) {
                second = curr.value
            }
            traverse(curr.left)
            traverse(curr.right)
        }
        traverse(curr)
        return [first, second]
    }
}

const tree2 = new BST()
tree2.insert(20)
tree2.insert(10)
tree2.insert(25)
tree2.insert(5)
tree2.insert(27)
tree2.insert(26)

tree2.inorder(tree2.root)

tree2.delete(25)

console.log('after delete a node');

tree2.inorder(tree2.root)

console.log('heght of the tree :', tree2.heightOfTheTree(tree2.root));

console.log('depth of the tree :', tree2.depthOfTheTree(tree2.root, 10));

console.log('level order');

tree2.levelOrder()

console.log('closest value is :', tree2.findTheClosest(18));

console.log('check the tree is BST ot Not :', tree2.isBinarySearchTree(tree2.root));

const tree1 = new BST()
tree1.root = new Node(80)
tree1.root.right = new Node(40)
tree1.root.left = new Node(60)

console.log('check the Two tree is BST or Not :', tree2.ischecking(tree2.root, tree1.root));

console.log('odd number is :', tree2.isOddNumber(tree2.root));

console.log('BST converting to array :', tree2.converToArray(tree2.root));

console.log('array to convert to BST');
let array = [9.8, 2, 4, 2, 7]
console.log('array :', array);

console.log('array to BST convertion ');
tree2.bulidarray(array)
tree2.inorder(tree2.root)

console.log('power of 2 Numbers is :', tree2.findThePowerOfTwo(tree2.root));


console.log('find the largest value :', tree2.findTheLargest());

console.log('find the largest and second largest :', tree2.findTheSecondLargest());




