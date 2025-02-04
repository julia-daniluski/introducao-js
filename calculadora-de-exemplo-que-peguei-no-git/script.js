// TODOS OS CRÉDITOS RESERVADOS A DONA DO CÓDIGO: @silva-larissa
let display = document.getElementById("display");

let listenerBtn = [];

//botões de operação
listenerBtn.push(document.getElementById("sum"));
listenerBtn.push(document.getElementById("subtraction"));
listenerBtn.push(document.getElementById("division"));
listenerBtn.push(document.getElementById("multiplication"));

//botões de números
listenerBtn.push(document.getElementById("num0"));
listenerBtn.push(document.getElementById("num1"));
listenerBtn.push(document.getElementById("num2"));
listenerBtn.push(document.getElementById("num3"));
listenerBtn.push(document.getElementById("num4"));
listenerBtn.push(document.getElementById("num5"));
listenerBtn.push(document.getElementById("num6"));
listenerBtn.push(document.getElementById("num7"));
listenerBtn.push(document.getElementById("num8"));
listenerBtn.push(document.getElementById("num9"));

//botões adicionais
let btnResult = document.getElementById("result");
let btnCleanDisplay = document.getElementById("cleanDisplay");
let btnDeleteDigit = document.getElementById("deleteDigit");
listenerBtn.push(document.getElementById("point"));

let pointCounter = 0;
let pointLimit = 1;

for (let i = 0; i < listenerBtn.length; i++) {
  listenerBtn[i].addEventListener("click", writeOnDisplay); 
}

btnResult.onclick = function () {
  calculateResult();
};

btnDeleteDigit.onclick = function () {
  deleteLastDigit();
};

btnCleanDisplay.onclick = function () {
  display.value = "";
  pointCounter = 0;
};

function calculateResult() {
  if (verifyOperator(display.value.substring(display.value.length - 1, display.value.length))) {
    deleteLastDigit(); //If the last digit on display is an operator, it's ignored
  }

  let calculatedValue = calculateArray(display.value); 

  if (calculatedValue || calculatedValue == "0") {
    display.value = calculatedValue;
  }
}

function deleteLastDigit() {
  if (display.value.length > 0) {
    if (display.value[display.value.length - 1] === ".") {//If the deleted character is a decimal point, it can be replaced by a new one
      pointCounter = 0;
    }
    display.value = display.value.substring(0, display.value.length - 1);
  }
}

function writeOnDisplay() {
  lastDigit = this.value;

  if (verifyOperator(lastDigit)){
    pointCounter = 0;
    if (verifyOperator(display.value.substring(display.value.length - 1, display.value.length))) { //replaces the previous operator by the new operator inputed
      deleteLastDigit();
    }
  } 
    
  if (verifyDecimalPoint(lastDigit) === true){
    pointCounter++;
    if (pointCounter > pointLimit){
      return;
    }    
  } 
  display.value += lastDigit;  
}

function verifyDecimalPoint(valorDigitado) {
  if (valorDigitado === ".") {
    return true;
  } else {
    return false;
  }
}

function verifyOperator(operatorValue) {
  switch (operatorValue) {
    case "*":
      return true;
    case "/":
      return true;
    case "+":
      return true;
    case "-":
      return true;
    default:
      return false;
  }
}

function calculateArray(exp) {
  exp = exp.toString().split("+");
  for (a = 0; a < exp.length; a++) {
    exp[a] = exp[a].split("-");
    for (b = 0; b < exp[a].length; b++) {
      exp[a][b] = exp[a][b].split("*");
      for (c = 0; c < exp[a][b].length; c++) {
        exp[a][b][c] = exp[a][b][c].split("/");
        exp[a][b][c] = divideArray(exp[a][b][c]);
      }
      exp[a][b] = multiplyArray(exp[a][b]);
    }
    exp[a] = subtractArray(exp[a]);
  }
  exp = sumArray(exp);

  return exp;
}

function multiplyArray(parameter) {
  let resultMult = 1;
  for (let x = 0; x < parameter.length; x++) {
    resultMult *= parameter[x];
  }
  return resultMult;
}

function divideArray(parameter) {
  let resultDiv = parameter[0];
  for (let x = 1; x < parameter.length; x++) {
    resultDiv /= parameter[x];
  }
  return resultDiv;
}

function subtractArray(parameter) {
  let resultSub = parameter[0];
  for (let x = 1; x < parameter.length; x++) {
    resultSub -= parameter[x];
  }
  return resultSub;
}

function sumArray(parameter) {
  let resultSum = 0;
  for (let x = 0; x < parameter.length; x++) {
    resultSum += parameter[x];
  }
  return resultSum;
}