'use strict';

//Bubble Sort
function swap(array, i, j){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array){
  let swaps = 0;
  for(let i=0; i<array.length-1; i++){
    if(array[i] > array[i+1]){
      swap(array, i, i+1);
      swaps++;
    }
  }
  if(swaps>0){
    return bubbleSort(array);
  }
  return array;
}


//Merge Sort
function mergeSort(array){
    if(array.length <= 1){
        return array
    }
    let mid = Math.floor((array.length)/2)
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length)

    left = mergeSort(left)
    right = mergeSort(right)

    return merge(left, right, array)
}

function merge(left, right, array){
    
    let leftIndex = 0 
    let rightIndex = 0 
    let outputIndex = 0
    // [1,4,3] [2,5,6]
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            array[outputIndex++] = left[leftIndex]
        }
        else {
            array[outputIndex++] = right[rightIndex]
        }

    }
    for(let i = leftIndex; i < left.length; i++){
        array[outputIndex++] = left[i];
    }
    for(leti - rightIndex; i < right.length; i++){
        array[outputIndex++] = right[i];
    }

    return array
}


//Quick Sort + Swap
function quickSort(){

}

function partition(){

}