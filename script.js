// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of Characters
var symbolChar = ["!", "?", "@", "#", "$", "%", "&", "*", "<", ">", "+"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var allChar = [symbolChar , numberChar, upperChar, lowerChar];
var randomPassword = [];
var finalPassword = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = parseInt(prompt("What is the length of the password? (it must be at least 8 characters long and no more than 128)"));
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("please choose a valid number"); 
    return 
  }
  var lowercaseConfirm = confirm("Do you want to add a lowercase letter?");
  var uppercaseConfirm = confirm("Do you want to add a uppercase letter?");
  var numberConfirm = confirm("Do you want to add a number?");
  var symbolConfirm = confirm("Do you want to add a symbol?"); 

  console.log(lowercaseConfirm);
  if (lowercaseConfirm === true || uppercaseConfirm === true || numberConfirm === true || symbolConfirm === true) {
    console.log(true);
    if (lowercaseConfirm === true) {
      for (var i=0; i < lowerChar.length; i++) {
        randomPassword.push(lowerChar[i]);
        console.log(randomPassword);
      }
    }
    if (uppercaseConfirm === true) {
      for (var i=0; i < upperChar.length; i++) {
        randomPassword.push(upperChar[i]);
        console.log(randomPassword);
      }
    }
    if (numberConfirm === true) {
      for (var i=0; i < numberChar.length; i++) {
        randomPassword.push(numberChar[i]);
        console.log(randomPassword);
      }
    }
    if (symbolConfirm === true) {
      for (var i=0; i < symbolChar.length; i++) {
        randomPassword.push(symbolChar[i]);
        console.log(randomPassword);
      }
    }
  }
  else {
    alert("you must choose at least one option.");
    return
  }

  for (var i=0; i < passwordLength; i++) {
      var num = Math.floor(Math.random() * randomPassword.length) + 1;
      finalPassword.push(randomPassword[num]);
  }
  console.log(finalPassword);

  var result = finalPassword.join("");
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);