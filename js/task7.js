/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
const buttonDown = document.querySelector("#decrease");
const buttonUp = document.querySelector("#increase");
const box = document.querySelector("#box");

buttonDown.addEventListener("click", onButtonDownClick);
buttonUp.addEventListener("click", onButtonUpClick);

let width = parseInt(getComputedStyle(box).width);
let height = parseInt(getComputedStyle(box).height);

function onButtonDownClick() {
    width -= 10;
    height -= 10;
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
};

function onButtonUpClick() {
    width += 10;
    height += 10;
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    console.log(10);
};
// console.dir(getComputedStyle(box).height);
