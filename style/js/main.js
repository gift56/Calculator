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
function del() {
    calculatorScreen.value = calculatorScreen.value.slice(0, -1);
}
checkbox.addEventListener("change", () => document.body.classList.toggle("dark"));