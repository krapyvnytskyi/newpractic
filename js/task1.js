// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function discount(dataArr) {
  return dataArr.map((item) => ({
    id: Math.round(Math.random() * 1000) + Date.now(),
    name: item.name,
    price: item.price * 0.8,
  }));
}
console.log(discount(fruits));
