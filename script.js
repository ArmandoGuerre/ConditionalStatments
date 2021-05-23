var containerEle = document.body.querySelector(".container");

var num1 = prompt("Enter a number");
Number.isInteger(num1)

var op = prompt("Enter an operator: + - * /");

var num2 = prompt("Enter a second number");
Number.isInteger(num2)

var sum = (+num1 + +num2);
var sub = (num1 - num2);
var mulp = (num1 * num2);
var div = (num1 / num2);



if (op == "+") {
  containerEle.innerHTML = sum;
} else if (op == "-") {
  containerEle.innerHTML = sub;
} else if (op == "*") {
  containerEle.innerHTML = mulp;
} else if (op == "/") {
  containerEle.innerHTML = div;
} else {
  containerEle.innerHTML = "Error";
}