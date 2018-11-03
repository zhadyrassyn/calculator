function getResult() {
  return document.getElementById("js--result");
}
var numbers = document.getElementsByClassName("number");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick = function(event) {
    var number = event.target.innerText;
    document.getElementById("js--result").innerText += number;
  }
}

document.getElementById("js--clearAll").onclick = function(event) {
  document.getElementById("js--result").innerText = "";
}

document.getElementById("js--clearOne").onclick = function(event) {
  var text = getResult().innerText;
  text = text.substring(0, text.length - 1);
  getResult().innerText = text;
}

var operations = document.getElementsByClassName("operation");
var a = 0;
var sign = "";
for (var i = 0; i < operations.length; i++) {
  operations[i].onclick = function(event) {
    var text = event.target.innerText;
    sign = text;
    a = getResult().innerText;


    document.getElementById("numberA").innerText = a;
    document.getElementById("sign").innerText = sign;

    getResult().innerText = "";
  }
}

document.getElementById("js--equal").onclick = function(event) {
  var b = getResult().innerText;
  var result = 0;
  if (sign == "+") {
    result = parseFloat(a) + parseFloat(b);
  } else if (sign == "-") {
    result = parseFloat(a) - parseFloat(b);
  } else if (sign == "*") {
    result = parseFloat(a) * parseFloat(b);
  } else if (sign == "/") {
    result = parseFloat(a) / parseFloat(b);
  }

  document.getElementById("numberA").innerText = "";
  document.getElementById("sign").innerText = "";

  getResult().innerText = result;
}