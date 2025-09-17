function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent = parseInt(dead.textContent) + 1;
        } else {
            lost.textContent = parseInt(lost.textContent) + 1;
        }

        if (parseInt(dead.textContent) === 10) {
            alert('Вы победили!');
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (parseInt(lost.textContent) === 5) {
            alert('Вы проиграли!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    };
}