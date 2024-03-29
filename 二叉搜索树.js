var arr = []
for(var i = 0; i < 10000; i++){
    arr[i] = Math.floor(Math.random()*10000);
}
function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function addNode(root,num){
    if(root == null || root.length == 0)
        return;
    if(root.value == num) 
        return;
    if(root.value < num){//新增节点比根节点大，放在右边
        if(root.right == null){
            root.right = new Node(num);
        }else{
            addNode(root.right,num);
        }
    }else if(root.value > num){//新增节点比根节点小，放在左边
        if(root.left == null){
            root.left = new Node(num);
        }else{
            addNode(root.left,num);
        }
    }
}

function buildSearchTree(arr){
    if(arr == null || arr.length == 0 ){
        return;
    }
    var root = new Node(arr[0]);
    for(var i = 0;i < arr.length;i++){
        addNode(root,arr[i]);
    }
    return root;
}


//分别用二叉搜索树和数组对比查询次数
var searchTree = buildSearchTree(arr);
var num = 0;
function searchByTree(root,target){
    num++; 
    if(root == null || root.length == 0)
        return false;
    if(root.value == target)
        return true;
    if(root.value > target){
        return searchByTree(root.left,target);
    }else{
        return searchByTree(root.right,target);
    }
}
console.log("用二叉排序树查找结果和次数")
console.log(searchByTree(searchTree,1000))
console.log(num);

console.log("用数组查找结果和次数")
num = 0;
function search(arr,target){
    for(var i =0;i < arr.length;i++){
        num++;
        if(arr[i] == target){
            return true;
        }
    }
    return false;
}
console.log(search(arr,1000));
console.log(num);