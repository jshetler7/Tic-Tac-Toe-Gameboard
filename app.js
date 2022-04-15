let cells = document.querySelectorAll('.row > div');
// console.log(cells)

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
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
function cellClicked(event) {
    event.textContent = 'X'
    console.log(event)
}

