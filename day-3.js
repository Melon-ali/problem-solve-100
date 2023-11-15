//Give a rectangular matrix of characters, add a border of asterisks(*) to it. 

// Example

// For 

// picture = [“abc”, “ded”]

// The output should be

// addBorder(picture) = [“*****”, “*abc*”, “*ded*”, “*****”]


// Hints

// concat()
// unshift()
// push()

function addBorder(pictures){
    let wall ="*".repeat(pictures[0].length + 2)
    pictures.unshift(wall)
    pictures.push(wall)
    for(let i = 1; i<pictures.length -1; i++){
        pictures[i]="*".concat(pictures[i], "*")
    }
    return pictures;
}
console.log(addBorder(["abc", "ded"]));