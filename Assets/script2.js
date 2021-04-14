// // Assignment Code
// // var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);


var passwordText = "";

var numbersChar = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"];

var specialChar = 
    ['@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

var lowerChar = ['a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

var upperChar = ['A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

var picknumbersChar = false;
var pickspecialChar = false;
var picklowerChar = false;
var pickupperChar = false;


function writePassword() {
    var password = prompt("Select and type a password length of 8 - 128 characters?")
    if(password < 8) { 
        
        alert("Invalid Response");
        return;
    }
    
    if(password > 128) { 
        
        alert("Invalid Response");
        return;
    }

    if(password === null) { 
        
        alert("Invalid Response");
        return;
    }
    
    if (password) {
        
        if (confirm("Click ok to add numbers to password")) {
            picknumbersChar = true
        } 

        if (confirm("Click ok to add special characters to password")) {
            pickspecialChar = true
        } 


        if (confirm("Click ok to add lower case letters to password")) {
            pickupperChar = true
        } 

        if (confirm("Click ok to add upper case letters to password")) {
            picklowerChar = true
        } 

        if (
            picknumbersChar === false && 
            pickspecialChar === false && 
            picklowerChar === false && 
            pickupperChar === false 
            ) 
            { return;
        }
}
    var generateBtn = document.querySelector("#generate");
    generateBtn += (picknumbersChar ? 
        numbersChar 
        // else
        : 
        '');
    generateBtn += (pickspecialChar ? 
        specialChar 
        : 
        '');
    generateBtn += (picklowerChar ? 
        lowerChar 
        : 
        '');
    generateBtn += (pickupperChar ? 
        upperChar 
        : 
        '');

    passwordText = generatePassword(password, generateBtn);

    document.querySelector("#password").innerHTML = passwordText;
    passwordText.value = password;
}
function generatePassword(length, generateBtn) {
    var passwordText = '';
    for (var i = 0; i < length; ++i) {
        passwordText += generateBtn.charAt(Math.floor(Math.random() * generateBtn.length));
    }
    return passwordText;
    console.log(passwordText)

}

generateBtn.addEventListener("click", generateBtn);