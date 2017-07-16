let paragraph = document.getElementById('new');
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let button = document.querySelector('button');
let pop = document.querySelector('.pop');
let shift = document.querySelector('.shift');
let push = document.querySelector('.push');
let unshift = document.querySelector('.unshift');

let array = [];

function addText(arr){
    paragraph.textContent = arr;
}

button.addEventListener('click', arrayOutput);
pop.addEventListener('click', fPop);
shift.addEventListener('click', fShift);
push.addEventListener('click', fPush);
unshift.addEventListener('click', fUnshift);

function arrayOutput(){    
    array[inp1.value] = inp2.value;
    addText(array);
}

function fPop(){
    array.pop();
    addText(array);
}

function fShift(){
    array.shift();
    addText(array);
}

function fPush(){
    array.push(inp2.value);
    addText(array);
}

function fUnshift(){
    array.unshift(inp2.value);
    addText(array);
}