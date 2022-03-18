let answerOne = document.getElementById("answerOne");
let answerTwo = document.getElementById("answerTwo");
let answerThree = document.getElementById("answerThree");
let AnswerFour = document.getElementById("answerFour");
let quizform = document.getElementById("quizform");
let score = 0;
let questionContainer = document.getElementById("questionContainer");
let quizQuestion = document.getElementById("title");
let QuestionNumber = 0;
let timeLeft = 150;
let timerInterval = 0;


// lista de questões
let questions = [
    {
        title: "Quais o menor e o maior país do mundo?",
        choices: ["Vaticano e Rússia",
         "Nauru e China",
          "Mônaco e Canadá",
           "Malta e Estados Unidos",
           "São Marino e Índia"],

        answer: "Mônaco e Canadá"
    },
    {
        title: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
        choices: ["Jânio Quadros",
         "Jacinto Anjos",
          "Getúlio letgas",
           "João Figueiredo",
           "João Goulart"],

        answer: "João Goulart"
    },
    {
        title: "Quantas casas decimais tem o número pi?",
        choices: ["Duas",
         "Centenas",
          "Infinito",
           "Vinte",
           "Milhares"],

        answer: "Infinito"
    },
    {
        title: "O que a palavra legend significa em português?",
        choices: ["Legenda",
         "Conto",
          "História",
           "Lenda",
           "Legendário"],

        answer: "Lenda"
    },
    {
        title: "Qual destes países é transcontinental?",
        choices: ["Rússia",
         "Filipinas",
          "Marrocos",
           "Groenlândia",
           "Tanzânia"],

        answer: "Rússia"
    }
];

//chamada
inicio();

// quantidades de pergunta
function exibirPergunta(questionBlock) {
    quizQuestion.innerText = questionBlock.title;
    answerOne.textContent = questionBlock.choices[0];
    answerTwo.textContent = questionBlock.choices[1];
    answerThree.textContent = questionBlock.choices[2];
    answerFour.textContent = questionBlock.choices[3];
    answerFive.textContent = questionBlock.choices[4];


}

// quando a página carrega o inicio inicia o quiz
function inicio() {
    startQuestionário();
    quizform.addEventListener("click", function (e) {
        let buttonClicked = e.target;
        verificarResposta(buttonClicked.innerText);
    });
}

//define a função de início do questionario
function startQuestionário() {
    exibirPergunta(questions[0]);
    temporizador();
}

function verificarResposta(userAnswerText) {
    if (userAnswerText === questions[QuestionNumber].answer) {
        score += 100;
    } else {
        timeLeft -= 10;
    }
    novaPergunta();
}

function novaPergunta() {
    if (QuestionNumber === questions.length - 1) {
        terminarQuestionario();
    } else {
        QuestionNumber++;
        exibirPergunta(questions[QuestionNumber]);
    };
}


//código para finalizar o questionario
function terminarQuestionario() {
        quizform.remove();
        quizQuestion.textContent = "Sua pontuação é: " + score;
    let userInput = document.createElement("p");
        userInput.textContent = "Para salvar sua pontuação digite seu nome aqui";
        quizQuestion.appendChild(userInput);
    let userinicioials = document.createElement("input");
        userinicioials.setAttribute("type", "text");
        quizQuestion.appendChild(userinicioials);
    let savehighScoreBtn = document.createElement("button");
        savehighScoreBtn.setAttribute("type", "button");
        savehighScoreBtn.textContent = "Salvar";
        quizQuestion.appendChild(savehighScoreBtn);
    limparTemporizador();


//código para salvar no armazenamento local
    savehighScoreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (userinicioials.value === "") {
            alert("Insira seu nome")
        } else {
            storeScore(userinicioials.value, score);
        }

    });


    function storeScore(userName, newScore) {
        localStorage.setItem("newHighScoreAdded", JSON.stringify({ userName, newScore }));
        window.location.assign("highscores.html");
    }
}

// Usando o setTimeout
function temporizador() {
    document.getElementById("timeRemaining").innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft < 0) {
        alert('fim de jogo!');
        window.location.assign("highscores.html");
    }
    else {
        timerInterval = setTimeout(temporizador, 1000);
    }
};

function limparTemporizador() {
    clearTimeout(timerInterval);
};
