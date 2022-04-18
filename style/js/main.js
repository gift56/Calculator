window.addEventListener("load", () => loader.classList.add("complete"));


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
const tent = checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") == "light") {
    document.body.classList.remove("dark");
}
else if (localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
}
else {
    localStorage.setItem("theme", "light");
}