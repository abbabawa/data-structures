class LinkedList{
    #head = {value: null, next: null}
    #values = []
    addNode(nodeValue){
        if (this.#head.value == null) {
            this.#head = {value: nodeValue, next: null}
        }else{
            
            if(this.#head.next == null){
                this.#head.next = this.#values.length
            }else{
                this.#values[this.#values.length - 1].next = this.#values.length
            }
            this.#values[this.#values.length] = {value: nodeValue, next: null}
            
        }
        //console.log(this.#values, this.#head)
    }

    printList(){
        if (this.#head.value == null) {
            console.log("Empty List")
            return
        }
        console.log(this.#head.value)
        let next = this.#head.next
        while(next >= 0 && next != null){
            console.log(this.#values[next].value)
            next = this.#values[next].next
        }
    }
}

let list = new LinkedList()
list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(40)

list.printList()