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
const generatePasswordEl = document.getElementById("generate-password-el")
const notificationEl = document.getElementById("notification-el")
const copyOne = document.getElementById("copy-one")
const copyTwo = document.getElementById("copy-two")

function generatePassword(charSet){
	if (length.value === "") {
		indexLength = 15
	}
	else {
		indexLength = length.value
	}

	let password = ""
	for (let i = 0; i < indexLength; i++){
		password += charSet[Math.floor(Math.random() * charSet.length)]
	}
	return password
}

generatePasswordEl.addEventListener("click", function(){
	if ((length.value >= 12 && length.value <= 30) || length.value === ""){
		notificationEl.innerHTML=""
		if (numbersEl.checked && symbolsEl.checked === false) {
			firstPassword.textContent = generatePassword(alphanumeral)
			secondPassword.textContent = generatePassword(alphanumeral)
		}
		else if (numbersEl.checked && symbolsEl.checked) {
			firstPassword.textContent = generatePassword(characters)
			secondPassword.textContent = generatePassword(characters)
		}
		else if (symbolsEl.checked && numbersEl.checked === false) {
			firstPassword.textContent = generatePassword(alphaSymbols)
			secondPassword.textContent = generatePassword(alphaSymbols)
		}else {
			firstPassword.textContent = generatePassword(alphabet)
			secondPassword.textContent = generatePassword(alphabet)
		}
	} else {
		notificationEl.innerHTML=`Length can only be between <strong>12</strong> to <strong>30</strong>`
		firstPassword.textContent = ""
		secondPassword.textContent = ""
	}
})

copyOne.addEventListener("click", function(){
	navigator.clipboard.writeText(firstPassword.textContent);
})
copyTwo.addEventListener("click", function(){
	navigator.clipboard.writeText(secondPassword.textContent);
})
