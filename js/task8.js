/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

// <!-- ЗАДАЧА 7 -->
//     <div>
//       <p class="taskTitle">ЗАДАЧА 7</p>
//       <div class="outerCircle">
//         <div class="innerCircle"></div>
//       </div>
//     </div>

const circle = document.querySelector(".outerCircle");
circle.addEventListener("click", handleClickElement);

function handleClickElement(event) {
  if (event.currentTarget.style.position === "absolute") {
    event.currentTarget.style.position = "static";
    window.removeEventListener("mousemove", onMouseMove);
    return;
  }
  event.currentTarget.style.position = "absolute";
  window.addEventListener("mousemove", onMouseMove);
}

function onMouseMove(event) {
  console.log(event);
  let positionX = event.pageX;
  let positionY = event.pageY;
  circle.style.top = `${positionY - 15}px`;
  circle.style.left = `${positionX - 15}px`;
}
