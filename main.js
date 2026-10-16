const $btn = document.getElementById('btn-kick');
const $btnSuper = document.getElementById('btn-super');
const $logs = document.querySelector('#logs');

function generateLog(firstPerson, secondPerson, count) {
    const { name: firstName, damageHP, defaultHP } = firstPerson;
    const { name: secondName } = secondPerson;

    const logs = [
        `${firstName} згадав щось важливе, але зненацька ${secondName}, не тямлячи себе від переляку, завдав удару в передпліччя ворога.`,
        `${firstName} поперхнувся, і за це ${secondName} злякано приклав прямий удар коліном у чоло ворога.`,
        `${firstName} забувся, але в цей час нахабний ${secondName}, прийнявши вольове рішення, нечутно підійшовши ззаду, вдарив.`,
        `${firstName} отямився, але зненацька ${secondName} випадково завдав найпотужнішого удару.`,
        `${firstName} поперхнувся, проте в цей час ${secondName} знехотя розтрощив кулаком <вирізано цензурою> суперника.`,
        `${firstName} здивувався, а ${secondName}, похитнувшись, заліпив підступного удару.`,
        `${firstName} висякався, але несподівано ${secondName} провів нищівний удар.`,
        `${firstName} похитнувся, і раптово нахабний ${secondName} безпричинно вдарив у ногу супротивника.`,
        `${firstName} засмутився, як раптом несподівано ${secondName} випадково вліпив ступнею в живіт суперника.`,
        `${firstName} намагався щось сказати, але раптом знічев'я ${secondName} від нудьги розбив брову супернику.`
    ];

    return `${logs[random(logs.length) - 1]} -${count}, [${damageHP}/${defaultHP}]`;
}

function addLog(text) {
    $logs.insertAdjacentHTML('afterbegin', `<p>${text}</p>`);
}

function renderHPLife() {
    const { elHP, damageHP, defaultHP } = this;
    elHP.innerText = `${damageHP} / ${defaultHP}`;
}

function renderProgressbarHP() {
    const { elProgressbar, damageHP } = this;
    elProgressbar.style.width = `${damageHP}%`;
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function changeHP(count, enemy) {
    this.damageHP -= count;

    if (this.damageHP <= 0) {
        this.damageHP = 0;
        this.renderHP();

        const { name } = this;
        alert(`Бідний ${name} програв бій!`);

        $btn.disabled = true;
        if ($btnSuper)$btnSuper.disabled = true;
    } else {
        this.renderHP();
    }

    if (enemy) {
        const logText = generateLog(this, enemy, count);
        addLog(logText);
    }
}

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHP,
    renderHPLife,
    renderProgressbarHP,
    changeHP,
};

const enemy1 = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP,
    renderHPLife,
    renderProgressbarHP,
    changeHP,
};

const enemy2 = {
    name: 'Bulbasaur',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy2'),
    elProgressbar: document.getElementById('progressbar-enemy2'),
    renderHP,
    renderHPLife,
    renderProgressbarHP,
    changeHP,
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
    const charDmg = random(damage);
    const enemy1Dmg = random(damage);
    const enemy2Dmg = random(damage);

    character.changeHP(charDmg, enemy1);
    enemy1.changeHP(enemy1Dmg, character);
    enemy2.changeHP(enemy2Dmg, character);
}

$btn.addEventListener('click', function () {
    console.log('Kick: Thunder Jolt');
    fight(20);
});

$btnSuper.addEventListener('click', function () {
    console.log('Super Kick: Thunderbolt');
    fight(50);
});

init();
