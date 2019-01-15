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

console.log(min([1, 2, 3, 4]));