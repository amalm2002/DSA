class queueUsingStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enQueue(value) {
         this.stack1.push(value);
    }

    print() {
        console.log([...this.stack2, ...this.stack1.reverse()]);
        console.log("stack1",this.stack1);
        console.log("stack2",this.stack2);


        this.stack1.reverse();  
    }

    deQueue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();  
    }

    peek(){
        if (this.stack2.length===0) {
            while (this.stack2.length>0) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
}

const queueUseStack = new queueUsingStack();

queueUseStack.enQueue(2);
queueUseStack.enQueue(5);
queueUseStack.enQueue(6);
queueUseStack.enQueue(9);
queueUseStack.print();

console.log('after the dequeue');
console.log('dequeue value is :', queueUseStack.dequeue());
queueUseStack.print();
console.log('peek value is :', queueUseStack.peek());




