var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var speccialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", ",", ".", "?", "/"]

function passwordOption (){
  var length = parseInt(prompt("How long do you wnat you password to be?"),10)
  console.log (length)
  // if(Number.isNaN(length)) {
  //   alert("pleas provide password length as a number")
  //   return null
  // }
  // if (length < 8){
  //   alert("passwrod must be at least 8 characters")
  //   return null
  // }
  // if (length < 128) {
  //   alert("password needs to be less than 128 characters")
  //   return null
  // }
  var hasLower = confirm("click ok if you want lower case characters")
  var hasUpper = confirm("click ok if you want upper case characters")
  var hasNumber = confirm("click ok if you want numbers")
  var hasSpecial = confirm("click ok if you want specical characters")
  if (hasLower === false && hasUpper === false && hasNumber === false) {
  alert ("pleas select at least one character type to gerate password")
  return
  }
  var passwordSelect = {
    length: length,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNumber: hasNumber,
    hasSpecial: hasSpecial,
  }
  return passwordSelect

}

function randomSelect (array) {
  var randomEl = Math.floor(Math.random() * array.length)
  var randomI = array[randomEl]
  return randomI
}

function generatePassword (){
  var choice = passwordOption()
  var result = []
  var gchar = []
  var pchar = []
  if (choice.hasLower){
    pchar = pchar.concat(lowerCase)
    gchar.push(randomSelect(lowerCase))
  }
  if (choice.hasUpper){
    pchar = pchar.concat(upperCase)
    gchar.push(randomSelect(upperCase))
  }
  if (choice.hasNumber){
    pchar = pchar.concat(numbers)
    gchar.push(randomSelect(numbers))
  }
  if (choice.hasSpecial){
    pchar = pchar.concat(speccialChar)
    gchar.push(randomSelect(speccialChar))
  }
  for(var i = 0; i < choice.length; i++) {
    var mychar = randomSelect(pchar)
    result.push(mychar)
  }
  for(var i = 0; i < gchar.length; i++) {
    result[i] = gchar[i]
  }
  return result.join("")
  console.log ("this works")
}
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);