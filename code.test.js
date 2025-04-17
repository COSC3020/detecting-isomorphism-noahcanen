const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

test1 = 
[
    [0,1,2,3],
    [
        [1,0],
        [2,0],
        [1,3],
        [2,3]
    ]
]
test2 = 
[
    [0,1,2,3],
    [
        [2,0],
        [3,0],
        [2,1],
        [3,1]
    ]
];
test3 = 
[
    [0,1,2,3],
    [
        [0,0],
        [2,0],
        [3,0],
        [2,1],
        [3,1]
    ]
];

const pentagon = 
[
    [0,1,2,3,4],
    [
        [0,1],
        [1,2],
        [2,3],
        [3,4],
        [4,0]
    ]
];

const star = 
[
    [0,1,2,3,4],
    [
        [0,2],
        [2,4],
        [4,1],
        [1,3],
        [3,0]
    ]
];

const empty = [[],[]];
const line = [[0,1,2],[[0,1],[1,2]]];

const square = [
    [0,1,2,3],
    [
        [0,1],
        [1,2],
        [2,3],
        [3,0]
    ]
];

const hourglass = [
    [0,1,2,3],
    [
        [0,2],
        [2,3],
        [3,1],
        [1,0]
    ]
];

const pentaCross = [
    [0,1,2,3,4],
    [
        [0,1],
        [1,2],
        [2,3],
        [3,4],
        [4,2],
        [4,0]
    ]
];

const complex = [
    [0,1,2,3,4],
    [
        [0,1],
        [0,3],
        [1,2],
        [2,0],
        [2,3],
        [0,4]
    ]
];

const G = [
    [0,1,2,3,4,5,6,7],
    [
        [0,1],
        [0,3],
        [0,5],
        [1,2],
        [1,4],
        [2,3],
        [2,7],
        [3,6],
        [4,5],
        [4,7],
        [5,6],
        [6,7]
    ]
];

const H = [
    [0,1,2,3,4,5,6,7],
    [
        [0,1],
        [1,2],
        [2,3],
        [3,0],
        [4,5],
        [5,6],
        [6,7],
        [7,4],
        [6,2],
        [1,5],
        [7,3],
        [4,0]
    ]
];

assert(are_isomorphic(test1,test2) == (true));
assert(are_isomorphic(test1,test3) == (false));
assert(are_isomorphic(pentagon,star) == (true));
assert(are_isomorphic(empty,line) == (false));
assert(are_isomorphic(pentagon,line) == (false));
assert(are_isomorphic(square,hourglass) == (true));
assert(are_isomorphic(square , pentagon) == (false));
assert(are_isomorphic(pentaCross , complex) == (false));
assert(are_isomorphic(G,H) == (true));
assert(are_isomorphic(G,G) == (true));
