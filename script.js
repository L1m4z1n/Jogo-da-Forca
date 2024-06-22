const words = ["python", "programacao", "computador", "jogo", "desenvolvimento"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 6;
let guessedLetters = [];
let wrongLetters = [];
const canvas = document.getElementById("hangmanCanvas");
const ctx = canvas.getContext("2d");

function drawHangman(attemptsLeft) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;

    // Base da forca
    ctx.beginPath();
    ctx.moveTo(10, 190);
    ctx.lineTo(190, 190);
    ctx.moveTo(30, 190);
    ctx.lineTo(30, 20);
    ctx.lineTo(120, 20);
    ctx.lineTo(120, 40);
    ctx.stroke();

    if (attemptsLeft < 6) {
        // Cabeça
        ctx.beginPath();
        ctx.arc(120, 60, 20, 0, Math.PI * 2);
        ctx.stroke();
    }
    if (attemptsLeft < 5) {
        // Corpo
        ctx.beginPath();
        ctx.moveTo(120, 80);
        ctx.lineTo(120, 130);
        ctx.stroke();
    }
    if (attemptsLeft < 4) {
        // Braço esquerdo
        ctx.beginPath();
        ctx.moveTo(120, 90);
        ctx.lineTo(90, 110);
        ctx.stroke();
    }
    if (attemptsLeft < 3) {
        // Braço direito
        ctx.beginPath();
        ctx.moveTo(120, 90);
        ctx.lineTo(150, 110);
        ctx.stroke();
    }
    if (attemptsLeft < 2) {
        // Perna esquerda
        ctx.beginPath();
        ctx.moveTo(120, 130);
        ctx.lineTo(90, 170);
        ctx.stroke();
    }
    if (attemptsLeft < 1) {
        // Perna direita
        ctx.beginPath();
        ctx.moveTo(120, 130);
        ctx.lineTo(150, 170);
        ctx.stroke();
    }
}

function displayWord() {
    const wordContainer = document.getElementById("wordContainer");
    wordContainer.innerHTML = selectedWord
        .split("")
        .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
}

function updateWrongLetters() {
    document.getElementById("wrongLetters").textContent = wrongLetters.join(" ");
}

function updateAttempts() {
    document.getElementById("remainingAttempts").textContent = attemptsLeft;
    drawHangman(attemptsLeft);
}

function checkWin() {
    const wordContainer = document.getElementById("wordContainer").textContent;
    if (!wordContainer.includes("_")) {
        document.getElementById("message").textContent = "Parabéns! Você ganhou!";
        document.getElementById("guessInput").disabled = true;
    }
}

function checkLoss() {
    if (attemptsLeft <= 0) {
        document.getElementById("message").textContent = `Você perdeu! A palavra era: ${selectedWord}`;
        document.getElementById("guessInput").disabled = true;
    }
}

function makeGuess() {
    const guessInput = document.getElementById("guessInput");
    const guessedLetter = guessInput.value.toLowerCase();
    guessInput.value = "";

    if (!guessedLetter || guessedLetters.includes(guessedLetter) || wrongLetters.includes(guessedLetter)) {
        return;
    }

    if (selectedWord.includes(guessedLetter)) {
        guessedLetters.push(guessedLetter);
    } else {
        wrongLetters.push(guessedLetter);
        attemptsLeft--;
    }

    displayWord();
    updateWrongLetters();
    updateAttempts();
    checkWin();
    checkLoss();
}

displayWord();
updateAttempts();
