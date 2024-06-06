// const loc = new Node({x: 3, y: 3});

// console.log(loc);

// getMoves(loc);
// getMoveTree(loc);

// const found = find(loc, {x: 5, y: 4});
// const moves = traceRoute(found);

// console.log(moves);

function knightMoves (start, end) {
    const loc = new Node(start);

    getMoves(loc);
    getMoveTree(loc);

    const found = find(loc, end);
    const moves = traceRoute(found);

    return moves;
}

const moves = knightMoves({x: 3, y: 3}, {x: 7, y: 7});
console.log(moves);