class stackUsingQueue{
    constructor(){
        this.queue1=[]
        this.queue2=[]
    }

    isEmpty(){
        return this.queue1.length===0
    }

    push(value){
        this.queue2.push(value)
        while (this.queue1.length>0) {
            this.queue2.push(this.queue1.shift())
        }

        [this.queue1,this.queue2]=[this.queue2,this.queue1]
    }

    pop(){
       if (this.queue1.length===0) {
        console.log('the stack is empty');
        return null
       }
       return this.queue1.shift()

    }

    peek(){
        if (this.queue1.length===0) {
            console.log('stack is empty');
            return null
        }
        return this.queue1[0]
    }

    print(){
        console.log(this.queue1);
    }

}


const queue = new stackUsingQueue(5)
queue.push(5)
queue.push(6)
queue.push(7)
queue.push(8)
queue.print()

console.log('after poping');
queue.pop()
queue.print()

console.log('peek :', queue.peek());

