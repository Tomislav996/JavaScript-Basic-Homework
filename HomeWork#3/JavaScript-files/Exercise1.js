let year = parseInt(prompt("Enter your year of birth: "));

switch((year - 4) % 12) {
    case 0:
      alert("Your sign is: Rat");
      break;
    case 1:
      alert("Your sign is: Ox");
      break;
    case 2:
      alert("Your sign is: Tiger");
      break;
    case 3:
      alert("Your sign is: Rabbit");
      break;
    case 4:
      alert("Your sign is: Dragon");
      break;
    case 5:
      alert("Your sign is: Snake");
      break;
    case 6:
       alert("Your sign is: Horse");
       break;
    case 7:
       alert("Your sign is: Goat");
       break;
    case 8:
        alert("Your sign is: Monkey");
        break;
    case 9:
        alert("Your sign is: Rooster");
        break;
    case 10:
        alert("Your sign is: Dog");
        break;
    case 11:
        alert("Your sign is: Pig");
        break;
    default:
        alert("Invalid input!");
        break;
}

