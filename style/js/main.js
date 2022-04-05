function display(num) {
    calculatorScreen.value += num;
}
function Calculate() {
    try {
        calculatorScreen.value = eval(calculatorScreen.value);
    }
    catch (error) {
        alert('Invalid');
    }
}
function Clear() {
    calculatorScreen.value = '';
}