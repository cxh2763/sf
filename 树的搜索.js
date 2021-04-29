function Node(value) {
    this.value = value;
    this.childs = [];
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");

a.childs.push(c);
a.childs.push(f);
a.childs.push(b);
b.childs.push(d);
b.childs.push(e);

//深度优先搜索
function deepSearch(root,target){
    if(root == null)
        return false;
    console.log(root.value);
    if(root.value == target)
        return true;
    var result = false;
    for(var i = 0; i < root.childs.length;i++){
        result |= deepSearch(root.childs[i],target);
    }
    return result ? true : false;
}
console.log("深度优先搜索")
console.log(deepSearch(a,"e"));
//广度优先搜索
function bfs(roots,target){
    if(roots == null || roots.length == 0)
        return false;
    var childs = [];
    for(var i = 0;i < roots.length; i++){
        console.log(roots[i].value);
        if(roots[i].value == target){
            return true;
        }else{
            childs = childs.concat(roots[i].childs);
        }
    }
    return bfs(childs,target);
}
console.log("广度优先搜索")
console.log(bfs([a],"e"));