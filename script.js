// Get references to the HTML elements we need to interact with
const userInput = document.getElementById('userInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // For testing, you can see the answer in the browser console

// This function runs when the user clicks the "Guess" button
function checkGuess() {
    // Get the user's guess from the input box and convert it to a number
    const userGuess = parseInt(userInput.value);

    // Validate the input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        message.style.color = 'red';
        return; // Stop the function
    }

    // Compare the guess to the random number
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber}!`;
        message.style.color = 'green';
        // Disable the input and button after the game is won
        userInput.disabled = true;
        guessButton.disabled = true;
    } else if (userGuess > randomNumber) {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'orange';
    } else {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'blue';
    }

    // Clear the input field for the next guess
    userInput.value = '';
    userInput.focus(); // Put the cursor back in the input box
}

// Listen for a click on the button
guessButton.addEventListener('click', checkGuess);

// Optional: Allow the user to press 'Enter' to guess
userInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
