var button = document.querySelector('button');
var textArea = document.querySelector('#password-area');
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharactersArray = ['&amp;', '&excl;', '&num;', 
    '&dollar;', '&percnt;', '&quest;', '&commat;', 
    '&plus;', '&lt;', '&gt;'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var password = [];
var possibleCharacters = [];
var passwordFinal = "";
var randomNumber;


button.onclick = function(){
    buttonPress()
};

function random(x){
    randomNumber = Math.floor(Math.random() * x);
}

function buttonPress (){
    var lowerCase = confirm('Does your password need lower case letters?');
    var upperCase = confirm('Does your password need upper case letters?'); 
    var specialCharacters = confirm('Does your password need special characters?');
    var numbers = confirm('Does your password need numbers?');
    var passwordLength = parseInt(prompt('How long would you like your password? (type any number between 8-128'));
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert('Invalid selection: Please try again, making sure your length is a number between 8-128.');
    } else if(lowerCase === false && upperCase === false && specialCharacters === false && numbers === false){
        alert('Invalid selection: Please try again, making sure you click "Ok" on at least one class.')
    } else {

        if (specialCharacters === true){
            for (var i = 0; i< specialCharactersArray.length; i++){
               possibleCharacters.push(specialCharactersArray[i]); 
            }
        }
        if (numbers === true){
            for (var i = 0; i< numbersArray.length; i++){
               possibleCharacters.push(numbersArray[i]); 
            }
        }
        
        if (lowerCase === true && upperCase === false || lowerCase === true && upperCase === true){
            for (var i = 0; i< lowerCaseArray.length; i++){
                possibleCharacters.push(lowerCaseArray[i]); 
             }
        }

        if (lowerCase === false && upperCase === true){
            for (var i = 0; i< lowerCaseArray.length; i++){
                possibleCharacters.push(uppercaseArray[i]); 
             }
        }
    
        for(var i = 0; i < passwordLength; i++){
            random(possibleCharacters.length);
            password.push(possibleCharacters[randomNumber]);
            if(upperCase === true && lowerCase === true){
                random(2);
                console.log(randomNumber);
                if(randomNumber === 1 && isNaN(password[i]) && password[i].length === 1){
                    password[i] = password[i].toUpperCase();
                }
            }
        }
    
        passwordFinal = password.join('');
        textArea.innerHTML = passwordFinal;
            
    };
    upperCase = false;
    specialCharacters = false;
    numbers = false;
    upperCase = false;
    possibleCharacters = [];
    password = [];
    passwordFinal = "";
};
                

