let birthYear = parseInt(prompt("Enter your birth year: "));

function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
  let result = currentYear - birthYear;
  return result;
}

if (birthYear < 1910 || birthYear > 2015) {
   alert("Year out of normal range");
} else if (birthYear > 1911 || birthYear < 2015) {
   alert(`You are ${calculateAge(birthYear)} old `);
} else {
   alert("Invalid input");
}
