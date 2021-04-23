var arr = [28,8,37,6,15,48,37,22,14];
//排序的本质是比较和交换
function compare(a,b){//比较之后需要得出是否要交换
    if(a > b)
        return true;
    return false;
}
function exchange(arr,a,b){//将数组中的ab位置里的值交换
    var temp;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
//冒泡排序
function bubbleSort(arr){
    var i = 0,j = 0,length = arr.length;
    for(i = 0; i < length; i++){
        for(j = 0; j < length - i - 1; j++){
            if(compare(arr[j],arr[j+1])){
                exchange(arr,j,j+1);
            }
        }
    }
}
// bubbleSort(arr);
//选择排序,内层循环每圈选出一个最大的放在后面
function selectSort(arr){
    var i = 0,j = 0,length = arr.length;
    for(i=0;i<length;i++){
        var maxIndex = 0;
        for(j=0;j<length-i;j++){
            if(compare(arr[j],arr[maxIndex])){
                maxIndex = j; 
            }
        }
        exchange(arr,maxIndex,length-1-i);
    }
}
// selectSort(arr);
// 简单快速排序
function quickSort1(arr){
    //选班长，小的站在左边，大的站在右边
    if(arr == null || arr.length == 0){
        return[]
    }
    var leader = arr[0];
    var left = [];
    var right = [];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < leader){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    left = quickSort1(left);
    right = quickSort1(right);
    left.push(leader);
    return left.concat(right);
}

// console.log(quickSort1(arr));

//标准快速排序
function quickSort(arr,begin,end){
    if(begin >= end -1) return;
    var left = begin;
    var right = end;
    do{
        do{
            left++;
        }while(left < right && arr[left] < arr[begin])
        do{
            right--;
        }while(left < right && arr[right] > arr[begin])
        if(left < right)
            exchange(arr,left,right);
    }while(left < right)
    var swapPoint = left == right ? right-1 : right;
        exchange(arr,begin,swapPoint);
    quickSort(arr,begin,swapPoint);
    quickSort(arr,swapPoint+1,end);
}
quickSort(arr,0,arr.length);
console.log(arr);
