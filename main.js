import Pokemon from './pokemon.js';
import { pokemons } from './pokemons.js';
import { random, countBtn } from './utils.js';
import { addLog, generateLog } from './logs.js';

const $btn = document.getElementById('btn-kick');
const $btnSuper = document.getElementById('btn-super');

const player1 = new Pokemon(pokemons[0]);
const player2 = new Pokemon(pokemons[1]);
const player3 = new Pokemon(pokemons[2]);

const btnKickCount = countBtn(10, $btn);
const btnSuperCount = countBtn(2, $btnSuper);

const fight = (maxDamage) => {
    const charDmg = random(maxDamage);
    const enemy1Dmg = random(maxDamage);
    const enemy2Dmg = random(maxDamage);

    player1.changeHP(charDmg, (count) => {
        addLog(generateLog(player1, player2, count));
    });

    player2.changeHP(enemy1Dmg, (count) => {
        addLog(generateLog(player2, player1, count));
    });

    player3.changeHP(enemy2Dmg, (count) => {
        addLog(generateLog(player3, player1, count));
    });

    if (player1.hp.current === 0) {
        $btn.disabled = true;
        if ($btnSuper) $btnSuper.disabled = true;
    }
};

$btn.addEventListener('click', () => {
    btnKickCount();
    fight(20);
});

$btnSuper.addEventListener('click', () => {
    btnSuperCount();
    fight(50);
});