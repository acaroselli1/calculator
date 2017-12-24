var readout = document.getElementById("readout");

var allClearButton = document.getElementById("allClearButton")
var clearEntryButton = document.getElementById("clearEntryButton")

allClearButton.onclick = allClear;
clearEntryButton.onclick = clearEntry;

var displayedNum = [];
var runningTotal = []
var count = 0;

function numbers(digit) {
    if (readout.innerHTML.length <= 10) {
        // readout.innerHTML += digit;
        displayedNum.push(digit);
        readout.innerHTML = displayedNum.join('');
    }
}

function negate() {
    readout.innerHTML = -readout.innerHTML;
}

function percent() {
    readout.innerHTML = readout.innerHTML / 100;
}
function allClear() {
    runningTotal = [];
    displayedNum = [];
    readout.innerHTML = '';
    count = 0;
}

function clearEntry() {
    displayedNum = [];
    readout.innerHTML = '';
}
function calculate(operand) {
    count++;
    if (count == 1) {
        runningTotal.push(readout.innerHTML);
        displayedNum = [];
        runningTotal.push(operand);
        console.log(runningTotal);
    } else if (count > 1) {
        runningTotal.push(readout.innerHTML);
        displayedNum = [];
        var banana = eval(runningTotal.join(''));
        console.log(banana);
        if (banana.toString().length >= 10) {
            readout.innerHTML = eval(runningTotal.join('')).toExponential(3);
        } else if (banana.toString().length < 10) {
            readout.innerHTML = banana;
        }
        runningTotal.push(operand);
        console.log(runningTotal);
    }
}

function equals() {
    runningTotal.push(readout.innerHTML);
    readout.innerHTML = eval(runningTotal.join(''));
    runningTotal = [];
    displayedNum = [];
}
/*
function addSubMultDiv(operation) {
    count++;
    if(runningTotal.indexOf(operation) == -1){
        runningTotal.unshift(operation);
    }
    runningTotal.push(readout.innerHTML);
    console.log('Pushed operation and pushed first num',runningTotal);
    displayedNum = [];
    if (count >= 2 && operation == 'M') {
        runningTotal.shift();
        runningTotal = runningTotal.reduce(function(a,b){return a*b});
        readout.innerHTML = [runningTotal];
        console.log('Multiplication runningTotal',[runningTotal])
    } /*else if (count >2 && operation =='M'){
        runningTotal = 
    }*//*
    if (count > 1 && operation == 'S') {
        console.log('Subtraction runningTotal1',runningTotal)
        readout.innerHTML = runningTotal[1];
        console.log('Subtraction runningTotal2',runningTotal)
    }
    if (count > 1 && operation == 'A') {
        console.log('Addition runningTotal1',runningTotal)
        runningTotal = [Number(runningTotal[1]) + Number(runningTotal[2])];
        readout.innerHTML = runningTotal;
        console.log('Addition runningTotal2',runningTotal)
    }
    if (count > 1 && operation == 'D') {
        console.log('Division runningTotal1',runningTotal)
        runningTotal = [runningTotal[1] / runningTotal[2]];
        readout.innerHTML = runningTotal;
        console.log('Division runningTotal2',runningTotal)
    }
   
}

*/

/*
function multiply() {
    count++;
    if (runningTotal.indexOf('M') == -1){
        runningTotal.unshift('M');}
    runningTotal.push(readout.innerHTML);
    console.log(runningTotal);
    displayedNum = [];
    if (count > 1 && runningTotal[0]=='M') {
        runningTotal = [runningTotal[1] * runningTotal[2]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    }
    if (count > 1 && runningTotal[1]=='A') {
        runningTotal = [Number(runningTotal[2]) + Number(runningTotal[3])];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    }
    if (count > 1 && runningTotal[1]=='S') {
        runningTotal = [runningTotal[2] - runningTotal[3]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    } 
    if (count > 1 && runningTotal[1]=='D') {
        runningTotal = [runningTotal[2] / runningTotal[3]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    } 
   
}
function divide() {
    count++;
    if (runningTotal.indexOf('D') == -1){
        runningTotal.unshift('D');}
    runningTotal.push(readout.innerHTML);
    console.log(runningTotal);
    displayedNum = [];
    if (count > 1 && runningTotal[1]=='M') {
        runningTotal = [runningTotal[2] * runningTotal[3]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    }
    if (count > 1 && runningTotal[1]=='A') {
        runningTotal = [Number(runningTotal[2]) + Number(runningTotal[3])];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    }
    if (count > 1 && runningTotal[1]=='S') {
        runningTotal = [runningTotal[2] - runningTotal[3]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    } 
    if (count > 1 && runningTotal[0]=='D') {
        runningTotal = [runningTotal[1] / runningTotal[2]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    } 
    
}
function add() {
    count++;
    if (runningTotal.indexOf('A') == -1){
        runningTotal.unshift('A');}
    runningTotal.push(readout.innerHTML);
    console.log(runningTotal);
    displayedNum = [];
    if (count > 1 && runningTotal[1]=='M') {
        runningTotal = [runningTotal[2] * runningTotal[3]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    }
    if (count > 1 && runningTotal[0]=='A') {
        runningTotal = [Number(runningTotal[1]) + Number(runningTotal[2])];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    }
    if (count > 1 && runningTotal[1]=='S') {
        runningTotal = [runningTotal[2] - runningTotal[3]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    } 
    if (count > 1 && runningTotal[0]=='D') {
        runningTotal = [runningTotal[1] / runningTotal[2]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    } 
}


function subtract() {
    count++;
    if (runningTotal.indexOf('S') == -1){
        runningTotal.unshift('S');}
    runningTotal.push(readout.innerHTML);
    console.log(runningTotal);
    displayedNum = [];
    if (count > 1 && runningTotal[1]=='M') {
        runningTotal = [runningTotal[2] * runningTotal[3]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    }
    if (count > 1 && runningTotal[1]=='A') {
        runningTotal = [Number(runningTotal[2]) + Number(runningTotal[3])];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    }
    if (count > 1 && runningTotal[0]=='S') {
        runningTotal = [runningTotal[1] - runningTotal[2]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    } 
    if (count > 1 && runningTotal[0]=='D') {
        runningTotal = [runningTotal[1] / runningTotal[2]];
        readout.innerHTML = runningTotal;
        console.log(runningTotal)
    } 
}   

*/
    /*(typeof(runningTotal[0])!= Number){
        runningTotal.shift();
    }
    count++;
    (runningTotal.indexOf('S') == -1){
        runningTotal.unshift('S');}
    runningTotal.push(readout.innerHTML);
    console.log(runningTotal);
    displayedNum = [];
    if (count > 1 ) {
        runningTotal = [runningTotal[1] - runningTotal[2]];
        readout.innerHTML = runningTotal;*/


/*
function equals() {
    numbersArr.push(readout.innerHTML);
    clear();
    if (numbersArr.indexOf('M') != -1) {
        numbersArr.shift();
        readout.innerHTML *= multNum;
    }
    if (numbersArr.indexOf('D') != -1) {
        readout.innerHTML = numbersArr[1] / numbersArr[2];
    }
    if (numbersArr.indexOf('A') != -1) {
        var x = numbersArr[1];
        var y = numbersArr[2]
        readout.innerHTML = Number(x) + Number(y);
    }
    if (numbersArr.indexOf('S') != -1) {
        readout.innerHTML = numbersArr[1] - numbersArr[2];
        numbersArr = [];
        numbersArr.push(readout.innerHTML);
        console.log(numbersArr);
    }

    numbersArr = [];
    setTimeout(clear, 2000);*/
