let screen = document.getElementById('screen')
let buttons = document.querySelectorAll('.buttonBox button')
let string = "";
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', function (e) {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            screen.value = string;
        } else if (e.target.innerHTML === 'C') {
            string = "";
            screen.value = "0.00";
        } else {
            string += e.target.innerHTML;
            screen.value = string;
        }
    });
});
