let Array1 = [1,2,3,4,5,6,7,8,9,10];
let userInput = prompt("Enter 'odd' or 'even': ")

function FindNumber(array,type) {
    if (typeof(type) !== "string") {
        alert("Invalid input");
        return;
    }
    for(let num of array) {
        if (userInput == "even" && (num % 2 === 0))  {
            console.log(num);
        } 
        else if(userInput == "odd" && (num % 2 !== 0)) {
            console.log(num);
        }
    }
}

FindNumber(Array1,userInput);