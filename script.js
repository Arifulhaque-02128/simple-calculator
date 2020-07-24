
function display(val){
    let displayBoard = document.getElementById("displayBoard").value;
    document.getElementById("displayBoard").value = displayBoard + val;
}

function clr(){
    let displayBoard = document.getElementById("displayBoard");
    let displayValue = displayBoard.value;
    displayBoard.value = "";
}

function result(){
    const displayBoard = document.getElementById("displayBoard").value;
    const solve = eval(displayBoard);
    document.getElementById("displayBoard").value = solve;
}

function del(){
    const displayBoard = document.getElementById("displayBoard").value;
    const len = displayBoard.length;
    const currentDisplayBoard = displayBoard.slice(0,len-1);
    document.getElementById("displayBoard").value = currentDisplayBoard;
}

function hide(){
    const calculator = document.querySelector(".calculator");
    calculator.style.display = "none";

    const getCalculator = document.querySelector(".getCalculator");
    getCalculator.style.display = "block";
}
function getCal(){
    const getCalculator = document.querySelector(".getCalculator");
    getCalculator.style.display = "none";

    const calculator = document.querySelector(".calculator");
    calculator.style.display = "block";
}