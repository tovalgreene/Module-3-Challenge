//Pop-up confirms
var confirmLowercase = confirm("I confirm the inclusion of lowercase letters in this password.");
var confirmUppercase = confirm("I confirm the inclusion of uppercase letters in this password.");
var confirmNumeric = confirm("I confirm the inclusion of numeric values in this password.");
var confirmNumeric = confirm("I confirm the inclusion of special characters in this password."); 

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
  if (confirmNumeric === true) {
  var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  return special[Math.floor(Math.random() * special.length)];
} }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
