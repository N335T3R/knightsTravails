function getMoves(node) {
    node[0] = new Node({x: node.index.x - 2, y: node.index.y - 1}, node);
    node[1] = new Node({x: node.index.x - 2, y: node.index.y + 1}, node);
    node[2] = new Node({x: node.index.x + 2, y: node.index.y - 1}, node);
    node[3] = new Node({x: node.index.x + 2, y: node.index.y + 1}, node);
    node[4] = new Node({x: node.index.x - 1, y: node.index.y - 2}, node);
    node[5] = new Node({x: node.index.x - 1, y: node.index.y + 2}, node);
    node[6] = new Node({x: node.index.x + 1, y: node.index.y - 2}, node);
    node[7] = new Node({x: node.index.x + 1, y: node.index.y + 2}, node); 
}



function getMoveTree(node, count = 0) {
    if (count === 7 || node === null) {
        return null;
    }

    getMoves(node);


    count++;

    for (let i = 0; i < 8; i++) {
        if (node[i].index.x < 0 || node[i].index.x > 7) node[i] = null;
        else if (node[i].index.y < 0 || node[i].index.y > 7) node[i] = null;
        getMoveTree(node[i], count);
    }
}


function find (node, index) {
    var queue = new Queue();
    var ordered = [];

    queue.enqueue(node);

    while (!queue.isEmpty()) {
        var current = queue.dequeue();

        ordered.push(current);
        
        for (let i = 0; i < 8; i++) {
            if (current[i]) queue.enqueue(current[i]);
        }
    }

    for (let i = 0; i < ordered.length; i++) {
        if (ordered[i].index.x === index.x && ordered[i].index.y === index.y) {
            // console.log(ordered[i]);
            return ordered[i];
        }
    }
}

function traceRoute (node) {
    let current = node;
    let moves = 0;
    let nodes = [];

    while (current) {
        nodes.push(current);
        current = current.parent;
        moves++;
    }

    return nodes;
}