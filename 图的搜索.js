function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");

a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);

//深度优先搜索

function deepSerach(node,target,path){
    if(node == null) return false;
    if(path.indexOf(node) > -1) return false;
    console.log(node.value);
    path.push(node);
    var result = false;
    if(node.value == target)
        return true;
    for(var i =0;i < node.neighbor.length; i++){
        result |= deepSerach(node.neighbor[i],target,path);
    }
    return result ? true : false;
}
console.log("深度优先搜索")
console.log(deepSerach(a,"e",[]));

//广度优先搜索
function bfs(nodes,target,path){
    if(nodes == null || nodes.length == 0){
        return false;
    }
    var nexNodes = [];
    for(var i = 0; i < nodes.length; i++){
        if(path.indexOf(nodes[i]) > -1){
            continue;
        }
        console.log(nodes[i].value);
        path.push(nodes[i]);
        if(nodes[i].value == target){
            return true;
        }else{
            nexNodes = nexNodes.concat(nodes[i].neighbor);
        }
    }
    return bfs(nexNodes,target,path);
}
console.log("广度优先搜索")
console.log(bfs([a],"e",[]));