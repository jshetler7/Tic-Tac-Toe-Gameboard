let cells = document.querySelectorAll('.row > div');
const Gondor = 'Gondor.png';
const Mordor = 'Mordor.jpg';
let clickCount = 0;
let currentPlayer = Gondor;

for(const cell of cells) {
    cell.addEventListener('click', cellClicked);
}

function cellClicked(evt) {
    //Easy Anti-Cheat from Wish.com
    if (evt.target.src === Gondor || evt.target.src === Mordor) {
        return;
    }

    //Determine the poor sod whose turn it is
    evt.target.src = currentPlayer;

    //increment move count
    clickCount++;

    //check for a winner
    if(
        checkCombo(0, 1, 2) ||
        checkCombo(3, 4, 5) ||
        checkCombo(6, 7, 8) ||
        checkCombo(0, 3, 6) ||
        checkCombo(1, 4, 7) ||
        checkCombo(2, 5, 8) ||
        checkCombo(0, 4, 8) ||
        checkCombo(6, 4, 2)
    ) {
        console.log(currentPlayer + ' wins!');
        alert(currentPlayer.substring(0, 6) + ' wins!');
        return;
    }

    if(clickCount === 9) {
        console.log("It's a draw.");
        alert("The war rages on.");
        return;
    }

    //Cycle through the poor sods / currentPlayer
    if(currentPlayer === Gondor) {
        currentPlayer = Mordor;
    } else {
        currentPlayer = Gondor;
    }
}

function checkCombo(a, b, c) {
    if (
        cells[a].children[0].src.endsWith(currentPlayer) && 
        cells[b].children[0].src.endsWith(currentPlayer) && 
        cells[c].children[0].src.endsWith(currentPlayer)
    ) {
        return true;
    } else {
        return false;
    }
}