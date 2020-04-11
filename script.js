// Character Variables
var number = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvxwyz";
var upperCase = "ABCDEFGHIJKLMONPQRSTUVXWYZ";
var specChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var finalPassword = "";

var choseLen, addNumber, addLower, addUpper, addSpcChar, password;

// Event listener tied to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// For loop generating random characters
function generatePassword(passRequirements) {
  finalPassword = "";
  for (var i = 0; i < choseLen; i++) {
    finalPassword += passRequirements[Math.floor(Math.random() * passRequirements.length)];
  }
  return finalPassword;
}

//Confirm prompts for user deciding what character types will be used
function promptUser() {
  addNumber = confirm("Click OK if you would like NUMBERS in your password, and click CANCEL if not.");
  addLower = confirm("Click OK if you would like UPPERCASE characters and click CANCEL if not.");
  addUpper = confirm("Click OK if you would like LOWERCASE characters and click CANCEL if not.");
  addSpecChar = confirm("Click OK if you would like SPECIAL characters and click CANCEL if not.");
}

// Function for generating password, 
function writePassword() {
  // Promps user to choose length of characters, if outside of defined range, alert requiring that the correct number be entered displays

  choseLen = prompt("Choose between 8 and 128 characters");
  while (choseLen < 8 || choseLen > 128) {
    choseLen = prompt("Please, choose a number between 8 and 128 characters!");
  }
  promptUser();

  //Defines the variable passRequirments
  if (addNumber || addLower || addUpper || addSpecChar) {
    document.querySelector("#password").value = "";
    var passRequirements = "";
    if (addNumber) {
      passRequirements += number;
    }
    if (addLower) {
      passRequirements += lowerCase;
    }
    if (addUpper) {
      passRequirements += upperCase;
    }
    if (addSpecChar) {
      passRequirements += specChar;
    }

    writePass(passRequirements);


  } else {
    alert("You need to pick at least one type of character");
    return;
  }
};

// Function writes password into password text box
function writePass(passRequirements) {
  var password = generatePassword(passRequirements);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

