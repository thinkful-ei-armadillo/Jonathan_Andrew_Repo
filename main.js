function max(numbers){
    let i = 0;
    let currentLargest = 0;
    if (numbers.length == 0){
        return undefined;
    } 
    else {
    while (i < numbers.length){
        if (numbers[i] > currentLargest){
            currentLargest = numbers[i];
        i++;
        }  
    }
}
    return currentLargest;
}

function min(numbers){
    let i = 0;
    let currentSmallest = numbers[0];
    if (numbers.length == 0){
        return undefined;
    } else{
    
        while (i < numbers.length){
            if (currentSmallest > numbers[i]){
                currentSmallest = numbers[i];  
            }
            i++;
        }
    }
    return currentSmallest;
}

let array = [1, 2, 3, 4, 5];
function computeTheAverage (arr){
    let sum = 0;
    arr.forEach(function(element){
        sum += element; 
    });
   return sum / array.length;
}
console.log(computeTheAverage(array));

function repeat(fn, n) {
    for(let i = 0; i < n; i++) {
        fn();
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

