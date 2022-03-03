var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var number1 = './images/dice'+randomNumber1+'.png';
var number2 = './images/dice'+randomNumber2+'.png';
document.querySelector('.img1').setAttribute('src',number1);
document.querySelector('.img2').setAttribute('src',number2);
// console.log(number);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = 'Player 1 wins!';
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').textContent = 'Player 2 wins!';
} else {
    document.querySelector('h1').textContent = 'Draw!';
}

