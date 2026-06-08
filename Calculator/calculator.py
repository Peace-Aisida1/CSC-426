<!DOCTYPE html>
<html>
<head>
<title>Simple Calculator</title>
</head>
<body>

<h2>Calculator</h2>

<input id="num1" placeholder="First number">
<input id="num2" placeholder="Second number">

<br><br>

<button onclick="add()">+</button>
<button onclick="sub()">-</button>
<button onclick="mul()">*</button>
<button onclick="div()">/</button>

<h3 id="result"></h3>

<script>
function add(){
let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);
document.getElementById("result").innerText = a + b;
}

function sub(){
let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);
document.getElementById("result").innerText = a - b;
}

function mul(){
let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);
document.getElementById("result").innerText = a * b;
}

function div(){
let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);
document.getElementById("result").innerText = a / b;
}
</script>

</body>
</html>
