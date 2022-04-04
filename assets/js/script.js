var quickGenerate = document.querySelector("#quickGenerate");
var copyButton = document.querySelector("#copyButton");

function constructPassword(characters, length) {
  var password = "";

  console.log("length: " + length);

  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * characters.length);
    var cha = characters.charAt(random);
    password += cha;
  }

  return password;
}

function checkLength(length) {
  for (let char of length) {
    if (!Number.isInteger(parseInt(char))) {
      return false;
    }
  }

  if (parseInt(length) < 8 || parseInt(length) > 128) {
    return false;
  }

  return parseInt(length);
}

function writeQuickPassword() {
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

      var quickPassword = constructPassword(characters, cleanLength);
      console.log("password: " + quickPassword);

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
    } while (lower != lowerCheck.checked || upper != upperCheck.checked || number != numberCheck.checked || symbol != symbolCheck.checked);
  
    console.log("FINAL PASSWORD: " + quickPassword);

    var quickPasswordText = document.querySelector("#password");
    quickPasswordText.value = quickPassword;
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
quickGenerate.addEventListener("click", writeQuickPassword);
copyButton.addEventListener("click", copyText);
