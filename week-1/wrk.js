// function reverseStr(str) {
//     if (str==='') {
//         return ''
//     }
//     return reverseStr(str.slice(1))+str[0]
// }

// console.log(reverseStr('hello'));

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     append(value){
//         const node=new Node(value)
//         if (this.isEmpty()) {
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }

//     merge(list1){
//         if (this.isEmpty()) {
//             console.log('the list is empty');
//             return
//         }else{
//             this.head=list1.head
//             this.tail=list1.tail    
//         }

//     }

//     print(){
//         if (this.isEmpty()) {
//             console.log('the list is emptyyyy');
//             return 
//         }

//         let cur=this.head
//         while(cur){
//             console.log(cur.value);
//             cur=cur.next
            
//         }
//     }
// }

// const linkedList=new LinkedList()

// linkedList.append(2)
// linkedList.append(3)
// linkedList.append(4)

// linkedList.print()


// const list1=new LinkedList()
// list1.append(5)
// list1.append(8)

// list1.print()



// function binerySerach(arr,target,low=0,heigh=arr.length-1) {
//     if (low>heigh) {
//         return -1
//     }
//     const midd=Math.floor((low+heigh)/2)

//     if (arr[midd]===target) {
//         return midd
//     }

//     if (arr[midd]>target) {
//         return binerySerach(arr,target,low,midd-1)
//     }else{
//         return binerySerach(arr,target,midd+1,heigh)
//     }
// }

// const array=[1,2,3,4,5,6]
// let value=5
// const result=binerySerach(array,value)

// if (result) {
//     console.log('search value position :',result);   
// }else{
//     console.log('the value is not found');
    
// }



let s = "luffy is still joyboy "
let str=''
let largest=''
let cout;


for (let i = 0; i < s.length; i++) {
    if (s[i]!==' ') {
        str+=s[i]
    }else{        
        if (str.length > largest.length) {
            largest=str 
            
        }
        str=''
        
    }
    if (str.length>largest.length) {
        console.log(str);
        
        cout=str.length
    }
}

console.log(cout);
