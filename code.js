function are_isomorphic(graph1, graph2) {
    if (graph1.length != graph2.length){return false}
    v1 = Vnum(graph1)
    v2 = Vnum(graph2)
    if (v1 != v2){return false}
    if (same(graph1, graph2)){return true}
    for (let i=0; i < graph1.length; i++){
        if (isomorphic(graph1, graph2)){return true}
    }
    return false
}
function isomorphic(graph1, graph2){
    a = graph1.pop()
    graph1.unshift(a)
    for (let i=0; i < graph1.length; i++){
        a = graph1[i].pop()
        graph1[i].unshift(a)
    }
    if (same(graph1, graph2)){return true}
    return false
}

function same(graph1, graph2){
    for (let i=0; i < graph1.length; i++){
        for (let j=0; j < graph1[i].length; j++){
            if (graph1 [i][j] != graph2[i][j]){return false}
        }
    }
    return true
}

function Vnum(graph){
    sum = 0
    for (let i=0; i < graph.length; i++){
        for (let j=0; j < graph[i].length; j++){
            sum = graph[i][j] + sum
        }
    }

    return sum
}
