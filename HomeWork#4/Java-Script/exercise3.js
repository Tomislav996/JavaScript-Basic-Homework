let message = ["Hello", "there", "students", "of", "SEDC", "!"];


function printMessage(array) {
    let i = 0;
    let result = ''
    while(i < array.length) {
        result = result.concat(array[i] + " ");
        i++
    } console.log(result);
} 

printMessage(message);