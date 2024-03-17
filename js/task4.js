// <!-- ЗАДАЧА 1 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 1</p>
//       <button id="alertButton">SHOW ME</button>
//       <input id="alertInput" type="text" />
//     </div>
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const button = document.querySelector("#alertButton");
const inp = document.querySelector("#alertInput");
button.addEventListener("click", handleClickButton);

function handleClickButton() {
  console.log(inp.value);
}
