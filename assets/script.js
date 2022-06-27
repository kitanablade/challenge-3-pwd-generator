
// TODO: Create an array of all potential characters: a-z, A-Z, 0-9, special
// TODO: Create variables to store indexes of start and end for character types
// TODO: Create array to store the generated PW
// TODO: Prompt user to choose types of characters
// TODO: If user declines a character type, slice that type out of the available chars array
// TODO: Prevent user from declining all character types (maybe use a counter, if counter == 4, error msg and cancel/restart)
// TODO: Prompt user to select the length of the PW and therefore the generated array
// TODO: Prevent user from enetering anything but an integer
// TODO: Using a loop, randomly select characters from the sliced available chars array
// TODO: Insert the chars into a new array holding the PW
// TODO: Output the result to the user

// TODO: [Stretch Idea]: Find a way to use checkboxes on one prompt rather than repeated text boxes
// TODO: [Stretch Idea]: Add a copy button

let allChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                "0","1","2","3","4","5","6","7","8","9",
                "!","\"","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];



















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
