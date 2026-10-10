const $btn = document.getElementById('btn-kick');
const $btnSuper = document.getElementById('btn-super');

function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = this.damageHP + '%';
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0;
        this.renderHP();
        alert('Бідний ' + this.name + ' програв бій!');
        $btn.disabled = true;
        if ($btnSuper) $btnSuper.disabled = true;
    } else {
        this.damageHP -= count;
        this.renderHP();
    }
}

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
}

const enemy1 = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
}

const enemy2 = {
    name: 'Bulbasaur',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy2'),
    elProgressbar: document.getElementById('progressbar-enemy2'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressbarHP: renderProgressbarHP,
    changeHP: changeHP,
};

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy1.renderHP();
    enemy2.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function fight(damage) {
    character.changeHP(random(damage));
    enemy1.changeHP(random(damage));
    enemy2.changeHP(random(damage));
}

$btn.addEventListener('click', function () {
    fight(20);
});

$btnSuper.addEventListener('click', function () {
    fight(50);
});

init();
