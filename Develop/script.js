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

//Generates random lowercase
function generateLowercase() {
  if (confirmLowercase === true) {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  return lowercase[Math.floor(Math.random() * lowercase.length)];
  } }

//Generates random uppercase
function generateUppercase() {
  if (confirmUppercase === true) {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercase[Math.floor(Math.random() * uppercase.length)];
  } }

//Generates random number between 0-9
function generateNumeric() {
  if (confirmNumeric === true) {
  var numeric = "0123456789";  
  return numeric[Math.floor(Math.random() * numeric.length)];
} }

//Generates random special character
function generateSpecial() {
  if (confirmSpecial === true) {
  var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  return special[Math.floor(Math.random() * special.length)];
} }

while (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
  alert("Invalid: at least one character type should be selected.");
  confirmLowercase = confirm("I confirm the inclusion of lowercase letters in this password.");
  confirmUppercase = confirm("I confirm the inclusion of uppercase letters in this password.");
  confirmNumeric = confirm("I confirm the inclusion of numeric values in this password.");
  confirmSpecial = confirm("I confirm the inclusion of special characters in this password."); 
}

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
