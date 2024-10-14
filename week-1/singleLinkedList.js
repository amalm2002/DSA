class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    remove(value) {
        if (this.isEmpty()) {
            console.log("list is empty");
            return
        }
        //remove the value from the head
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            if (this.size == 0) {
                this.tail = null
            }
        }

        let prv = null
        let cur = this.head

        while (cur !== null && cur.value !== value) {
            prv = cur
            cur = cur.next
        }

        if (cur === null) {
            console.log('value is not found');
            return
        }

        prv.next = cur.next


        // remove the last element
        if (cur === this.tail) {
            this.tail = prv
        }
        this.size--

    }

    reverse() {
        if (this.isEmpty()) {
            console.log('list is empty');
            return
        }

        let cur = this.head
        let prev = null
        this.tail = this.head

        while (cur) {
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        this.head = prev
    }

    findOddNumber() {
        if (this.isEmpty()) {
            console.log('the list is empty');
            return
        }
        let curr = this.head
        let oddNumber = []
        while (curr !== null) {
            if (curr.value % 2 == 1) {
                oddNumber.push(curr.value)
            }
            curr = curr.next
        }
        console.log("Odd numbers:", oddNumber);
    }

   addBeforePosition(value,position){
    if (position<1||position>this.size+1) {
        console.log('invalid postion');
        return
    }

    const node=new Node(value)

    if (position===1) {
        this.prepend(value)
        return
    }

    let cur=this.head
    let prev=null
    let currentPos=1

    while (position>currentPos) {
        prev=cur
        cur=cur.next
        currentPos++
    }

    node.next=cur
    prev.next=node
    this.size++

   }

   findMiddile(){
    if (this.isEmpty()) {
        console.log('list is empty');
        return
    }
     let fast=this.head
     let solw=this.head

     while (fast!==null&&fast.next!==null) {
        fast=fast.next.next
        solw=solw.next
     }

     console.log('find the middile of the list :',solw.value);

   }

   sumOf(){
    if (this.isEmpty()) {
        console.log('list is empty');
        return
    }
    let sum=0
    let cur=this.head
    while (cur!==null) {
        sum +=cur.value
        cur=cur.next
    }
    console.log('sum of the list is :',sum);
    
   }

   duplicate(){
    if (this.isEmpty()) {
        console.log('list is empty');
        return
    }
   
    let value=new Set()
    let cur=this.head

    while (cur!==null) {
        if (value.has(cur.value)) {
            this.remove(cur.value)
        }else{
            value.add(cur.value)
        }
        cur=cur.next
    }

   }


    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
            return
        }
        let cur = this.head
        while (cur) {
            console.log(cur.value);
            cur = cur.next
        }
    }
}

let linkedList = new LinkedList()
linkedList.append(3)
linkedList.append(6)
linkedList.append(9)
linkedList.prepend(1)
linkedList.prepend(2)
linkedList.print()


console.log("After deletion:");
linkedList.remove(2)
linkedList.remove(9)
linkedList.print()

console.log('after reverse');

linkedList.reverse()
linkedList.findOddNumber()
linkedList.print()


console.log('add before position');

linkedList.addBeforePosition(4,2)
linkedList.addBeforePosition(4,3)
linkedList.findMiddile()
linkedList.sumOf()
linkedList.print()

console.log('duplicate delete');

linkedList.duplicate()
linkedList.print()


