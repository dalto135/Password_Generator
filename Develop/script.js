// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var strLength = prompt("What is your password length?");
    var length = parseInt(strLength);
  while (!Number.isInteger(length) || length < 8 || length > 128) {
      strLength = prompt("Enter a number between 8 and 128");
      length = parseInt(strLength);
  }

  //while loop that displaces a series of prompts to determine what type of password to create,
  //continues until at least one character type is selected
  var characters = "";
  var type = 0;
  while (type === 0) {
      var lowercase = prompt("Lowercase?");
      var capLowercase = lowercase.toUpperCase();
      while (capLowercase !== "YES" && capLowercase !== "NO") {
          lowercase = prompt("Must answer yes or no");
          capLowercase = lowercase.toUpperCase();
      }
      if (capLowercase === "YES") {
          characters += "abcdefghijklmnopqrstuvwxyz";
          type++;
          console.log(characters);
      }

      var uppercase = prompt("Uppercase?");
      var capUppercase = uppercase.toUpperCase();
      while (capUppercase !== "YES" && capUppercase !== "NO") {
          uppercase = prompt("Must answer yes or no");
          capUppercase = uppercase.toUpperCase();
      }
      if (capUppercase === "YES") {
          characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          type++;
          console.log(characters);
      }

        var numeric = prompt("Numbers?");
        var capNumeric = numeric.toUpperCase();
      while (capNumeric !== "YES" && capNumeric !== "NO") {
          numeric = prompt("Must answer yes or no");
          capNumeric = numeric.toUpperCase();
      }
      if (capNumeric === "YES") {
          characters += "0123456789";
          type++;
          console.log(characters);
      }

        var special = prompt("Special characters?");
        var capSpecial = special.toUpperCase();
      while (capSpecial !== "YES" && capSpecial !== "NO") {
          special = prompt("Must answer yes or no");
          capSpecial = special.toUpperCase();
      }
      if (capSpecial === "YES") {
          characters += "[$&+,:;=?@#|'<>.-^*()%!]";
          type++;
          console.log(characters);
      }
      if (type === 0) {
        prompt("You must add at least one character type");
      }
    }
  var password = "";
//Employes a random number generator to create the unique password
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
