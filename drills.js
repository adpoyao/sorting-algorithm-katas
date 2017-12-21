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
function mergeSort(){

}

function merge(){

}


//Quick Sort + Swap
function quickSort(){

}

function partition(){

}