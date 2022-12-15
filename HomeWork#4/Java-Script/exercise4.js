let numbers = [10, 30,  5, 1, "Text", NaN, undefined, 45,];

function findLargestValue(inputArray){

    let min = Infinity;
    let max = -Infinity;

    for(let counter = 0; counter < inputArray.length; counter++){
        if ( inputArray[counter] < min) {
            min = inputArray[counter];
        }

        else if(inputArray[counter] > max){
            max = inputArray[counter];
            
        }
        else if(inputArray[counter] !== "number") {
           continue;
        }
        
    }
     let sumed = max + min;
     console.log("The max value is: "+max);
     console.log("the min value is: "+min);  
     console.log("the sum is: "+sumed);

}


findLargestValue(numbers);