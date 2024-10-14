class MaxHeap {
    constructor() {
        this.heap = []
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    leftIndex(index) {
        return 2 * index + 1
    }

    rightIndex(index) {
        return 2 * index + 2
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    heapifyUp() {
        let index = this.heap.length - 1
        while (index > 0 && this.heap[this.parentIndex(index)] < this.heap[index]) {
            this.swap(index, this.parentIndex(index))
            index = this.parentIndex(index)
        }
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyDown() {
        let index = 0
        while (this.leftIndex(index) < this.heap.length) {
            let largeIndexvalue = this.leftIndex(index)
            if (this.rightIndex(index) < this.heap.length && this.heap[this.rightIndex(index)] > this.heap[largeIndexvalue]) {
                largeIndexvalue = this.rightIndex(index)
            }
            if (this.heap[index] > this.heap[largeIndexvalue]) {
                break
            }
            this.swap(index, largeIndexvalue)
            index = largeIndexvalue
        }
    }

    remove() {
        if (this.heap.length < 2) {
            return this.heap.pop()
        }

        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return max
    }
}

const maxHeap = new MaxHeap()
maxHeap.insert(8)
maxHeap.insert(89)
maxHeap.insert(86)
maxHeap.insert(50)
maxHeap.insert(8)
maxHeap.insert(7)

console.log(maxHeap.heap);
console.log('---------------------------------------');

console.log(maxHeap.remove());
console.log(maxHeap.heap);
