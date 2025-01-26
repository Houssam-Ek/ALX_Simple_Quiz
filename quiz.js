

// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Select the feedback element
    const feedback = document.getElementById("feedback");

    // Check if the user has selected an answer
    if (!userAnswer) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "red"; // Optional: Make feedback red for emphasis
        return;
    }

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green"; // Optional: Green for correct answers
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red"; // Optional: Red for incorrect answers
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);