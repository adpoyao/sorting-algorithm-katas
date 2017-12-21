# QUESTION 1
Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.

## STRATEGY
[ 3, 7, 5, 2] =>
[ x, x,  , x,  , x]
[ 2, 3, 5, 7]

<!-- 
[30, 62, 10, 74, 24, 40, 50] =>
[10,   ,   ,   ,   ,   , 74] -->

* Lowest: 10
* Highest: 74

1. Start with tempArray: Array(max-min+1) example: 6 slots;
2. Loop through original array and plug: tempArray[mainArray[i]-min] = 'flag';
3. Loop through tempArray and plug:
    - Condition: if tempArray[i] value = flag: newArrayPush(i+min); 
    -            if not, carry on;
4. Return newArray;

# QUESTION 2
Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).

## STRATEGY
[3, 7, 5, 2]


# QUESTION 3
Imagine that I gave you twenty books to sort in alphabetical order. How would you go about it? Can you express this as an algorithm?

## STRATEGY