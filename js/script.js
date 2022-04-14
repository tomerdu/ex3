function add_squares() {
    let MM = document.getElementById('main-3');

    for (let i = 0; i < 52; i++) {

        let rand = Math.round(((Math.random() * 100) % 4));
        let square = document.createElement('div');
        square.classList.add('main-rect');
        square.classList.add('o' + rand);
        square.setAttribute('onclick', 'changeColor(this)');

        if (i == 1) {
            square.style.backgroundColor = 'white'
            square.setAttribute('style', 'opacity: 0.2 ');
        }
        MM.appendChild(square);

    }
}

function changeColor(param) {
    if (param.style.backgroundColor === 'yellow') {
        param.style.backgroundColor = null;
    } else {
        param.style.backgroundColor = 'yellow';
    }
}

let op = 0.0;

function dosome(plus) {
    let obj = document.getElementsByTagName('div')[10];
    if (op < 1) {
        op += 0.1;
        obj.setAttribute('style', 'opacity: ' + op);
    } else {
        plus.innerHTML = '<img src="images/fast-backward.png" alt="" onclick="backward()">'
    }
}

function backward() {
    button.innerHTML = '<button class="plus" value="+" onclick="dosome(this)">+</button>';
    let obj = document.getElementsByTagName('div')[10];
    obj.setAttribute('style', 'opacity: 0.2 ');
    op = 0.0;
}