// // <!-- ЗАДАЧА 3 -->
// <div>
//   <p class="taskTitle">ЗАДАЧА 3</p>
//   <input id="passwordInput" type="text" />
//   <button id="passwordButton">Приховати</button>
// </div>;

/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const inp = document.querySelector("#passwordInput");
const but = document.querySelector("#passwordButton");

but.addEventListener("click", handlerButtonClick);

function handlerButtonClick() {
  if (inp.type === "text") {
    inp.type = "password";
    but.textContent = "Розкрити";
  } else {
    inp.type = "text";
    but.textContent = "Приховати";
  }
}
