function are_isomorphic(graph1, graph2) {
    if (graph1[0].length != graph2[0].length){return false}
    if (graph1[1].length != graph2[1].length){return false}

    graph1 = convertToadjMatrix(graph1)

    if (same(graph1, convertToadjMatrix(graph2))){return true}

    return allPermutations(graph1, graph2,0)
}
function allPermutations(graph1, graph2, node){

    Permutation = convertToadjMatrix(graph2)


    if (same(graph1, Permutation)){return true}

    if (node > graph2[0].length){return false}

    for (let i = node; i < graph2[0].length; i++){

        swap(graph2[0], i, node)

        if(allPermutations(graph1, graph2, node+1)){return true}

        swap(graph2[0], i, node)

    }
    return false


}
function swap(x, a ,b )
{
    let temp = x[a]
    x[a] = x[b]
    x[b] = temp
}
function same(graph1, graph2){
    for (let i=0; i < graph1.length; i++){
        for (let j=0; j < graph1[i].length; j++){
            if (graph1 [i][j] != graph2[i][j]){return false}
        }
    }
    return true
}
function convertToadjMatrix(graph){
    let nodes = graph[0];
    let lines = graph[1];

    length = graph[0].length
    adjMatrix = Array.from(Array(length), ()=>Array(length).fill(0))

    for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < lines.length; j++) {
            let node = nodes[i];
            let line = lines[j];
            if (line.indexOf(node) == 0) {
                adjMatrix[i][nodes.indexOf(line[1])] = 1;
                adjMatrix[nodes.indexOf(line[1])][i] = 1;
            } else if (line.indexOf(node) == 1) {
                adjMatrix[i][nodes.indexOf(line[0])] = 1;
                adjMatrix[nodes.indexOf(line[0])][i] = 1;
            }
        }
    }
    return adjMatrix;
}
