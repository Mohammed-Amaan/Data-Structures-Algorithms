class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;  
    }
//insert first
    insertFirst(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
//insert last
    insertLast(data){
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else{
        let currNode=this.head;
        while(currNode.next!=null){
            currNode=currNode.next;
        }
        currNode.next=newNode;
        }
        this.size++;
    }
//insert at index
    insertIndex(data,pos){
        if(pos>this.size){
            console.log('Out of bounds')
            return
        }
        if(pos===0){
            this.insertFirst(data);
        }
        //else
        let count=0;
        let currNode=this.head;
        while(count<pos-1){
            currNode=currNode.next;
            count++;
        }
        const newNode=new Node(data);
        
        newNode.next=currNode.next;
        currNode.next=newNode;
    }
//print list
printList(){
    let currNode=this.head;
    if(this.head==null){
        console.log("list empty");
    }
    while(currNode!=null){
        console.log(currNode.data+"->")
        currNode=currNode.next;
    }
    console.log('null')
}
//delete first node
deleteFirst(){
    //if one element
    if(this.head.next==null){
        this.head=null
    }
    //else
    this.head=this.head.next;
    this.size--;
}
//deelte last node
deleteLast(){
    //if only one element
    if(this.head.next==null){
        this.head=null;
        return;
    }
    //else
    let currNode=this.head;
    while(currNode.next.next!=null){
        currNode=currNode.next;
    }
    currNode.next=null
    this.size--;
}

//delete at index
deleteIndex(pos){
    if(pos<0||pos>this.size){
        console.log('out of bounds')
        return;
    }
    if(pos==0){
        this.deleteFirst();
    }
    //else
    let count=0;
    let currNode=this.head;
    while(count<pos-1){
        currNode=currNode.next;
        count++;
    }
    currNode.next=currNode.next.next;
    
}
//reverse LL
reverseLL(){
    let curr=this.head;
    let prev=null;
    while(curr!==null){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
    this.head=prev;
}
}


const ll = new LinkedList();
ll.insertFirst('c');
ll.insertFirst('b');
ll.insertLast('d');
//ll.printList();
console.log("size of LL",ll.size);
ll.deleteLast();
//ll.printList();
console.log("size of LL",ll.size);
ll.deleteFirst();
//ll.printList();
ll.insertFirst('x');
ll.insertFirst('y');
ll.insertLast('z');
//ll.printList();
console.log("size of LL",ll.size);
ll.insertIndex("abc",2);
ll.printList();
ll.deleteIndex(2);

console.log("after del");
ll.printList();
ll.reverseLL();
ll.printList();