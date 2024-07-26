//ll operations


class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    insertFirst(data){
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.size++;
    }
    insertLast(data){
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
        }
        else{
            let currNode=this.head;
            while(currNode.next!==null){
                currNode=currNode.next;
            }
            currNode.next=newNode;
        }
        this.size++;
    }
    printList(){
        let currNode=this.head;
        let str='';
        while(currNode!==null){
            str+=currNode.data+"->";
            currNode=currNode.next;
        }
        console.log(str);
        console.log("null");
    }
    insertIndex(data,pos){
        if(pos==0){
            this.insertFirst(data);
        }
        else{
            let count=0;
            let currNode=this.head;
            let newNode=new Node(data);
            while(count<pos){
                currNode=currNode.next;
                count++;
            }
            let temp=currNode.next;
            newNode.next=temp;
            currNode.next=newNode;
        }
    }
reverse(){
    let curr=this.haed;
    let prev=null;
    while(curr!==null){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
}
}
