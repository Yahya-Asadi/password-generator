const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const alphanumeral = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const alphaSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const firstPassword = document.getElementById("first-password")
const secondPassword = document.getElementById("second-password")
const numbersEl = document.getElementById("numbers-el")
const symbolsEl = document.getElementById("symbols-el")
const length = document.getElementById("length")
let indexLength = 0

function start(){
	if (numbersEl.checked && symbolsEl.checked === false) {
		firstPassword.textContent = generatePasswordAlphanumeral()
		secondPassword.textContent = generatePasswordAlphanumeral()
	}
	else if (numbersEl.checked && symbolsEl.checked) {
		firstPassword.textContent = generatePasswordAll()
		secondPassword.textContent = generatePasswordAll()
	}
	else if (symbolsEl.checked && numbersEl.checked === false) {
		firstPassword.textContent = generatePasswordAlphaSymbols()
		secondPassword.textContent = generatePasswordAlphaSymbols()
	}else {
		firstPassword.textContent = generatePasswordAlphabet()
		secondPassword.textContent = generatePasswordAlphabet()
	}
}

function generatePasswordAll() {
	if (length.value === "") {
		indexLength = 15
	}
	else {
		indexLength = length.value
	}

	let password = ""
	for (let i = 0; i < indexLength; i++){
		password += characters[Math.floor(Math.random() * characters.length)]
	}
	return password
}

function generatePasswordAlphanumeral() {
	if (length.value === "") {
		indexLength = 15
	}
	else {
		indexLength = length.value
	}

	let password = ""
	for (let i = 0; i < indexLength; i++){
		password += alphanumeral[Math.floor(Math.random() * alphanumeral.length)]
	}
	return password
}

function generatePasswordAlphabet() {
	if (length.value === "") {
		indexLength = 15
	}
	else {
		indexLength = length.value
	}

	let password = ""
	for (let i = 0; i < indexLength; i++){
		password += alphabet[Math.floor(Math.random() * alphabet.length)]
	}
	return password
}

function generatePasswordAlphaSymbols() {
	if (length.value === "") {
		indexLength = 15
	}
	else {
		indexLength = length.value
	}

	let password = ""
	for (let i = 0; i < indexLength; i++){
		password += alphaSymbols[Math.floor(Math.random() * alphaSymbols.length)]
	}
	return password
}

function copyOne(){
	navigator.clipboard.writeText(firstPassword.textContent);
}
function copyTwo(){
	navigator.clipboard.writeText(secondPassword.textContent);
}
