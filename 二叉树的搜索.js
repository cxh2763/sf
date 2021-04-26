function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
var a = new Node("a")
var b = new Node("b")
var c = new Node("c")
var d = new Node("d")
var e = new Node("e")
var f = new Node("f")
var g = new Node("g")

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;


//深度优先搜索：更适合探索未知
//对于二叉树，深度优先搜索和前序遍历的顺序是一样的
function deepSearch(root,target){
    if(root == null) return false;
    if(root.value == target) return true;
    var left = deepSearch(root.left,target);
    var right = deepSearch(root.right,target);
    return left || right;
}
console.log(deepSearch(a,"d"));
//广度优先搜索：更适合探索局域
function breadthSearch(rootList,target){
    if(rootList == null || rootList.length == 0)
        return false;
    var childrenList = [];
    for(var i = 0; i < rootList.length; i++){
        if(rootList[i] != null){
            console.log(rootList[i].value);
            if(rootList[i].value == target){
                return true;
            }
            else{
                childrenList.push(rootList[i].left);
                childrenList.push(rootList[i].right);
            }
        }
    }
    return breadthSearch(childrenList,target);
}
var rootList = [a];
console.log(breadthSearch(rootList,"ff"));