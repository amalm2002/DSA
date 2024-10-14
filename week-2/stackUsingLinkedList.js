class Node{
    constructor(value){
         this.value=value
         this.next=null
    }
}

class StackLinkedList{
    constructor(){
        this.top=null
    }

    isEmpty(){
        return this.top===null
    }

    push(value){
        const newNode=new Node(value)
        newNode.next=this.top
        this.top=newNode
        console.log('value pushed is :',value);

    }

    pop(){
        if (this.isEmpty()) {
            console.log('the list is empty,stsck is under flowing');
            return null
        }
        const popValue=this.top.value
        this.top=this.top.next
        return popValue
    }


    peek(){
        if (this.isEmpty()) {
            console.log('the stack is empty');
            return
        }
        return this.top.value
    }

    print(){
        if (this.isEmpty()) {
            console.log('the list empty');
            return
        }
        let cur=this.top
        // console.log();
        while(cur){
            console.log(cur.value);
            cur=cur.next
        }
    }

}


const stack=new StackLinkedList()
stack.push(9)
stack.push(1)
stack.push(8)
stack.print()

console.log('after pop');
stack.pop()
stack.print()

console.log('peek :',stack.peek());
stack.print()
