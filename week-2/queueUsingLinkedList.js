class Node{
    constructor(value){
      this.value=value
      this.next=null  
    }
}

class queueUsingLinkedList{
    constructor(){
        this.front=null
        this.rear=null
    }

    isEmpty(){
        return this.front===null
    }

    enQueue(value){
        const newNode=new Node(value)
        if (this.isEmpty()) {
            return this.front=this.rear=newNode
        }else{
            this.rear.next=newNode
            this.rear=newNode
        }
    }

    deQueue(){
        if (this.isEmpty()) {
            console.log('the queue is empty');
            return null
        }

        const deQueueValue=this.front.value
        this.front=this.front.next
        if (!this.front) {
            this.rear=null
        }
        return deQueueValue
    }

    peek(){
        if (this.isEmpty()) {
            console.log('the queue is empty');
            return null
        }
        return this.front.value
    }

    print(){
        if (this.isEmpty()) {
            console.log('the queue is empty');
            return
        }

        let cur=this.front
        while(cur){
            console.log(cur.value);
            cur=cur.next
        }
    }
}




const queue = new queueUsingLinkedList()
queue.enQueue(9)
queue.enQueue(10)
queue.enQueue(11)
queue.print()

console.log('after the dequeue');

console.log("deleted value:", queue.deQueue());
queue.print()
console.log('-------------------------------');

console.log('peek element is:', queue.peek());
