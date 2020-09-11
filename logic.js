// var button = document.querySelector('button');
// var textArea = document.querySelector('#password-area');
 
// var lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
//                     'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
//                     't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var specialCharactersArray = ['&amp;', '&excl;', '&num;', 
//     '&dollar;', '&percnt;', '&quest;', '&commat;', 
//     '&plus;', '&lt;', '&gt;'];
// var passwordArray = [];
// var password = '';



// // var currentArray; 
// // var array;
// // var arrayIndex;


// // function arrayNumber(y){
// //     array = Math.floor(Math.random() * y);
// // };

// // // function randomCaps(){
// // //     for (i = 0; i < password.length; i++){
// // //         capsNumber = Math.floor(Math.random() * 2);
// // //         if (capsNumber === 0){
// // //             console.log(password[i]);
// // //             //password[i] = password[i].toUpperCase();
// // //         }
// // //     }
// // // }

// function variableSelector(){
//     var upperCase = confirm('Does your password need upper case letters?') 
//     var specialCharacters = confirm('Does your password need special characters?');
//     var numbers = confirm('Does your password need numbers?');
//     var passwordLength = parseInt(prompt('How long would you like your password? (type any number between 8-128'));
    
//     if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
//         alert('Invalid selection: Please try again, making sure your length is a number between 8-128.');
//     } else {
//         //Everything on
//         if(upperCase === true && specialCharacters === true && numbers ===true){
//             for (j=0; j < passwordLength; j++){
//                 arrayNumber(10);
//                 if(array >= 0 && array <= 3){
//                     currentArray = lettersArray;
//                     arrayIndex = 25;
//                     arrayNumber(25)
//                 } else if(array >= 4 && array <= 7){
//                     currentArray = numbersArray;
//                     arrayNumber(9)
//                 } else if(array > 8){
//                     currentArray = specialCharactersArray;
//                     arrayNumber(9)
//                 } 

                
//                 password += currentArray[array];
//             }
//             //randomCaps();
//             textArea.innerHTML = password;
//         } else if(upperCase === true && numbers === true){
//             // Uppercase & numbers
//             capsNumbers = true
//         } else if(numbers === true && specialCharacters === true){
//             //Uppercase & special
//             capsSpecial = true
//         } else if(specialCharacters === true && numbers === true){
//             //Special & numbers
//             specialNumbers = true
//         } else if(numbers === true){
//             //Only numbers
//             justNumbers = true
//         } else if(upperCase === true){
//             //Only uppercase
//             justCaps = true
//         } else if(specialCharacters === true){
//             //Only special
//             justSpecial = true
//         } else {
//             //Everything off
//             everythingOff = true
//         }
//     };
// }

// variableSelector();


// // function passwordGenerator(){
// //     for (i=0; i < passwordLength; i++){

// //     }
// // };


var button = document.querySelector('button');
var textArea = document.querySelector('#password-area');
//var lettersArray;
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharactersArray = ['&amp;', '&excl;', '&num;', 
    '&dollar;', '&percnt;', '&quest;', '&commat;', 
    '&plus;', '&lt;', '&gt;'];
var passwordArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
't', 'u', 'v', 'w', 'x', 'y', 'z'];
var password = '';




function buttonPress (){
    var upperCase = confirm('Does your password need upper case letters?') 
    var specialCharacters = confirm('Does your password need special characters?');
    var numbers = confirm('Does your password need numbers?');
    var passwordLength = parseInt(prompt('How long would you like your password? (type any number between 8-128'));
    
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert('Invalid selection: Please try again, making sure your length is a number between 8-128.');
    } else {

    } 

                
};

passwordGenerator(true, true);;


function passwordGenerator (special, numbers){

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
console.log(passwordArray);
}