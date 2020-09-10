var button = document.querySelector('button');
var lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
                't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharactersArray = ['&amp;', '&excl;', '&num;', 
                            '&dollar;', '&percnt;', '&quest;', '&commat;', 
                            '&plus;', '&lt;', '&gt;'];  

function passwordGenerator(){
    var upperCase = confirm('Does your password need upper case letters?') 
    var specialCharacters = confirm('Does your password need special characters?');
    var numbers = confirm('Does your password need numbers?');
    var passwordLength = parseInt(prompt('How long would you like your password? (type any number between 8-128'));
    
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert('Nay');
    } else {
        alert('Yay');
    }
}

passwordGenerator();
