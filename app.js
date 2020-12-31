
// ------------------------------------------ 
// List of available items for playing.
// ------------------------------------------ 
const items =
    [
        {
            name: 'Rock',
            icon: 'images/rock.svg',
        },
        {
            name: 'Paper',
            icon: 'images/paper.svg',
        },
        {
            name: 'Scissors',
            icon: 'images/scissors.svg',
        },
        {
            name: 'Lizard',
            icon: 'images/lizard.svg',
        },
        {
            name: 'Spock',
            icon: 'images/spock.svg',
        }
    ]

// ------------------------------------------ 
// Global game score.
// ------------------------------------------ 
let score = {
    player: 0,
    opponent: 0
}

// ------------------------------------------ 
// Creates random choices for opponent.
// ------------------------------------------ 
function opponentGame() {

    let result = '';

    switch (Math.floor(Math.random() * (5))) {
        case 0:
            result = 'Rock';
            break;
        case 1:
            result = 'Paper';
            break;
        case 2:
            result = 'Scissors';
            break;
        case 3:
            result = 'Lizard';
            break;
        case 4:
            result = 'Spock';
            break;
    }
    return result;
}

// ------------------------------------------ 
// Makes a move for the player.
// ------------------------------------------ 
function playerGame(player) {

    let msg = '';

    // Calls opponent move.
    // ------------------------------------------ 
    let opponent = opponentGame();
    document.getElementById('opponent-title').innerHTML = opponent;
    document.getElementById('opponent-icon').setAttribute('src', 'images/' + String(opponent).toLowerCase() + '.svg');

    // Game logic.
    // ------------------------------------------ 
    if (player === opponent) {
        msg = `${player} vs ${opponent}. You are tie.`
    }
    else if (
        player === 'Rock' && (opponent === 'Scissors' || opponent === 'Lizard') ||
        player === 'Paper' && (opponent === 'Rock' || opponent === 'Spock') ||
        player === 'Scissors' && (opponent === 'Paper' || opponent === 'Lizard') ||
        player === 'Lizard' && (opponent === 'Paper' || opponent === 'Spock') ||
        player === 'Spock' && (opponent === 'Rock' || opponent === 'Scissors')
    ) {
        msg = `${player} vs ${opponent}. You Win!`;
        score.player += 1;
    }
    else {
        msg = `${player} vs ${opponent}. You Lose :(`
        score.opponent += 1;
    }

    document.getElementById('board').innerHTML = msg;

    console.log(score)
    document.getElementById('player-score').innerHTML = score.player + ' pt';
    document.getElementById('opponent-score').innerHTML = score.opponent + ' pt';
}

// Writes and displays player cards information.
// ------------------------------------------ 
document.getElementById('rock-title').innerHTML = items[0].name;
document.getElementById('rock-icon').setAttribute('src', items[0].icon);

document.getElementById('paper-title').innerHTML = items[1].name;
document.getElementById('paper-icon').setAttribute('src', items[1].icon);

document.getElementById('scissors-title').innerHTML = items[2].name;
document.getElementById('scissors-icon').setAttribute('src', items[2].icon);

document.getElementById('lizard-title').innerHTML = items[3].name;
document.getElementById('lizard-icon').setAttribute('src', items[3].icon);

document.getElementById('spock-title').innerHTML = items[4].name;
document.getElementById('spock-icon').setAttribute('src', items[4].icon);



// SET OF GAME RULES IN OBJECT NOTATION
// -----------------------------------
//  To implement in later versions.
// -----------------------------------
//
// const rules =
//     [
//         {
//             winner: 'Rock',
//             action: 'crushes',
//             loser: 'Scissors'
//         },
//         {
//             winner: 'Rock',
//             action: 'crushes',
//             loser: 'Lizard'
//         },
//         {
//             winner: 'Paper',
//             action: 'covers',
//             loser: 'Rock'
//         },
//         {
//             winner: 'Paper',
//             action: 'disproves',
//             loser: 'Spock'
//         },
//         {
//             winner: 'Scissors',
//             action: 'cuts',
//             loser: 'Paper'
//         },
//         {
//             winner: 'Scissors',
//             action: 'decapitates',
//             loser: 'Lizard'
//         },
//         {
//             winner: 'Lizard',
//             action: 'eats',
//             loser: 'Paper'
//         },
//         {
//             winner: 'Lizard',
//             action: 'poisons',
//             loser: 'Spock'
//         },
//         {
//             winner: 'Spock',
//             action: 'vaporizes',
//             loser: 'Rock'
//         },
//         {
//             winner: 'Spock',
//             action: 'smashes',
//             loser: 'Scissors'
//         },
//     ]


// SET OF CLASSES
// -----------------------------------
//  To implement in later versions.
// -----------------------------------
//
// class Player {
//     constructor (name, id, wins, loses) {
//         this.name = name;
//         this.id = id;
//         this.wins = wins;
//         this.loses = loses;
//     }
// }
//
// class Game {
//     constructor (round, totalRounds) {
//         this.round = round;
//         this.totalRounds = totalRounds;
//     }
// }
// }
//
// class Record {
//     constructor (playerA, playerB, score) {
//         this.playerA = playerA;
//         this.playerB = playerB;
//         this.score = score;
//     }
// }