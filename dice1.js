function createDice(number) {
    const dotPositionMatrix ={
        1: [
            [50, 50]
        ],
        2: [
            [20, 20],
            [80, 80]
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80]
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80]
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80]
        ]
    }

    const dice = document.createElement("div");

    for (const dotPosition of dotPositionMatrix[number]) {
        const dot = document.createElement("div");

        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", dotPosition[0] + "%");
        dot.style.setProperty("--left", dotPosition[1] + "%");
        dice.appendChild(dot);
    }

    dice.classList.add("dice");

    return dice;
}

function randomizeDice(diceContainer, numberOfDice) {
    diceContainer.innerHTML = "";

    for (let i = 0; i < numberOfDice; i++) {
        /* this is the value of the dice roll */
        const random = Math.floor((Math.random() * 6) + 1);
        const dice = createDice(random);

        diceContainer.appendChild(dice);
    }
}



const NUMBER_OF_DICE = 1;
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document = document.querySelector(".btn-roll-dice");

randomizeDice(diceContainer, NUMBER_OF_DICE);

btnRollDice.addEventListener("click", () => {
    const interval = setInterval(() => {
        randomizeDice(diceContainer, NUMBER_OF_DICE);
    }, 50);

    setTimeout(() => clearInterval(interval), 1000);
});