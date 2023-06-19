//Prompt for number of characters 
var passwordLength = "Please choose a length of at least 8 characters and no more than 128 characters."
let generateLength = +window.prompt(passwordLength);

//At least 8 characters and no more than 128 characters acceptance criteria
while (generateLength < 8 || generateLength > 128) {
  alert("Invalid length.")
  window.prompt(passwordLength);
}

//Pop-up confirms
var confirmLowercase = confirm("I confirm the inclusion of lowercase letters in this password.");
var confirmUppercase = confirm("I confirm the inclusion of uppercase letters in this password.");
var confirmNumeric = confirm("I confirm the inclusion of numeric values in this password.");
var confirmSpecial = confirm("I confirm the inclusion of special characters in this password.");

var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var lowercase = lowercaseString.split("");
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercase = uppercaseString.split("");
var numericString = "0123456789";
var numeric = numericString.split("");
var specialString = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var special = specialString.split("");

//Generates random lowercase
function generateLowercase() {
  if (confirmLowercase === true) {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
  }
}

//Generates random uppercase
function generateUppercase() {
  if (confirmUppercase === true) {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
  }
}

//Generates random number between 0-9
function generateNumeric() {
  if (confirmNumeric === true) {
    return numeric[Math.floor(Math.random() * numeric.length)];
  }
}

//Generates random special character
function generateSpecial() {
  if (confirmSpecial === true) {
    return special[Math.floor(Math.random() * special.length)];
  }
}

while (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
  alert("Invalid: at least one character type should be selected.");
  confirmLowercase = confirm("I confirm the inclusion of lowercase letters in this password.");
  confirmUppercase = confirm("I confirm the inclusion of uppercase letters in this password.");
  confirmNumeric = confirm("I confirm the inclusion of numeric values in this password.");
  confirmSpecial = confirm("I confirm the inclusion of special characters in this password.");
}

function generatePassword() {
  let password = [];
  var includedCharacters = [];
  if (confirmLowercase === true) {
    includedCharacters = includedCharacters.concat(lowercase);
    password.push(generateLowercase());
    generateLength = generateLength - 1
  }
  if (confirmUppercase === true) {
    includedCharacters = includedCharacters.concat(uppercase);
    password.push(generateUppercase());
    generateLength = generateLength - 1
  }
  if (confirmNumeric === true) {
    includedCharacters = includedCharacters.concat(numeric);
    password.push(generateNumeric());
    generateLength = generateLength - 1
  }
  if (confirmSpecial === true) {
    includedCharacters = includedCharacters.concat(special);
    password.push(generateSpecial());
    generateLength = generateLength - 1
  }
  console.log(includedCharacters);
  for (let i = 0; i < generateLength; i++) {
    password.push(includedCharacters[Math.floor(Math.random() * includedCharacters.length)]);
  }
  return password;
}

console.log(generatePassword())
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
}
