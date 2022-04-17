let cells = document.querySelectorAll('.row > div');
let counter = 0;

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}



function cellClicked(Event) {
    if(counter % 2 == 0) {
        Event.srcElement.textContent = 'X';
    }
    else {
        Event.srcElement.textContent = 'O';
    }
    checkWinner(counter);
    counter++
}

let check = ' ';
function checkWinner(counters) {
    if(counter % 2 == 0) {
        check = 'X';
    } else {
        check = 'O';
    }

        //checks rows for winner
        if(cells[0].textContent == check && cells[1].textContent == check && cells[2].textContent == check) {
            console.log(check + ' Wins!!!!')
            return
        }
        if(cells[3].textContent == check && cells[4].textContent == check && cells[5].textContent == check) {
            console.log(check + ' Wins!!!!')
            return
        }
        if(cells[6].textContent == check && cells[7].textContent == check && cells[8].textContent == check) {
            console.log(check + ' Wins!!!!')
            return
        }

        //checks columns for winner
        if(cells[0].textContent == check && cells[3].textContent == check && cells[6].textContent == check) {
            console.log(check + ' Wins!!!!')
            return
        }
        if(cells[1].textContent == check && cells[4].textContent == check && cells[7].textContent == check) {
            console.log(check + ' Wins!!!!')
            return
        }
        if(cells[2].textContent == check && cells[5].textContent == check && cells[8].textContent == check) {
            console.log(check + ' Wins!!!!')
            return
        }

        //checks diagonals for winner
        if(cells[0].textContent == check && cells[4].textContent == check && cells[8].textContent == check) {
            console.log(check + ' Wins!!!!')
            return
        }
        if(cells[2].textContent == check && cells[4].textContent == check && cells[6].textContent == check) {
            console.log(check + ' Wins!!!!')
            return
        }

        // check for draw
        if (counter === 8) {
            console.log('Draw');
            return
        }
    
}

// function addClassToImage(element){
//     var innerImage = element.querySelector('img');
//     if(innerImage) {
//         if(innerImage.classList.contains('clicked')) {
//             innerImage.classList.remove('clicked');
//         }
//         else {
//             innerImage.classList.add('clicked')
//         }
//     }
// }