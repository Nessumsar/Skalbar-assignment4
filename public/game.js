const form = document.querySelector('form');
const game = document.querySelector('#game');
var counter = 0;

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}


for(let i=1; i<100; i++){{
    if (localStorage.getItem(i) == null) {
        counter = i-1;
        break;
    }
}}


window.addEventListener('load', e => {
    for(let i=1; i<=counter; i++){
        var li = document.createElement('li');
        var favorite = document.createTextNode(localStorage.getItem(i));
        li.appendChild(favorite);
        document.getElementById('games').appendChild(li);
    }
})


form.addEventListener('submit', e =>{
    e.preventDefault();
    localStorage.setItem(++counter, game.value);
    updateView();
    document.getElementById('form').reset();
});


function updateView(){
    var li = document.createElement('li');
    var newGame = document.createTextNode(game.value);
    li.appendChild(newGame);
    document.getElementById('games').appendChild(li);
}