class Node {
    constructor(index, parent = null) {
        this.index = index;
        this.parent = parent;
    }
}

class Queue {
    constructor () {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}