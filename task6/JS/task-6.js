let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Please enter a number!");
  if (input === null) {
    break;
  } else if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    input = 0;
  }
  input = Number(input);
  numbers.push(input);
} while (input !== Infinity);
for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
alert(`Общая сумма чисел равна ${total}`);
