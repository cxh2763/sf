/*
    二叉树的单旋操作
    某一节点不平衡
    如果左边浅，右边深，进行左单旋
    旋转节点：不平衡的节点为旋转节点
    新根：旋转之后称为根节点的节点
    变化分支：父级节点发生变化的那个分支
    不变分支：父级节点不变的那个分支

    左单旋时：
    旋转节点：当前不平衡的节点
    新根：右子树的根节点
    变化分支：旋转节点的右子树的左子树
    不变分枝：旋转节点右子树的右子树

    右单旋时：
    旋转节点：当前不平衡的节点
    新根：左子树的根节点
    变化分支：旋转节点左子树的右子树
    不变分子：旋转节点左子树的左子树
*/

function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

var node2 = new Node("2");
var node5 = new Node("5");
var node3 = new Node("3");
var node6 = new Node("6");

node2.right = node5;
node5.left = node3;
node5.right = node6;

function getDeep(root){
    if(root == null)
        return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep,rightDeep) + 1;
}
function isBalance(root){
    if(root == null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) > 1){
        return false;
    }else {
        return isBalance(root.left) && isBalance(root.right);
    }
}
console.log(isBalance(node2));

function leftRotate(root){
    /*
        找到新根 旧根的右孩子
        找到变化分支  新根的左孩子
        把变化分支设置为旧根的右孩子
        把旧根设置为新根的左孩子
        返回新的根节点
    */
   var newRoot = root.right;
   var changeTree = newRoot.left;
   root.right = changeTree;
   newRoot.left = root;
   return newRoot;
}
function rightRotate(root){
    /*  
        找到新根 旧根的左孩子
        找到变化分子  新根的右孩子
        把变化分支设置为旧根的左孩子
        把旧根设置为新根的右孩子
        返回新的根节点
    */
   var newRoot = root.left;
   var changeTree = newRoot.right;
   root.left = changeTree;
   newRoot.right = root;
   return newRoot;
}
function change(root){//返回平衡之后的根节点
    if(isBalance(root))
        return root;
    if(root.left != null){
        root.left = change(root.left);
    }
    if(root.right != null){
        root.right = change(root.right);
    }
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if(Math.abs(leftDeep - rightDeep) < 2){
        return true;
    }else if(leftDeep > rightDeep){
        //左边深需要右旋
        return rightRotate(root);
    }else{
        //右边深需要左旋
        return leftRotate(root);
    }
}

var newRoot = change(node2);
console.log(isBalance(newRoot));
console.log(newRoot);