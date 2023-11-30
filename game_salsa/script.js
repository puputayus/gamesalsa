let score = 0;
let timeRemaining = 10;

function increaseScore() {
    score++;
    document.getElementById("score").textContent = score;
}

function updateTimer() {
    document.getElementById("timer").textContent = `Time remaining: ${timeRemaining} seconds`;

    if (timeRemaining === 0) {
        endGame();
    } else {
        timeRemaining--;
        setTimeout(updateTimer, 1000);
    }
}

function endGame() {
    document.getElementById("clickButton").disabled = true;
    alert(`Game over! Your score is ${score}.`);
    
    // Tampilkan tombol "Play Again"
    document.getElementById("playAgainButton").style.display = "block";
}

function playAgain() {
    // Reset semua variabel ke nilai awal
    score = 0;
    timeRemaining = 10;
    document.getElementById("score").textContent = score;
    document.getElementById("clickButton").disabled = false;
    document.getElementById("playAgainButton").style.display = "none";

    // Mulai permainan lagi
    updateTimer();
}

// Start the game when the page loads
window.onload = function() {
    updateTimer();
};
