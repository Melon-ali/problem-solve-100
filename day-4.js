// Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array.

// Example

//1. For sequence = [ 1, 3, 2, 1], the output should be almostincreasingSequence(sequence) = false;

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

//2. For sequence = [ 1, 2, 3], the output should be almostincreasingSequence(sequence) = true;

// You can remove 3 from the array to get a strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]

function sequence(inputArray){
    for(let i = 1; i < inputArray.length ; i++){
        if(inputArray[i]<inputArray[i-1]){
            return false
        }
    }
    return true;
}

console.log(sequence([1,2,3,4,5,6,7]));
console.log(sequence([1,3,2,3,4,5,6,7]));
console.log(sequence([1,2,3,4,5,6,7,8]));