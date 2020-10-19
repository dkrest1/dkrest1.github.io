function insert(x) {
    document.calculatorScreen.display.value = document.calculatorScreen.display.value+x;
}

function clearr() {
    var  clearr = "";
    document.calculatorScreen.display.value = clearr;
}

function calc() {
    var expression = document.calculatorScreen.display.value;
    if(expression) {
        document.calculatorScreen.display.value = eval(expression);
    }
   
}
    
function del(){
    var expression = document.calculatorScreen.display.value;
    document.calculatorScreen.display.value = expression.substring(0, expression.length - 1);
}

/*

*/
function ans() {
    return calc();
}