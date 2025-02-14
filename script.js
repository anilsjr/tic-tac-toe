let boxes = document.querySelectorAll('.box');
let turn = "X";
let count = 0;

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.textContent === "") {
            box.textContent = turn;
            box.classList.add("disabled");
            count++;
            let winner = checkWinner();
            if (winner) {
                setTimeout(() => alert(winner + " Wins!"), 100);
                disableBoard();
            } else if (count === 9) {
                setTimeout(() => alert("It's a Draw!"), 100);
            }
            turn = turn === "X" ? "O" : "X";
            box.style.color = turn === "X" ? "#555" : "#ddd";
        }
    });
});

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[b].textContent === boxes[c].textContent) {
            return boxes[a].textContent;
        }
    }
    return null;
}

function disableBoard() {
    boxes.forEach(box => box.classList.add("disabled"));
}

function resetGame() {
    boxes.forEach(box => {
        box.textContent = "";
        box.classList.remove("disabled");
    });
    turn = "X";
    count = 0;
}