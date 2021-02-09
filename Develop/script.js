// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function generatePassword() {
    var length = prompt("What is your password length?");
  while (length < 8 || length > 128) {
      length = prompt("Password must be between 8 and 128 characters in length."); 
  }

  var characters = "";

  var uppercase = prompt("Uppercase?");
  var capUppercase = uppercase.toUpperCase();
  while (capUppercase !== "YES" && capUppercase !== "NO") {
      uppercase = prompt("Must answer yes or no");
      capUppercase = uppercase.toUpperCase();
  }
  if (capUppercase === "YES") {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(characters);
  }

  var lowercase = prompt("Lowercase?");
  var capLowercase = lowercase.toUpperCase();
  while (capLowercase !== "YES" && capLowercase !== "NO") {
      lowercase = prompt("Must answer yes or no");
      capLowercase = lowercase.toUpperCase();
  }
  if (capLowercase === "YES") {
      characters += "abcdefghijklmnopqrstuvwxyz";
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
      console.log(characters);
  }

  password = "";

  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * characters.length);
    var cha = characters.charAt(random);
    password += cha;
  }
  console.log(password);
  return password;
});

// function generatePassword() {
//     var length = prompt("What is your password length?");
//   while (length < 8 || length > 128) {
//       length = prompt("Password must be between 8 and 128 characters in length."); 
//   }

//   var characters = "";

//   var uppercase = prompt("Uppercase?");
//   var capUppercase = uppercase.toUpperCase();
//   while (capUppercase !== "YES" && capUppercase !== "NO") {
//       uppercase = prompt("Must answer yes or no");
//       capUppercase = uppercase.toUpperCase();
//   }
//   if (capUppercase === "YES") {
//       characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//       console.log(characters);
//   }

//   var lowercase = prompt("Lowercase?");
//   var capLowercase = lowercase.toUpperCase();
//   while (capLowercase !== "YES" && capLowercase !== "NO") {
//       lowercase = prompt("Must answer yes or no");
//       capLowercase = lowercase.toUpperCase();
//   }
//   if (capLowercase === "YES") {
//       characters += "abcdefghijklmnopqrstuvwxyz";
//       console.log(characters);
//   }

//     var numeric = prompt("Numbers?");
//     var capNumeric = numeric.toUpperCase();
//   while (capNumeric !== "YES" && capNumeric !== "NO") {
//       numeric = prompt("Must answer yes or no");
//       capNumeric = numeric.toUpperCase();
//   }
//   if (capNumeric === "YES") {
//       characters += "0123456789";
//       console.log(characters);
//   }

//     var special = prompt("Special characters?");
//     var capSpecial = special.toUpperCase();
//   while (capSpecial !== "YES" && capSpecial !== "NO") {
//       special = prompt("Must answer yes or no");
//       capSpecial = special.toUpperCase();
//   }
//   if (capSpecial === "YES") {
//       characters += "[$&+,:;=?@#|'<>.-^*()%!]";
//       console.log(characters);
//   }

//   password = "";

//   for (var i = 0; i < length; i++) {
//     var random = Math.floor(Math.random() * characters.length);
//     var cha = characters.charAt(random);
//     password += cha;
//   }
//   console.log(password);

//   return password;
// }

// generateBtn.addEventListener("click", generatePassword());

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
