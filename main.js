const $btn = document.getElementById('btn-kick');
const $btnSuper = document.getElementById('btn-super');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy1 = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

const enemy2 = {
    name: 'Bulbasaur',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy2'),
    elProgressbar: document.getElementById('progressbar-enemy2'),
};

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP (enemy1);
    renderHP (enemy2);
}

function renderHP (person) {
    renderHPLife(person);
    renderProgressbarHP (person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP (count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бідний ' + person.name + ' програв бій!');
        $btn.disabled = true;
        if ($btnSuper) $btnSuper.disabled = true;
    } else {
        person.damageHP -= count;
        renderHP(person);
}}

function random(num) {
    return Math.ceil(Math.random() * num);
}

$btn.addEventListener('click', function () {
    console.log('Kick: Thunder Jolt');
    changeHP (random(20), character);
    changeHP (random(20), enemy1);
    changeHP (random(20), enemy2);
});

$btnSuper.addEventListener('click', function () {
    console.log('Super Kick: Thunderbolt');
    changeHP (random(25), character);
    changeHP (random(35), enemy1);
    changeHP (random(35), enemy2);
});

init();