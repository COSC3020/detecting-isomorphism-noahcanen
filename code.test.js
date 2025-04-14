const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

g1 = [
    [0,1,1,0],
    [1,0,0,1],
    [1,0,0,1],
    [0,1,1,0]
    ];
g2 = [
    [0,0,1,1],
    [0,0,1,1],
    [1,1,0,0],
    [1,1,0,0]
    ];
g3 = [
    [1,0,1,0],
    [0,0,1,1],
    [1,1,0,0],
    [1,1,0,0]
    ];

g4 = [
    [0,1,0,0,0],
    [1,0,1,0,0],
    [0,1,0,1,0],
    [0,0,1,0,1],
    [0,0,0,1,0]
    ];
g5 = [
    [0,1,0,0,1],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [0,0,0,0,1],
    [1,0,0,1,0]
    ]
g6 = [
    [0,0,0,0,1],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [0,0,0,0,1],
    [1,0,0,1,0]
    ]

g7 = [
    [0,0,0,1,1],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [0,0,0,0,1],
    [1,0,0,1,0]
    ]
assert(are_isomorphic(g1, g2) == true)
assert(are_isomorphic(g1, g3) == false)
assert(are_isomorphic(g2, g3) == false)
assert(are_isomorphic(g2, g7) == false)
assert(are_isomorphic(g4, g5) == true)
assert(are_isomorphic(g4, g6) == false)
assert(are_isomorphic(g4, g7) == false)
assert(are_isomorphic(g4, g1) == false)
