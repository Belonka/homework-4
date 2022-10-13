//number1

function getSum(a, b){
    return a + b;
     
}
const result = getSum(3,4);
console.log('result', result);

//var2
const sum = (a, b) => a+b;

const res1 = sum(3, 2)
console.log('res1', res1);

//number2


const userName = prompt('Whats your name?');
const userAge = prompt('How old are you?');
function userMessage(){
    
}if (userAge > 30){
    alert('Hello' + ' ' + userName);
}else if (userAge < 30){
    alert ('Hi' + ' ' + userName);
}

userMessage()

//number3

function exponentiation(number, pow = 2){
    return number**2

}
const resultPow = exponentiation(5);

const resultPow2 = exponentiation(2, 2);
