class stackArray {
    constructor(size) {
        this.stack = new Array(size)
        this.size = size
        this.top = -1
    }
    isFull() {
        return this.top === this.size - 1
    }
    isEmpty() {
        return this.top === -1
    }

    push(value) {
        if (this.isFull()) {
            console.log('the stack is overflow');
            return
        }
        this.stack[++this.top] = value
    }

    pop() {
        if (this.isEmpty()) {
            console.log('the stack is underflow');
            return
        }
        let popValue = this.stack.pop()
        this.stack[this.top--]
        return popValue
    }

    peek() {
        if (this.isEmpty()) {
            console.log('the stack is empty');
            return
        }
        console.log(this.stack[this.top]);

        return this.stack[this.top]
    }

    // ---------------------------- stack reverse-------------------------------

    reverse() {
        if (this.isEmpty()) {
            console.log('the stack is empty');
            return
        }

        let rev = []
        while (!this.isEmpty()) {
            rev.push(this.pop())
        }
        this.stack = rev
        this.top = rev.length - 1
    }

    print() {
        if (this.isEmpty()) {
            console.log('the stack is empty');
            return
        }

        for (let i = this.top; i >= 0; i--) {
            console.log(this.stack[i]);

        }
    }
}

const stackArr = new stackArray(5)
stackArr.push(5)
stackArr.push(4)
stackArr.push(2)
stackArr.push(7)
stackArr.push(9)
stackArr.print()

console.log('after pop');
stackArr.pop()
stackArr.print()

console.log('after reveres');
stackArr.reverse()
stackArr.print()

console.log('peek function ');
stackArr.peek()


// ---------------------------- Reverse string-------------------------------


class Stack {
   constructor(){
    this.stack=[]
   }

   isEmpty(){
    return this.stack.length===0
   }

   push(value){
    return this.stack.push(value)
   }

   pop(){
    return this.stack.pop()
   }

}

function reveresString(str) {
    const stack=new Stack()
    for (const char of str) {
        stack.push(char)
    }

    let revStr=''
    while (!stack.isEmpty()) {
        revStr+=stack.pop()
    }

    return revStr
}

const value = 'hello'
console.log('orginal string is ; ', value);
console.log('reverse string :', reveresString(value));



// ---------------------------- delete middile element form stack-------------------------------


class Stack {
    constructor() {
        this.stack = []
    }
    isEmpty() {
        return this.stack.length === 0
    }
    push(value) {
        return this.stack.push(value)
    }
    pop() {
        if (this.isEmpty()) {
            console.log('the stack is empty');
            return
        }

        return this.stack.pop()
    }

    deleteMiddile() {
        let length = this.stack.length
        let middile = Math.floor(length / 2)

        this.findMiddileFunction(middile)

    }

    findMiddileFunction(midd) {


        if (midd === 0) {
            console.log(',,,,,,', midd);
            this.pop()
            console.log('if', this.stack);
            return
        }

        let topElement = this.pop()

        this.findMiddileFunction(midd - 1)

        this.push(topElement)
    }

    print() {
        console.log(this.stack);

    }
}

const stackk = new Stack(7)
stackk.push(1)
stackk.push(2)
stackk.push(3)
stackk.push(4)
stackk.push(5)

stackk.print()

console.log('after delete middile element');
stackk.deleteMiddile()
stackk.print()

// ---------------------------- stack sort -------------------------------

class Stack {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    push(value) {
        this.stack1.push(value)
        this.sort()
    }

    sort() {
        while (this.stack1.length > 0) {
            let value = this.stack1.pop()
            while (this.stack2.length > 0 && this.stack2[this.stack2.length - 1] > value) {
                this.stack1.push(this.stack2.pop())
            }
            this.stack2.push(value)
        }
    }

    print() {
        console.log(this.stack2);

    }
}

const stack = new Stack()
stack.push(3)
stack.push(1)
stack.push(9)
stack.push(8)

stack.print()


