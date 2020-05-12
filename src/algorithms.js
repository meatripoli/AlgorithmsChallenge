const algorithms={}
//Bubble Sort
algorithms.bubbleSort = function (arr){
    /*
    how do I want to store the comments and show them on the logger to the user????
    for now written as console logs
    */
    for(let i=arr.length-1; i>=0; i--){
        for(let j=0; j<=i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            };
        };
    };
    return arr;
};

//Merge Sort
algorithms.mergeSort = function (arr){
    if(arr.length<=1){
        return arr;
    };
    const arrA=arr.splice(0,Math.floor(arr.length/2));
    const arrB=arr;
    return mergeArrays(mergeSort(arrA),mergeSort(arrB));
};
function mergeArrays(left,right){
    let newArr=[]
    let a=0;
    let b=0;
    while(a<left.length && b<right.length){
        if(left[a]<right[b]){
           newArr.push(left[a]);
           a++; 
        }
        else{
            newArr.push(right[b]);
            b++;  
        }
    }
    newArr = newArr.concat(left.slice(a)).concat(right.slice(b));
    arr=newArr;
    return newArr;
}

//Quick Sort
algorithms.quickSort = function (arr,first,last){
    first=first===undefined?0:first;
    last=last===undefined?arr.length-1:last;
    //find the split point 
    if(first<last){
        let pivotIndex = partition(arr,first,last);
        //sort the two partitions
        quickSort(arr,first,pivotIndex-1);
        quickSort(arr,pivotIndex+1,last);
    };
}
function partition(arr,first,last){
    //pick the pivot
    let pivotNum=arr[first];
    //pick the upper and lower indexs
    let upper=last;
    let lower=first+1;
    //start searching for the crossing point
    let done=false;
    while(!done){
        //advance the lower index
        while(lower<=upper && arr[lower]<=pivotNum){
            lower+=1;
        }
        //advance the upper index
        while(lower<=upper && arr[upper]>=pivotNum){
            upper-=1;
        }
        //if lower and upper index cross we found the index
        if(lower>upper){
            done=true;
        }
        else{
            let temp=arr[lower];
            arr[lower]=arr[upper];
            arr[upper]=temp;
        }
    }
    //when the cross is found move the pivot value to the position where the cross happened
    let temp=arr[first];
    arr[first]=arr[upper];
    arr[upper]=temp;
    //return the index where cross happened
    return upper;
}

//search algorithms
//linear search
//we can have an unordered list
algorithms.linearSearch = function (item, arr){
    for( let i=0;i<arr.length;i++){
        if(arr[i]===item){
            return i;
        }
    }
    return 'not found';
}

//binary search
//we need to have an ordered list
algorithms.binarySearch = function (item,arr){
    //we start at the two ends of array
    let lower=0;
    let upper=arr.length-1;
    while(lower<=upper){
      //find midpoint
      let mid=Math.floor((lower+upper)/2);
      if(arr[mid]===item){
        return mid;
      }
      else if(arr[mid]<item){
        lower=mid+1;
      }
      else if(arr[mid]>item){
        upper=mid-1;
      }
    };
    if(lower>upper){
      return 'none';
    }
}

algorithms.isSorted = function (arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
        return true;
    }
}
let arr=[6,20,8,19,56,23,87,41,49,53]
//algorithms.bubbleSort(arr);
//algorithms.mergeSort(arr);
//algorithms.quickSort(arr);
console.log(arr);
// console.log(algorithms.search(87,arr));
// console.log(algorithms.search(250,arr));
// console.log(algorithms.binarySearch(87,arr));
// console.log(algorithms.binarySearch(250,arr));

module.exports = algorithms;