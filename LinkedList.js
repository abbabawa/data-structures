//https://betterprogramming.pub/understanding-and-implementing-linked-lists-in-javascript-with-es6-c6f8720b38a
class Node{
    data
    next
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    head = null
    size = 0
    
    insertAtHead(data){
        if(!this.head){
            this.head = new Node(data)
        }
        else{
            this.head = new Node(data, this.head)
        }
    }

    insertAtTail(data){
        if(!this.head){
            this.head = new Node(data)
            return 
        }

        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = new Node(data)
    }

    insertAfter(data, node){
        let newNode = new Node(data)
        newNode.next = node.next
        node.next = newNode
    }

    search(data){
        if (!this.head) {
            return "List is empty"
        }
        let current = this.head
        while(current){
            if (current.data == data) {
                return current
            }else{
                current = current.next
            }
        }
        return "item not found"
    }

    deleteNode(data){
        if (this.head == null) {
            return "List is empty"
        }
        else if(this.head.data == data){
            this.head = this.head.next
            return
        }
        let current = this.head
        let previous = this.head
        while(current != null && current.data != data){
            previous = current
            current = current.next
        }
        if(current == null)
            return
        previous.next = current.next
    }

    //Function to delete the node at a particular position
    deleteNodeAt(position){
        let current = this.head
        let previous = null
        if(position == 0){
            this.head = this.head.next
            return
        }

        for(let i = 0; i< position && current.next != null; i++){//console.log(current)
            previous = current
            current = current.next
        }console.log(current)
        if (current == null || (current.next == null && current.data == null)) {
            return
        }
        previous.next = current.next
        current = null
    }

    printList(){
        console.log(this.head)
    }
}

let list = new LinkedList()
// list.insertAtHead(10)
// list.insertAtHead(20)
// list.insertAtHead(30)
// list.insertAtTail(40)
// let current = list.search(20)
// list.insertAfter(394, current)
// list.deleteNode(20)

list.insertAtTail(2)
list.insertAtTail(3)
list.insertAtTail(1)
list.insertAtTail(7)
list.deleteNodeAt(60)
list.printList()