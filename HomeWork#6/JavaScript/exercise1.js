

let input = parseInt(prompt("Enter your weight in kilograms: "));
let paragraph = document.getElementById("Paragraph");


function weightInChickens(input){
    if(typeof(input) === "number"){
        let result = input * 2;
        paragraph.innerText = `Your weight in chickens is: ${result}`;
    }
    else {
        alert(`Invalid input`);
    }
}

weightInChickens(input);



