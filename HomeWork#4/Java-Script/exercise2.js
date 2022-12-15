let numbers = [1, 2, 3, 4, 5];


function sum(array) {
    let i = 0;
    let sumed = 0;
    
    while(i < array.length){
         sumed += array[i]
         i++;

    } alert(`The sum is ${sumed}`);
} 

sum(numbers);


let mixedArray = [1, 2, "Text", undefined, 3, true, 4];

function validateNumber(array) {
    let i = 0;

    while(i < array.length){   
        if(typeof(array[i]) !== "number") {
            console.log("error")
        } else {
            console.log(array[i]);
        } 
        i++;
    } 
}

validateNumber(mixedArray);
