class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }

    append(value){
        const node=new Node(value)
        if (!this.head) {
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
    }

    prepend(value){
        const node=new Node(value)
        if (!this.head) {
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.prev=node
            this.head=node
        }
    }

    print(){
        if (!this.head) {
            console.log('the list is empty');
            return
        }else{
            let cur=this.head
            while (cur) {
                console.log(cur.value);
                cur=cur.next
            }
        }
    }

}

let linkedList=new LinkedList()
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
linkedList.prepend(5)
linkedList.print()

