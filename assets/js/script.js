// Assignment Code
var generateBtn = document.querySelector("#generate");
var quickGenerate = document.querySelector("#quickGenerate");
var copyButton = document.querySelector("#copyButton");

function generatePassword() {
  // Array of arrays used to let the user choose which character types to include in their password
  var array = [["Lowercase?", "abcdefghijklmnopqrstuvwxyz"], ["Uppercase?", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"], 
  ["Numbers?", "0123456789"], ["Special characters?", "!\"#$%&'()*+,-./:;<=>?@_`{|}~^"]];
  
  //Do...while loop that takes an input from the user to be used as the password length. Must be an Integer
  do {
    var strLength = prompt("What is your password length? (Must be between 8 and 128 characters)");
    var length = parseInt(strLength);
    console.log(strLength);

    if (strLength === null) {
      console.log("exit");
      return;
    }

    var numbers = true;

    for (let char of strLength) {
      if (!Number.isInteger(parseInt(char))) {
        numbers = false;
      }
    }
  } while (length < 8 || length > 128 || !numbers || strLength === "");

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
  var quickCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@_`{|}~^";
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

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

function writeQuickPassword() {
  do {
    var lower = false;
    var upper = false;
    var number = false;
    var symbol = false;

    var quickPassword = generateQuickPassword();
    console.log("quickPassword: " + quickPassword);

    for (let char of quickPassword) {
      if (char.match(/[a-z]/i) != null && char == char.toLowerCase()) {
        lower = true;
        console.log('LOWER');
      }
      else if (char.match(/[a-z]/i) != null && char == char.toUpperCase()) {
        upper = true;
        console.log('UPPER');
      }
      else if (Number.isInteger(parseInt(char))) {
        number = true;
        console.log('NUMBER');
      }
      else {
        symbol = true;
        console.log('SYMBOL');
      }
    }
  } while (!lower || !upper || !number || !symbol);

  console.log("FINAL PASSWORD: " + quickPassword);

  var quickPasswordText = document.querySelector("#password");
  quickPasswordText.value = quickPassword;
}

async function copyText() {
  /* Get the text field */
  var copyText = document.querySelector("#password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  await navigator.clipboard.writeText(copyText.value)
    .then(console.log("Password copied to clipboard"));

  /* Alert the copied text */
  // alert("Copied to clipboard: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
quickGenerate.addEventListener("click", writeQuickPassword);
copyButton.addEventListener("click", copyText);

// quickGenerate.addEventListener("click", copyText);
// generateBtn.addEventListener("click", copyText);