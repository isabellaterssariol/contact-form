const form = document.getElementById('form');
const fields = document.querySelectorAll('.f-required')
const spans = document.querySelectorAll('.s-required')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const wordRegex = /\b\w+\b.*\b\w+\b/;
const errorMark = document.querySelectorAll('#errorPoint');
const sucessMark = document.querySelectorAll('#sucessPoint');

form.addEventListener('sumbit', (event) => {
    event.preventDefault();
    nameValue();
    emailValue();
    messageValue();
});

function error(index){
    fields[index].style.border = '2px solid #ff0000';
    spans[index].style.display = 'block';
    errorMark[index].style.display = 'block';
    sucessMark[index].style.display = 'none';
}

function sucess(index){
    fields[index].style.border = '2px solid #008000';
    spans[index].style.display = 'none';
    errorMark[index].style.display = 'none';
    sucessMark[index].style.display = 'block'
}

function nameValue(){
    if(!wordRegex.test(fields[0].value))
    {
        error(0);
    } else {
        sucess(0);
    }
}

function emailValue() {
    if(!emailRegex.test(fields[1].value))
    {
        error(1);
    } else {
        sucess(1);
    }
}

function messageValue() {
    if(fields[2].value.length < 20)
    {
        error(2);
    } else {
        sucess(2);
    }
}