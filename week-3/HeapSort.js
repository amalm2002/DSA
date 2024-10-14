class HeapSort {
    constructor() {
        this.heap = []
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    heapify(size, i) {
        let largest = i
        let left = 2 * i + 1
        let right = 2 * i + 2

        if (left < size && this.heap[left] > this.heap[largest]) {
            largest = left
        }
        if (right < size && this.heap[right] > this.heap[largest]) {
            largest = right
        }

        if (largest !== i) {
            this.swap(i, largest)
            this.heapify(size, largest)
        }
    }

    buildMax(arr) {
        this.heap = arr
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapify(this.heap.length, i)
        }
    }

    sort(arr) {
        this.buildMax(arr)
        for (let i = this.heap.length - 1; i >= 0; i--) {
            this.swap(0, i)
            this.heapify(i, 0)
        }
        return this.heap
    }
}


const array = [8, 9, 89, 5, 66, 2]
console.log('orginal array :', array);

const heapSort = new HeapSort()
console.log('sorted array :', heapSort.sort(array));


//----------------------------- Heap Sort With Out class --------------------------------

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function heapify(arr, size, i) {
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (left < size && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right
    }
    if (largest !== i) {
        swap(arr, i, largest)
        heapify(arr, size, largest)
    }
}

function buildMax(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, arr.length, i)
    }
}

function HSort(arr) {
    buildMax(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
        swap(arr, 0, i)
        heapify(arr, i, 0)
    }
    return arr
}
console.log('heapsort with out class');

const arr = [8, 9, 89, 5, 66, 2]
console.log('orginal array :', arr);

console.log('sorted array :', HSort(arr));