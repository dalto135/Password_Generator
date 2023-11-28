var generate = document.querySelector("#generate");
var copyButton = document.querySelector("#copyButton");
let lightDarkButton = document.querySelector("#lightDarkButton")

let html_element = document.querySelector("html");

function toggleTheme() {
  if (html_element.getAttribute("id") === "light") {
    html_element.removeAttribute("id");
  }
  else {
    html_element.setAttribute("id", "light");
  }
}

function setTheme() {
  let date = new Date();
  let time = date.getHours();

  if (time >= 8 && time < 21) {
    toggleTheme()
  }
}

setTheme();


function constructPassword(characters, length) {
  var password = "";

  console.log("length: " + length);

  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * characters.length);
    var cha = characters[random];
    password += cha;
  }

  return password;
}

function checkLength(length) {
  if (!Number(length)) {
    return false;
  }

  if (Number(length) < 8 || Number(length) > 128) {
    return false;
  }

  return Number(length);
}

function writePassword() {
  const lowerCheck = document.querySelector("#lowerCheck");
  const upperCheck = document.querySelector("#upperCheck");
  const numberCheck = document.querySelector("#numberCheck");
  const symbolCheck = document.querySelector("#symbolCheck");

  const passwordLength = document.querySelector("#passwordLength");

  var characters = "";

  if (lowerCheck.checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCheck.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numberCheck.checked) {
    characters += "0123456789";
  }
  if (symbolCheck.checked) {
    characters += "!\"#$%&'()*+,-./:;<=>?@_`{|}~^";
  }
  console.log("characters: " + characters);

  var cleanLength = checkLength(passwordLength.value);

  if (characters != "" && cleanLength) {
    do {
      var lower = false;
      var upper = false;
      var number = false;
      var symbol = false;

      var three = false;

      var password = constructPassword(characters, cleanLength);
      console.log("password: " + password);

      for (let i = 0; i < password.length; ++i) {
        if (password[i].match(/[a-z]/i) != null) {
          if (password[i] == password[i].toLowerCase()) {
            lower = true;
            console.log('LOWER');
          }
          else {
            upper = true;
            console.log('UPPER');
          }
        }
        else if (Number.isInteger(Number(password[i]))) {
          number = true;
          console.log('NUMBER');
        }
        else {
          symbol = true;
          console.log('SYMBOL');
        }
        if (i < password.length - 2) {
          if (password[i] == password[i + 1] && password[i] == password[i + 2]) {
            three = true;
          }
        }
      }
    } while (three || lower != lowerCheck.checked || upper != upperCheck.checked || number != numberCheck.checked || symbol != symbolCheck.checked);
  
    console.log("FINAL PASSWORD: " + password);

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
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
generate.addEventListener("click", writePassword);
copyButton.addEventListener("click", copyText);
lightDarkButton.addEventListener("click", toggleTheme);
