class Node {
    constructor(n) {
        this.value = n;
        this.next = null;
    }
}

LinkedList.prototype.removeNode = function(node) {

    let temp = this.head;
    let prev = null;
    
    // Check if the head node is what needs to be removed
    if(temp != null && temp.value == node){
        this.head = temp.next; 
        return this;
    }
    
    /* Loop through the linked list and look
       for the node that needs to be removed */
    while(temp != null && temp.value != node){
        prev = temp; 
        temp = temp.next; 
    }
    
    // return if linked list is empty
    if (temp == null) return this; 

    /* Remove the node by linking the previous
       node to the next node */
    prev.next = temp.next; 
    
    return this;
}

LinkedList.prototype.displayList = function() {
    let n = this.root;
    let listArray = [];
    while (n) {
        if (n) {
            listArray.push(n.value);
            n = n.next;
        }
    }
    console.log(`The linked list is ${listArray}`);
    return this;
}

LinkedList.prototype.addLink = function(node) {
    if (!this.root) {
        console.log(`Adding ${node} to root`);
        this.root = new Node(node);
    } else {
        console.log(`Adding ${node}`);
        let n = this.root;
        while (n) {
            if (!n.next) {
                n.next = new Node(node);
                return this;
            } else {
                n = n.next;
            }
        }
    }
    return this;
}

function LinkedList() {
    this.root = null;
}

let list = new LinkedList();
list.addLink(5)
    .addLink(7)
    .addLink(2)
    .addLink(3)
    .addLink(8)
    .addLink(9)
    .addLink(1)
    .displayList();