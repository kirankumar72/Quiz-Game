
let currentQuestion = 1;
let score = 0;

function showNextQuestion(questionNumber) {
    const currentQuestionContainer = document.getElementById(`question${questionNumber}`);
    currentQuestionContainer.style.display = 'none';

    currentQuestion++;
    if (currentQuestion > 4) {
        showResult();
        return;
    }

    const nextQuestionContainer = document.getElementById(`question${currentQuestion}`);
    nextQuestionContainer.style.display = 'block';
}

function showResult() {
    // Calculate the score based on correct answers
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    const q4Answer = document.querySelector('input[name="q4"]:checked');

    if (q1Answer && q1Answer.value === 'paris') score++;
    if (q2Answer && q2Answer.value === '4') score++;
    if (q3Answer && q3Answer.value === 'jupiter') score++;
    if (q4Answer && q4Answer.value === 'bluewhale') score++;

    // Display the result
    const resultSection = document.getElementById('result');
    resultSection.style.display = 'block';
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = score;

    // Hide the questions
    document.querySelectorAll('.question-container').forEach(container => {
        container.style.display = 'none';
    });

    // Show the "Thank you" message
    const thankYouSection = document.getElementById('thankYou');
    thankYouSection.style.display = 'block';
}

// Function to go back to the first question
function goToHomePage() {
    currentQuestion = 1;
    score = 0;

    // Hide the result and thank you sections
    document.getElementById('result').style.display = 'none';
    document.getElementById('thankYou').style.display = 'none';

    // Show the first question
    document.getElementById('question1').style.display = 'block';
}

// Show the first question initially
document.getElementById('question1').style.display = 'block';