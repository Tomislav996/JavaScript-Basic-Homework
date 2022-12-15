let User1stChoice = prompt("Enter 'Dog' to convert Human years to Dog years, or Enter 'Human' to convert Dog years to Human years: ")
let User2stChoice = parseInt(prompt("Enter Years: "));

function Convert(User1stChoice, User2stChoice) {
  if (User1stChoice === "Dog" || User1stChoice === "dog") {
    let result = User2stChoice * 7;
    alert(`The dog is ${result} years old`);
  }
  else if (User1stChoice === "Human" || User1stChoice === "human") {
    let result = User2stChoice / 7;
    result = result.toFixed(1);
    alert(`The human is ${result} years old`);
  }
    else {
    alert("invalid input");
   }
}

Convert(User1stChoice, User2stChoice);
