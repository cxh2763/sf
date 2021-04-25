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

//前序遍历
function pre(root){
    if(root == null)
        return;
    console.log(root.value);
    pre(root.left);
    pre(root.right);
}
console.log("前序遍历:");
pre(a);
//中序遍历
function mid(root){
    if(root == null)
        return;
    mid(root.left);
    console.log(root.value);
    mid(root.right);
}
console.log("中序遍历:");
mid(a)
//后序遍历
function after(root){
    if(root == null)
        return;
    after(root.left);
    after(root.right);
    console.log(root.value);
}
console.log("后序遍历:");
after(a)

var qian = ["a","c","f","g","b","d","e"];
var zhong = ["f","c","g","a","d","b","e"];
var hou = ["f","g","c","d","e","b","a"];

//给出前序中序还原二叉树
function f1(qian,zhong){
    if(qian == null || zhong == null || qian.length ==0 || zhong.length == 0 || qian.length != zhong.length)
        return null;
    var root = new Node(qian[0]);
    var index = zhong.indexOf(qian[0]);
    var qianleft = qian.slice(1,index+1);
    var qianright = qian.slice(index+1,qian.length);
    var zhongleft = zhong.slice(0,index);
    var zhongright = zhong.slice(index+1,zhong.length);
    root.left = f1(qianleft,zhongleft);
    root.right = f1(qianright,zhongright);
    return root;
}
console.log(f1(qian,zhong));
//给出中序后序还原二叉树
function f2(zhong,hou){
    if(hou == null || zhong == null || hou.length ==0 || zhong.length == 0 || hou.length != zhong.length)
    return null;
    var root = new Node(hou[hou.length-1]);
    var index = zhong.indexOf(hou[hou.length-1]);
    var zhongleft = zhong.slice(0,index);
    var zhongright = zhong.slice(index+1,zhong.length);
    var houleft = hou.slice(0,index);
    var houright = hou.slice(index,hou.length -1);
    root.left = f2(zhongleft,houleft);
    root.right = f2(zhongright,houright)
    return root;
}
console.log(f2(zhong,hou));