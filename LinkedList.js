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
        return this.head
    }

    insertAtTail(data){
        if(!this.head){
            this.head = new Node(data)
            return this.head
        }

        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = new Node(data)
        return current.next
    }

    insertAfter(data, position){
        // if(!node.data){
        //     return null
        // }
        let newNode = new Node(data)
        // newNode.next = node.next
        // node.next = newNode
        // return node.next

        if (!this.head) {
            return -1
        }
        let current = this.head
        let count = 1
        while(current){
            if (count === position) {
                newNode.next = current.next
                current.next = newNode
                return ++count //return position of item added
            }else{
                current = current.next
            }
            count++
        }
        return -1
    }

    search(data){
        if (!this.head) {
            return -1
        }
        let current = this.head
        let count = 1
        while(current){
            if (current.data === data) {
                return count
            }else{
                current = current.next
            }
            count++
        }
        return -1
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
        let previous = null
        let current = this.head
        for(let i=0; i<position; i++){
            if(current.next == null){
                return
            }
            previous = current
            current = current.next
        }
        if(previous == null){
            this.head = current.next
            return
        }
        previous.next = current.next
        current = null
    }

    getListItems(){
        let items = []
        if (!this.head) {
            return items
        }
        let current = this.head
        while(current){
            items.push(current.data)
            current = current.next
        }
        return items
    }

    printList(){
        console.log(this.head)
    }
}

module.exports = LinkedList

let list = new LinkedList()
// list.insertAtHead(10)
// list.insertAtHead(20)
// list.insertAtHead(30)
// list.insertAtTail(40)
// let current = list.search(20)
// list.insertAfter(394, current)
// list.deleteNode(20)

// list.insertAtTail(2)
// list.insertAtTail(3)
// list.insertAtTail(1)
// list.insertAtTail(7)
// list.deleteNodeAt(3)
// list.printList()
// console.log(list.search(1))