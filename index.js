const form = document.getElementById('form');
const fields = document.querySelectorAll('.f-required')
const spans = document.querySelectorAll('.s-required')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const wordRegex = /\b\w+\b.*\b\w+\b/;
const errorMark = document.querySelectorAll('.errorPoint');
const sucessMark = document.querySelectorAll('.successPoint');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValue();
    emailValue();
    messageValue();
    buttonCheck();
});

function showError(index){
    fields[index].style.border = '2px solid #ff0000';
    spans[index].style.display = 'block';
    errorMark[index].style.display = 'block';
    sucessMark[index].style.display = 'none';
}

function showSuccess(index){
    fields[index].style.border = '2px solid #008000';
    spans[index].style.display = 'none';
    errorMark[index].style.display = 'none';
    sucessMark[index].style.display = 'block';
}

const nameValue = function() {
    if(!wordRegex.test(fields[0].value))
    {
        showError(0);
    } else {
        showSuccess(0);
    }
}

const emailValue = function() {
    if(!emailRegex.test(fields[1].value))
    {
        showError(1);
    } else {
        showSuccess(1);
    }
}

const messageValue = function() {
    if(fields[2].value.length < 20)
    {
        showError(2);
    } else {
        showSuccess(2);
    }
}

