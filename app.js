var readout = document.getElementById("readout");

var clearButton = document.getElementById("clearButton")

clearButton.onclick = clear;

var numbersArr = [];

function numbers (digit){
    if (readout.innerHTML.length <=10){
        readout.innerHTML += digit;
    }
}

function negate(){
  readout.innerHTML = -readout.innerHTML;
}

function percent(){
  readout.innerHTML = readout.innerHTML/100;
}
function clear(){
    readout.innerHTML="";
}

function multiply(){
   numbersArr.push('M');
   var firstNumber = readout.innerHTML;
   numbersArr.push(firstNumber);
   console.log(numbersArr);
   clear();
}

function divide(){
    numbersArr.push('D');
    var firstNumber = readout.innerHTML;
    numbersArr.push(firstNumber);
    console.log(numbersArr);
    clear();
 }

 function add(){
    numbersArr.push('A');
    var firstNumber = readout.innerHTML;
    numbersArr.push(firstNumber);
    console.log(numbersArr);
    clear();
 }

 function subtract(){
    numbersArr.push('S');
    var firstNumber = readout.innerHTML;
    numbersArr.push(firstNumber);
    console.log(numbersArr);
    clear();
 }


function equals(){
    numbersArr.push(readout.innerHTML);
    clear();
    if (numbersArr.indexOf('M') != -1){
    readout.innerHTML = numbersArr[1] * numbersArr[2];
    }
    if (numbersArr.indexOf('D') != -1){
        readout.innerHTML = numbersArr[1] / numbersArr[2];
    }
    if (numbersArr.indexOf('A') != -1){
        var x = numbersArr[1];
        var y = numbersArr[2]
        readout.innerHTML = Number(x) + Number(y);
    }
    if (numbersArr.indexOf('S') != -1){
        readout.innerHTML = numbersArr[1] - numbersArr[2];
    }

    numbersArr=[];
    setTimeout(clear,2000);
}