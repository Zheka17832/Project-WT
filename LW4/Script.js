const startButton = document.getElementById('start-button');
const difficultySelect = document.getElementById('difficulty');
const colorSelect = document.getElementById('color');
const controls = document.getElementById('controls');
const gameInfo = document.getElementById('game-info');
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

let score = 0;
let timeLeft = 0;
let timerInterval;

const settings = {
    lazy: { timeLimit: 5, size: 120 },
    normal: { timeLimit: 3, size: 80 },
    hard: { timeLimit: 2, size: 50 }
};

function startGame() {
    const difficulty = difficultySelect.value;
    const color = colorSelect.value;
    controls.classList.add('hidden');


    if (!difficulty || !color) {
        alert('Please select both difficulty and color!');
        return;
    }

    const { timeLimit, size } = settings[difficulty];
    timeLeft = timeLimit;
    score = 0;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    controls.classList.add('hidden');
    gameInfo.classList.remove('hidden');
    gameArea.innerHTML = '';

    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = color;
    gameArea.appendChild(circle);

    function moveCircle() {
        const x = Math.random() * (gameArea.offsetWidth - size);
        const y = Math.random() * (gameArea.offsetHeight - size);
        circle.style.transform = `translate(${x}px, ${y}px)`;
    }

    function handleCircleClick() {
        score++;
        scoreDisplay.textContent = score;
        moveCircle();
        resetTimer();
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timeLeft = timeLimit;
        timeDisplay.textContent = timeLeft;
        startTimer();
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    circle.addEventListener('click', handleCircleClick);
    moveCircle();
    startTimer();
}

function endGame() {
    clearInterval(timerInterval);
    gameInfo.classList.add('hidden');
    controls.classList.remove('hidden');
    gameArea.innerHTML = '';
    alert(`Game over! Your score: ${score}`);
}

startButton.addEventListener('click', startGame);

