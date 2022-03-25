// Assignment Code
var generateBtn = document.querySelector("#generate");
var quickGenerate = document.querySelector("#quickGenerate");
var copyButton = document.querySelector("#copyButton");

function generatePassword() {
  // Array of arrays used to let the user choose which character types to include in their password
  var array = [["Lowercase?", "abcdefghijklmnopqrstuvwxyz"], ["Uppercase?", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"], 
  ["Numbers?", "0123456789"], ["Special characters?", "[$&+,:;=?@#|'<>.-^*()%!]"]];
  
  //While loop that takes an input from the user to be used as the password length. Must be an Integer
  var strLength = prompt("What is your password length?");
  var length = parseInt(strLength);
  while (!Number.isInteger(length) || length < 8 || length > 128) {
      strLength = prompt("Enter a number between 8 and 128");
      length = parseInt(strLength);
  }

  //While loop that displays a series of prompts to determine what type of password to create,
  //continues until at least one character type is selected
  var characters = "";
  var type = 0;
  while (type === 0) {
    for (i = 0; i < array.length; i++) {
      var input = confirm(array[i][0]);

      if (input === true) {
        characters += array[i][1];
        type++;
        console.log(characters);
      }
    }
      //Ensures that at least one character type was chosen to create the password
      if (type === 0) {
        alert("You must add at least one character type");
      }
  }

  //Employs a random number generator to create the unique password
  var pass = constructPassword(characters, length);

  return pass;
}

function generateQuickPassword() {
  var quickCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@_`{|}~";
  var length = 16;

  var quickPass = constructPassword(quickCharacters, length);

  return quickPass;
}

function constructPassword(characters, length) {
  var password = "";
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * characters.length);
    var cha = characters.charAt(random);
    password += cha;
  }
  console.log("Password: " + password);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function writeQuickPassword() {
  var quickPassword = generateQuickPassword();
  var quickPasswordText = document.querySelector("#password");

  quickPasswordText.value = quickPassword;
}

function copyText() {
  /* Get the text field */
  var copyText = document.querySelector("#password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
quickGenerate.addEventListener("click", writeQuickPassword);
copyButton.addEventListener("click", copyText);