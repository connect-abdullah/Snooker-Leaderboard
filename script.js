// References
const playerForm = document.getElementById('player-form');
const playerNameInput = document.getElementById('player-name');
const leaderboardTableBody = document.querySelector('#leaderboard tbody');
const scoreButtons = document.querySelectorAll('.score-btn');
const currentScoreDisplay = document.getElementById('current-score');
const resetScoreButton = document.getElementById('reset-score');

// Variables
let currentScore = 0;

// Add Player to Leaderboard
playerForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const playerName = playerNameInput.value.trim();

    if (!playerName) {
        alert('Please enter a valid player name.');
        return;
    }

    // Add player to leaderboard
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${playerName}</td>
        <td>${currentScore}</td>
        <td>
            <button class="delete-btn">Delete</button>
        </td>
    `;
    leaderboardTableBody.appendChild(row);

    // Reset player name input and current score
    playerNameInput.value = '';
    currentScore = 0;
    updateCurrentScoreDisplay();

    // Add delete functionality
    const deleteButton = row.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function () {
        leaderboardTableBody.removeChild(row);
    });
});

// Update Current Score Display
function updateCurrentScoreDisplay() {
    currentScoreDisplay.textContent = currentScore;
}

// Add Score with Buttons
scoreButtons.forEach(button => {
    button.addEventListener('click', function () {
        const scoreToAdd = parseInt(button.dataset.value);
        currentScore += scoreToAdd;
        updateCurrentScoreDisplay();
    });
});

// Reset Score
resetScoreButton.addEventListener('click', function () {
    currentScore = 0;
    updateCurrentScoreDisplay();
});
