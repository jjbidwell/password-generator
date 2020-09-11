var button = document.querySelector('button');
var textArea = document.querySelector('#password-area');
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharactersArray = ['&amp;', '&excl;', '&num;', 
    '&dollar;', '&percnt;', '&quest;', '&commat;', 
    '&plus;', '&lt;', '&gt;'];
var passwordArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
't', 'u', 'v', 'w', 'x', 'y', 'z'];
var password = [];
var passwordFinal = "";
var randomNumber;


button.onclick = function(){
    buttonPress()
};

function random(x){
    randomNumber = Math.floor(Math.random() * x);
}

function buttonPress (){

    var upperCase = confirm('Does your password need upper case letters?') 
    var specialCharacters = confirm('Does your password need special characters?');
    var numbers = confirm('Does your password need numbers?');
    var passwordLength = parseInt(prompt('How long would you like your password? (type any number between 8-128'));
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert('Invalid selection: Please try again, making sure your length is a number between 8-128.');
    } else {
        if(specialCharacters === true && numbers === true && upperCase === true){
            //Everything
            passwordGenerator(true, true, true, passwordLength);
            } else if(specialCharacters === true && numbers === true && upperCase === false){
            //Special characters and numbers
            passwordGenerator(true, true, false, passwordLength);
            } else if(specialCharacters === true && numbers === false && upperCase === true){
            //Special characters and uppercase
            passwordGenerator(true, false, true, passwordLength);
            } else if(specialCharacters === true && numbers === false && upperCase === false){
            //Special characters 
            passwordGenerator(true, false, false, passwordLength);
            } else if(specialCharacters === false && numbers === true && upperCase === false){
            //numbers
            passwordGenerator(false, true, false, passwordLength);
            } else if(specialCharacters === false && numbers === false && upperCase === true){
            //Uppercase
            passwordGenerator(false, false, true, passwordLength);
            } else if(specialCharacters === false && numbers === true && upperCase === true) {
            //Uppercase and numbers
            passwordGenerator(false, true, true, passwordLength);
            } else {
            //Everything off 
            passwordGenerator(false, false, false, passwordLength);
            }
            
    };
    upperCase = false;
    specialCharacters = false;
    numbers = false;
    passwordArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
                    't', 'u', 'v', 'w', 'x', 'y', 'z'];
    password = [];
    passwordFinal = "";
};
                

function passwordGenerator(special, numbers, upper, passLength){

    if (special === true){
        for (var i = 0; i< specialCharactersArray.length; i++){
           passwordArray.push(specialCharactersArray[i]); 
        }
    }
    if (numbers === true){
        for (var i = 0; i< specialCharactersArray.length; i++){
           passwordArray.push(numbersArray[i]); 
        }
    }

    for(var i = 0; i < passLength; i++){
        random(passwordArray.length);
        password.push(passwordArray[randomNumber]);
        if(upper === true){
            random(3);
            if(randomNumber === 1 && isNaN(password[i]) && password[i].length === 1){
                password[i] = password[i].toUpperCase();
            }
        }
    }




    passwordFinal = password.join('');

    textArea.innerHTML = passwordFinal;
}

