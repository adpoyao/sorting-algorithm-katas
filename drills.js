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
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i=leftIndex; i<left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i=rightIndex; i<right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

// const number = [2,4,1,3,8,5]
// const books = ["To Kill a Mockingbird", 
// "Pride and Prejudice", 
// "The Diary of Anne Frank", 
// "1984",]
// "Harry Potter and the Sorcerer's Stone",
// "The Lord of the Rings",
// "The Great Gatsby",
// "Charlotte's Web",
// "The Hobbit",
// "Little Women",
// "Fahrenheit 451",
// "Jane Eyre",
// "Animal Farm",
// "Gone with the Wind",
// "The Catcher in the Rye",
// "The Book Thief",
// "The Adventures of Huckleberry Finn",
// "The Hunger Games",
// "The Help",
// "The Lion, the Witch, and the Wadrobe"]

// console.log(mergeSort(number))


//Quick Sort + Swap
// [1, 2, 3, 7, 4]; //length: 5
function quickSort(array, start=0, end=array.length-1){
  //base case
  if(start >= end){
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle+1, end);
  return array;
}

function partition(array, start, end){
  let pivot = array[end];
  let j = start;
  for(let i=start; i < end; i++){
    if(array[i] <= pivot){
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end, j);
  return j;
}

//EXERCISE 1

function sortWithMinMax(array, max, min){
  const tempArray = Array(max - min+1);
  const newArray = [];
  for(let i=0; i < array.length; i++){
    tempArray[array[i]-min] = 'x';
  }
  for(let i=0; i < tempArray.length; i++){
    if(tempArray[i] === 'x'){
      newArray.push(i+min);
    }
  }
  return newArray;
}

const test1= [ 3, 7, 5, 2];
const test2 = [-1, 2, 6, 4, 8];

// console.log(sortWithMinMax(test1, 7, 2));
// console.log(sortWithMinMax(test2, 8, -1));

//EXERCISE 2

let arr = [3, 7, 5, 2]

function shuffleArray(array){
    let temp;
    for(let i = 0; i < array.length; i++){
        let randomIdx = Math.floor((Math.random() * array.length - 1) + 1)
        console.log(randomIdx, 'randomIdx')
         temp = array[i];
         array[i] = array[randomIdx]
         array[randomIdx] = temp         
    }
    return array
}

// console.log(shuffleArray(arr));

function swap(array, i, j) {
    console.log(array, 'array', i, 'i', j, 'j')
    const tmp = array[i];
    console.log(tmp, 'tmp')
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i=0; i<array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};


// console.log(bubbleSort(books))

const books = [ 'To Kill a Mockingbird','Pride and Prejudice','The Diary of Anne Frank',
'1984' ] 
 
const numbers = ['bob', 'adam', 'doug', 'cara']

function sorter(array){
    let tempArr = [];
    for(let i = 0; i < array.length; i++){
        console.log(i, 'i')
        for(let j = 0; j<tempArr.length && tempArr[j] <= array[i]; j++){
            console.log(j, 'j')
            tempArr.splice([j], 0, array[i])
        }
    }
    return tempArr
}

console.log(sorter(numbers))