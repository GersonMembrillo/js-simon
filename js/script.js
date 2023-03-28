//generatore di numeri

function playgame() {
	function getRandomNumbers() {
		//creazione array dei numeri
		const numbers = [];
		//ciclo per creare i numeri
		while (numbers.length < 5) {
			let randomNumber = Math.floor(Math.random() * 100 + 1);
			//controllo se il numero esiste già
			if (!numbers.includes(randomNumber)) {
				numbers.push(randomNumber);
			}
		}
		return numbers;
	}

	function checkNumbers() {
		let inputNumber = document.querySelectorAll('input');
		const userNumber = [];
		for (let i = 0; i < inputNumber.length; i++) {
			if (!userNumber.includes(inputNumber[i].value)) {
				userNumber.push(parseInt(inputNumber[i].value));
			}
		}
		return userNumber;
	}

	function responsiveNumbers() {
		let userNumbs = checkNumbers();

		console.log(userNumbs);

		const indovinati = [];
		for (let i = 0; i < userNumbs.lenght; i++) {
			if (casualNumber.includes(userNumbs[i])) {
				indovinati.push(userNumbs[i]);
			}
		}
		console.log(indovinati);
		document.querySelector(
			'.result'
		).innerHTML = `hai indovinati i seguenti numeri: ${indovinati} - il tuo punteggio è : ${indovinati.length}`;
	}

	console.log('userNumbs: ', 'userNumbs[i]');

	const casualNumber = getRandomNumbers();
	console.log(casualNumber);

	let display = document.createElement('div');
	display.innerHTML = `${casualNumber}`;
	display.classList.add('text-primary', 'fs-3');
	document.querySelector('#numbers').appendChild(display);

	let input = document.querySelector('#userinput');

	setTimeout(() => {
		display.remove();
		input.classList.remove('d-none');
	}, 5000);

	const check = document.getElementById('validate');
	check.addEventListener('click', responsiveNumbers);
}

const play = document.getElementById('start');
play.addEventListener('click', playgame);
