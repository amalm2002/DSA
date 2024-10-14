class queueArray {
    constructor(size) {
        this.queue = new Array(size)
        this.front = -1
        this.rear = -1
        this.size = size
    }

    isEmpty() {
        return this.front === -1 || this.front > this.rear
    }

    isFull() {
        return this.rear === this.size - 1
    }

    enQueue(value) {
        if (this.isFull()) {
            console.log('the queue is full');
            return null
        }

        if (this.front===-1) {
            this.front=0
        }

        this.queue[++this.rear] = value
    }

    deQueue() {
        if (this.isEmpty()) {
            console.log('the queue is empty');
            return null
        }

        let deQueueEle = this.queue[this.front]
        this.front++
        if (this.front > this.rear) {
            this.front = -1
            this.rear = -1
        }
        return deQueueEle
    }

    print() {
        if (this.isEmpty()) {
            console.log('the queue is empty');
            return
        }

        for (let i = this.front; i <= this.rear; i++) {
            console.log(this.queue[i]);
        }
    }
}




const queues = new queueArray(5)
queues.enQueue(3)
queues.enQueue(2)
queues.enQueue(4)
queues.enQueue(8)
queues.print()

console.log('after dequeue');
queues.deQueue()
console.log('deQueue element :', queues.deQueue());
queues.print()
console.log('peek value :', queues.peek());

queues.peek()