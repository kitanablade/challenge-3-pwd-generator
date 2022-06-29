

// Done: Create variables to store indexes of start and end for character types
// Done: Create array to store the generated PW

// TODO: Prevent user from declining all character types (maybe use a counter, if counter == 4, error msg and cancel/restart)
// TODO: Prompt user to select the length of the PW and therefore the generated array
// TODO: Prevent user from enetering anything but an integer
// TODO: Using a loop, randomly select characters from the sliced available chars array
// TODO: Insert the chars into a new array holding the PW
// TODO: Output the result to the user

// Unable (too sophisticated for what we currently know): [Stretch Idea]: Find a way to use checkboxes on one prompt rather than repeated text boxes
// TODO: [Stretch Idea]: Add a copy button

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
let charSetsCounter = 4
let welcomeText = "Would you like to include lower case letters? Press OK to include, and Cancel to decline:";
let upperCaseText = "Would you like to include upper case letters? Press OK to include, and Cancel to decline:";
let numberText = "Would you like to include numbers? Press OK to include, and Cancel to decline:";
let specialText = "Would you like to include special characters? Press OK to include, and Cancel to decline:"
let pwLengthText = "Welcome to the Password Generator. Your password must be at least 8 and no more than 128 characters in length. Please enter the number of characters you desire:"
var generateBtn = document.querySelector("#generate");
let generatedPw = [];
var pwLength = 8;

// TODO: Prompt user to choose types of characters
// TODO: If user declines a character type, slice that type out of the available chars array
var getPWSelections = function() {
console.log(availableChars);
console.log(availableChars.length);

pwLength = window.prompt(pwLengthText);
if (!pwLength){
  return;
} else if (pwLength == null){
  reEnterLength();
}
console.log(`Desired PW length: ${pwLength}`);

if (!confirm(welcomeText)){
  availableChars.splice(lowerStart,lowerCount);
  charSetsCounter--;
  upperStart -= lowerCount; 
  digitStart -= lowerCount; 
  specialStart -= lowerCount;
console.log(availableChars);
console.log(`Upper: ${upperStart},Num: ${digitStart}, Special: ${specialStart}`)
}

if (!confirm(upperCaseText)){
  availableChars.splice(upperStart,upperCount);
  charSetsCounter--;
  digitStart -= upperCount; 
  specialStart -= upperCount;
console.log(availableChars);
console.log(`Num: ${digitStart}, Special: ${specialStart}`)
}

if (!confirm(numberText)){
  availableChars.splice(digitStart,digitCount); 
  charSetsCounter--;
  specialStart -= digitCount;
console.log(availableChars);
console.log(`Special: ${specialStart}`)
}

// TODO: Prevent user from declining all character types (maybe use a counter, if counter == 4, error msg and cancel/restart)
if (!confirm(specialText)){
  availableChars.splice(specialStart,specialCount);
console.log(availableChars);
}
}

var generatePassword = function(){
  for (i=0; i < pwLength; i++){
  var randIndex = Math.floor(Math.random() * availableChars.length);
  generatedPw[i] = availableChars[randIndex];
  console.log(generatedPw[i])}
  var password = generatedPw.join("");
  return password;
};
  
getPWSelections();
generatePassword();
console.log(`Here is the generated password: ${password}`);


// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
