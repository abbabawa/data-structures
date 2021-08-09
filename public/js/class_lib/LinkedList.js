//https://betterprogramming.pub/understanding-and-implementing-linked-lists-in-javascript-with-es6-c6f8720b38a
import {Rectangle} from "./Rectangle.js"
class Node{
    data
    next
    //Drawing properties
    displayProps = {rect1: null, rect2: null, line: null}
    startX
    startY
    colors = ["rgb(0, 0, 0)", "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"]
    displayColor = 0
    //Defaul box width and height
    rectWidth = 40
    rectHeight = 40
    ctx
    constructor(data, rectProps, ctx, next = null){
        this.data = data
        this.next = next
        this.startX = rectProps.x
        this.startY = rectProps.y
        this.ctx = ctx

        //this.draw()
    }

    draw(){
        this.displayProps.rect1 = new Rectangle(this.ctx, {x: this.startX, y: this.startY, width: this.rectWidth, height: this.rectHeight}, this.data)
        this.displayProps.rect2 = 
                new Rectangle(
                    this.ctx, 
                    {x: this.startX + this.rectWidth, y: this.startY + (this.rectWidth * 0.25), width: (this.rectWidth * 0.5), height: (this.rectHeight * 0.5)}, 
                    "."
                )
        if(this.next){
            this.ctx.beginPath()
            this.ctx.moveTo(
                this.startX + this.rectWidth + (this.rectWidth * 0.5), 
                this.startY + (this.rectHeight * 0.5)
            )
            this.ctx.lineTo(
                this.startX + this.rectWidth + (this.rectWidth * 0.5) + 10, 
                this.startY + (this.rectHeight * 0.5)
            )
            this.ctx.stroke()
        }
    }

    getProps(){
        return {
            x: this.startX,
            y: this.startY,
            width: this.rectWidth + (this.rectWidth * 0.5) + 10, //10= line length
            height: this.startY + this.rectHeight
        }
    }

    update(x, y, data = this.data){
        this.startX = x
        this.startY = y
        this.data = data
    }

    remove(){if(this.data === 20){console.log("remove"+this.data)}
        this.ctx.clearRect(this.startX - 3, this.startY - 3, this.rectWidth + (this.rectWidth * 0.5) + 10, this.startY + this.rectHeight)
    }

    animate( color, time){
        this.ctx.strokeStyle =this.colors[color]
        this.draw()
        this.ctx.strokeStyle = this.colors[this.displayColor]
        setTimeout(()=>{this.draw()}, time)
    }
}

class LinkedList{
    head = null
    size = 0
    ctx
    constructor(ctx){
        this.ctx = ctx
    }
    
    insertAtHead(data){
        if(!this.head){
            this.head = new Node(data, {x: 10, y:20}, this.ctx)
            this.printList()
        }
        else{
            this.head.remove()
            this.head = new Node(data, {x: this.head.getProps().x, y: this.head.getProps().y}, this.ctx, this.head)
            this.printList()
        }
        return this.head
    }

    insertAtTail(data){
        if(!this.head){
            this.head = new Node(data, {x: 10, y:20}, this.ctx)
            //this.head.draw()
            this.printList()
            return this.head
        }

        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = new Node(data, {x: current.getProps().x + current.getProps().width, y: current.getProps().y}, this.ctx)
        this.printList()
        //this.head.draw()
        return current.next
    }

    insertAfter(data, position){
        if (!this.head) {
            return -1
        }
        let current = this.head
        let count = 1
        while(current){
            if (count === Number(position)) {
                let newNode = new Node(data, {x: current.getProps().x + current.getProps().width, y: current.getProps().y}, this.ctx)
                //if(newNode.next){newNode.next.remove()}
                //this.refreshDisplay()
                current.next.remove()
                newNode.next = current.next
                current.next = newNode
                this.printList()
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
                current.animate(2, 6000)
                return count
            }else{
                current.animate(1, 3000)
                current = current.next
            }
            count++
        }
        return -1
    }

    deleteNode(data){
        if (this.head === null) {
            return "List is empty"
        }
        else if(this.head.data === data){
            this.head.remove()
            this.refreshDisplay()
            this.head = this.head.next
            //console.log(this.head)
            this.printList()
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
        previous.next.remove()
        previous.next = current.next
        this.refreshDisplay()
        this.printList()
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
            this.head.remove()
            this.head = current.next
            this.refreshDisplay()
            return
        }
        previous.next.remove()
        previous.next = current.next

        current = null
        this.refreshDisplay()
        this.printList()
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
        let current = this.head
        while(current){
            //items.push(current.data)
            //this.ctx.clearRect(current.getProps().x - 1, current.getProps().y - 1, current.getProps().width + 1, current.getProps().height + 1)
            current.remove()
            current.draw()
            if(current.next){//console.log(current.getProps().x, current.getProps().width)
                current.next.update(current.getProps().x + current.getProps().width, current.getProps().y)
            }
            current = current.next
        }
    }

    refreshDisplay(){
        let current = this.head
        while(current){
            current.remove()
            current = current.next
        }
        //this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height)
        //this.printList()
    }
}

export {LinkedList}

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