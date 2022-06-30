// Done: Create an array of all potential characters: a-z, A-Z, 0-9, special
let availableChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                      "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                      "0","1","2","3","4","5","6","7","8","9",
                      "!","\"","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

// Variables to mark off boundaries between different character sets in the availableChars array
let lowerStart = 0;
let lowerCount = 26;
let upperStart = 26;
let upperCount = 26;
let digitStart = 52;
let digitCount = 10;
let specialStart = 62;
let specialCount = 31;

let welcomeText =
  "Would you like to include lower case letters? Press OK to include, and Cancel to decline:";
let upperCaseText =
  "Would you like to include upper case letters? Press OK to include, and Cancel to decline:";
let numberText =
  "Would you like to include numbers? Press OK to include, and Cancel to decline:";
let specialText =
  "Would you like to include special characters? Press OK to include, and Cancel to decline:";

let pwLengthText =
  "Welcome to the Password Generator. Your password must be at least 8 and no more than 128 characters in length. Please enter the number of characters you desire:";
var generateBtn = document.querySelector("#generate");
let generatedPw = [];
var pwLength = 8;

// Done: Prompt user to select the length of the PW and therefore the generated array
var getPWSelections = function () {
  let charSetsCounter = 3;
  pwLength = window.prompt(pwLengthText);
  if (!pwLength) {
    return;
  } else if (pwLength < 8 || pwLength > 128) {
    alert("Please enter a number between 7 and 129.");
    getPWSelections();
    return;
  }

  // Prompt user to choose types of characters
  // If user declines a character type, slice that type out of the available chars array
  if (!confirm(welcomeText)) {
    availableChars.splice(lowerStart, lowerCount);
    charSetsCounter--;
    upperStart -= lowerCount;
    digitStart -= lowerCount;
    specialStart -= lowerCount;
  }

  if (!confirm(upperCaseText)) {
    availableChars.splice(upperStart, upperCount);
    charSetsCounter--;
    digitStart -= upperCount;
    specialStart -= upperCount;
  }

  if (!confirm(numberText)) {
    availableChars.splice(digitStart, digitCount);
    charSetsCounter--;
    specialStart -= digitCount;
  }

  // Prevent user from declining all character types
  if (!confirm(specialText)) {
    if (charSetsCounter == 0) {
      alert(
        "You must have at least one type of character for your password, so we'll make one with only special characters."
      );
      return;
    }
    availableChars.splice(specialStart, specialCount);
  }
};
// Done: Using a loop, randomly select characters from the sliced available chars array
// Done: Insert the chars into a new array holding the PW
var generatePassword = function () {
  for (i = 0; i < pwLength; i++) {
    var randIndex = Math.floor(Math.random() * availableChars.length);
    generatedPw[i] = availableChars[randIndex];
  }
  var passwordString = generatedPw.join("");
  return passwordString;
};

// Write password to the #password input
function writePassword() {
  getPWSelections();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
