const quizContainer = document.querySelector(".quiz");
const resultsContainer = document.querySelector(".results");
const submitButton = document.querySelector("#submit");

const myQuestions = [
    {
        question: "What is Samehada?",
        answers: {
            a: "A giant possum",
            b: "A talking hat",
            c: "A mystical sword"
        },
        correctAnswer: "c"
    },

    {
        question: "Which team isn't included in the 'Rookie 9'classification during the Chunin Exams?",
        answers: {
            a: "Team 7",
            b: "Team Guy",
            c: "Team 10"
        },
        correctAnswer: "b"
    },

    {
        question: "Which one of the five major Hidden Villages is the only one to never produce a member of the Akatsuki?",
        answers: {
            a: "Hidden Sound",
            b: "Hidden Mist",
            c: "Hidden Cloud"
        },
        correctAnswer: "c"
    },
    {
        question: "The Sharingan is what type of jutsu?",
        answers: {
            a: "Dojutsu",
            b: "Ninjutsu",
            c: "Taijutsu"
        },
        correctAnswer: "a"
    }
];

function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                 <div class="answers">${answers.join('')}</div>`
            );
        }
    )
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);