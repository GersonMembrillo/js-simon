/*
// generatore dei numeri
function generateNumbers(numRandom, max) {
	const numbers = [];
	while (numbers.length < numRandom) {
		const number = getRndNumber(1, 100);
		if (!numbers.includes(number)) {
			numbers.push(number);
		}
	}
	return numbers;
}

// quantità di numeri da indovinare
const NUMBERS = 5;

// genera l'array con i numeri
const numbers = generateNumbers(NUMBERS, number);
console.log(numbers);
*/

let randomOne = Math.floor(Math.random() * 100 + 1);
document.getElementById('demo').innerHTML = randomOne;

let randomTwo = Math.floor(Math.random() * 100 + 1);
document.getElementById('demo2').innerHTML = randomTwo;

let randomThree = Math.floor(Math.random() * 100 + 1);
document.getElementById('demo3').innerHTML = randomThree;

let randomFour = Math.floor(Math.random() * 100 + 1);
document.getElementById('demo4').innerHTML = randomFour;

let randomFive = Math.floor(Math.random() * 100 + 1);
document.getElementById('demo5').innerHTML = randomFive;
