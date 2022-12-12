let = withdraw = parseInt(prompt("Enter your Withdrawal amount: "));

function ATM (withdraw,total = 1000 ) {
  if ( withdraw > total) {
    alert("Not enough money");
  }
  else if(withdraw <= total) {
    let moneyLeft = total - withdraw;
    alert(`You have withdrawn ${withdraw}, and your balance is now ${moneyLeft}`);
  }
  else {
    alert("invalid input");
  }
}

ATM(withdraw);