//Задача 2

// Завдання 2 Після натискання кнопки "SWAP ME" здійснюється обмін вмістом
//     між двома інпутами. Ви можете натиснути на неї кілька разів або вручну
//     змінити вміст інпутів.

const buttonSwap = document.querySelector("#swapButton");
const inputLeft = document.querySelector("#leftSwapInput");
const inputRight = document.querySelector("#rightSwapInput");
buttonSwap.addEventListener("click", onButtonClick);
function onButtonClick() {
    const inputLeftTemp = inputLeft.value;
    const inputRightTemp = inputRight.value;
    inputLeft.value = inputRightTemp;
    inputRight.value = inputLeftTemp;

   
}
console.dir(buttonSwap);