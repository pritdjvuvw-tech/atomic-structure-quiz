// ============================================================
// GOOGLE APPS SCRIPT WEB APP URL
// ============================================================

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx8-LhN_iKP80z2wsn_Z78pQcH0r0Pl6HFBDmjh_BVVbBi7jf-umj9QxrBrSNB_vNEFrg/exec";


// ============================================================
// QUIZ QUESTIONS
// ============================================================

const questions = [

    {
        question:
            "Which experiment directly provided evidence that an atom consists mostly of empty space with a dense, positively charged nucleus?",

        options: [
            "J.J. Thomson's Cathode Ray Tube experiment",
            "Rutherford's Alpha Particle Scattering experiment",
            "Millikan's Oil Drop experiment",
            "Chadwick's Beryllium Bombardment experiment"
        ],

        answer: 1
    },


    {
        question:
            "An isotope of an element has 17 protons, 18 neutrons, and 18 electrons. What is the identity and net charge of this species?",

        options: [
            "Neutral Chlorine-35 atom",
            "Chloride ion (Cl⁻) with mass number 35",
            "Argon-35 neutral atom",
            "Chloride ion (Cl⁻) with mass number 36"
        ],

        answer: 1
    },


    {
        question:
            "What is the maximum number of electrons that can occupy a subshell with angular momentum quantum number l = 2?",

        options: [
            "2",
            "6",
            "10",
            "14"
        ],

        answer: 2
    },


    {
        question:
            "Which set of quantum numbers (n, l, m_l, m_s) is NOT permissible for an electron in an atom?",

        options: [
            "n = 3, l = 2, m_l = -1, m_s = +1/2",
            "n = 2, l = 0, m_l = 0, m_s = -1/2",
            "n = 3, l = 3, m_l = 0, m_s = +1/2",
            "n = 4, l = 1, m_l = -1, m_s = -1/2"
        ],

        answer: 2
    },


    {
        question:
            "Which of the following ground-state electron configurations represents a transition metal exception due to exchange energy stabilization?",

        options: [
            "[Ar] 4s² 3d⁴",
            "[Ar] 4s¹ 3d⁵",
            "[Ar] 4s² 3d⁹",
            "[Kr] 5s² 4d⁴"
        ],

        answer: 1
    },


    {
        question:
            "Which rule or principle states that no two electrons in the same atom can have the exact same set of four quantum numbers?",

        options: [
            "Aufbau Principle",
            "Hund's Rule of Maximum Multiplicity",
            "Pauli Exclusion Principle",
            "Heisenberg Uncertainty Principle"
        ],

        answer: 2
    },


    {
        question:
            "What is the total number of orbitals associated with the principal energy level n = 4?",

        options: [
            "4",
            "8",
            "16",
            "32"
        ],

        answer: 2
    },


    {
        question:
            "In a 3p orbital, how many radial nodes and angular nodes are present, respectively?",

        options: [
            "1 radial node, 1 angular node",
            "2 radial nodes, 0 angular nodes",
            "0 radial nodes, 1 angular node",
            "1 radial node, 2 angular nodes"
        ],

        answer: 0
    },


    {
        question:
            "According to Bohr's model, what happens to the radius of an orbit in a hydrogen-like atom as the principal quantum number n increases?",

        options: [
            "Increases linearly with n",
            "Increases proportionally to n²",
            "Decreases inversely with n",
            "Remains constant"
        ],

        answer: 1
    },


    {
        question:
            "Which spectral series of the hydrogen emission spectrum corresponds to electronic transitions dropping down to the n = 2 energy level?",

        options: [
            "Lyman series",
            "Balmer series",
            "Paschen series",
            "Brackett series"
        ],

        answer: 1
    },


    {
        question:
            "If an electron moves at 2.0 × 10⁶ m/s, which equation is used to calculate its associated matter wavelength?",

        options: [
            "λ = c / ν",
            "E = mc²",
            "λ = h / (m × v)",
            "Δx × Δp ≥ h / (4π)"
        ],

        answer: 2
    },


    {
        question:
            "What is the total number of unpaired electrons in a ground-state gaseous Fe³⁺ ion (Atomic number = 26)?",

        options: [
            "3",
            "4",
            "5",
            "6"
        ],

        answer: 2
    },


    {
        question:
            "Which of the following species is isoelectronic with the sulfide ion (S²⁻)?",

        options: [
            "Ar",
            "Cl",
            "K",
            "Ca⁺"
        ],

        answer: 0
    },


    {
        question:
            "Cathode rays consist of streams of which subatomic particle?",

        options: [
            "Protons",
            "Neutrons",
            "Electrons",
            "Alpha particles"
        ],

        answer: 2
    },


    {
        question:
            "Why does a 4s orbital fill before a 3d orbital according to the (n + l) rule?",

        options: [
            "4s has a lower principal quantum number",
            "4s has n + l = 4, whereas 3d has n + l = 5",
            "3d has a lower energy level than 4s",
            "4s can hold more electrons than 3d"
        ],

        answer: 1
    },


    {
        question:
            "Which of the following ions is diamagnetic in its ground state?",

        options: [
            "Fe²⁺",
            "Cu⁺",
            "Cr³⁺",
            "Ni²⁺"
        ],

        answer: 1
    },


    {
        question:
            "The photoelectric effect demonstrates which fundamental behavior of electromagnetic radiation?",

        options: [
            "Wave nature only",
            "Particle nature (quantization of light)",
            "Continuous energy absorption",
            "Longitudinal wave propagation"
        ],

        answer: 1
    },


    {
        question:
            "What is the charge-to-mass ratio (e/m) property observed for canal rays (anode rays) compared to cathode rays?",

        options: [
            "It is constant regardless of the gas used",
            "It depends on the nature of the residual gas in the tube",
            "It is identical to cathode rays",
            "It is zero because canal rays have no charge"
        ],

        answer: 1
    },


    {
        question:
            "What is the physical significance of the square of the wave function, |ψ|²?",

        options: [
            "Exact trajectory of an electron",
            "Probability density of finding an electron at a given point",
            "Orbital angular momentum of the electron",
            "Total mechanical energy of the atom"
        ],

        answer: 1
    },


    {
        question:
            "Two atoms are termed 'isobars' if they have:",

        options: [
            "The same atomic number but different mass numbers",
            "The same number of neutrons but different atomic numbers",
            "The same mass number but different atomic numbers",
            "The same chemical properties"
        ],

        answer: 2
    }

];


// ============================================================
// VARIABLES
// ============================================================

let currentQuestion = 0;

let userAnswers = new Array(questions.length).fill(null);

let studentData = {};


// ============================================================
// DOM ELEMENTS
// ============================================================

const studentSection =
    document.getElementById("student-section");

const quizSection =
    document.getElementById("quiz-section");

const resultSection =
    document.getElementById("result-section");

const studentForm =
    document.getElementById("student-form");

const questionContainer =
    document.getElementById("question-container");

const previousBtn =
    document.getElementById("previous-btn");

const nextBtn =
    document.getElementById("next-btn");

const questionCounter =
    document.getElementById("question-counter");

const progressBar =
    document.getElementById("progress-bar");

const currentScore =
    document.getElementById("current-score");


// ============================================================
// START QUIZ
// ============================================================

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    studentData = {

        name: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        department:
            document.getElementById("department").value,

        semester:
            document.getElementById("semester").value,

        phone:
            document.getElementById("phone").value.trim()

    };


    studentSection.classList.add("hidden");

    quizSection.classList.remove("hidden");

    loadQuestion();

});


// ============================================================
// LOAD QUESTION
// ============================================================

function loadQuestion() {

    const question = questions[currentQuestion];

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    let html = `

        <div class="question-card">

            <div class="question-number">
                QUESTION ${currentQuestion + 1}
            </div>

            <h2 class="question-text">
                ${question.question}
            </h2>

            <div class="options">

    `;


    question.options.forEach((option, index) => {

        const selected =
            userAnswers[currentQuestion] === index
                ? "selected"
                : "";

        html += `

            <label class="option ${selected}">

                <input
                    type="radio"
                    name="answer"
                    value="${index}"
                    ${userAnswers[currentQuestion] === index ? "checked" : ""}
                >

                ${option}

            </label>

        `;

    });


    html += `

            </div>

        </div>

    `;


    questionContainer.innerHTML = html;


    document
        .querySelectorAll('input[name="answer"]')
        .forEach(input => {

            input.addEventListener("change", function() {

                userAnswers[currentQuestion] =
                    parseInt(this.value);

                updateSelectedOption();

                calculateCurrentScore();

            });

        });


    previousBtn.disabled =
        currentQuestion === 0;


    if (currentQuestion === questions.length - 1) {

        nextBtn.textContent =
            "Submit Quiz ✓";

    } else {

        nextBtn.textContent =
            "Next →";

    }

}


// ============================================================
// SELECTED OPTION VISUAL
// ============================================================

function updateSelectedOption() {

    document
        .querySelectorAll(".option")
        .forEach(option => {

            option.classList.remove("selected");

        });


    const selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    if (selected) {

        selected
            .parentElement
            .classList.add("selected");

    }

}


// ============================================================
// CURRENT SCORE
// ============================================================

function calculateCurrentScore() {

    let score = 0;

    questions.forEach((question, index) => {

        if (userAnswers[index] === question.answer) {

            score++;

        }

    });

    currentScore.textContent = score;

}


// ============================================================
// NEXT BUTTON
// ============================================================

nextBtn.addEventListener("click", function() {

    if (userAnswers[currentQuestion] === null) {

        alert("Please select an answer before continuing.");

        return;

    }


    if (currentQuestion === questions.length - 1) {

        submitQuiz();

        return;

    }


    currentQuestion++;

    loadQuestion();

});


// ============================================================
// PREVIOUS BUTTON
// ============================================================

previousBtn.addEventListener("click", function() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

});


// ============================================================
// SUBMIT QUIZ
// ============================================================

function submitQuiz() {

    let score = 0;


    questions.forEach((question, index) => {

        if (userAnswers[index] === question.answer) {

            score++;

        }

    });


    quizSection.classList.add("hidden");

    resultSection.classList.remove("hidden");


    document.getElementById("final-score").textContent =
        score;


    document.getElementById("result-name").textContent =
        studentData.name;


    document.getElementById("result-email").textContent =
        studentData.email;


    document.getElementById("result-department").textContent =
        studentData.department;


    document.getElementById("result-semester").textContent =
        studentData.semester;


    let message = "";


    if (score >= 18) {

        message = "Excellent! You have a very strong understanding of Atomic Structure.";

    } else if (score >= 15) {

        message = "Great job! You have a strong understanding of the topic.";

    } else if (score >= 10) {

        message = "Good attempt! A little more revision will help.";

    } else {

        message = "Keep practicing. Review the Atomic Structure concepts and try again.";

    }


    document.getElementById("result-message").textContent =
        message;


    sendResultToGoogleSheet(score);

}


// ============================================================
// SEND RESULT TO GOOGLE SHEETS
// ============================================================

function sendResultToGoogleSheet(score) {

    const status =
        document.getElementById("submission-status");


    status.textContent =
        "Submitting your result...";


    const data = {

        name: studentData.name,

        email: studentData.email,

        department: studentData.department,

        semester: studentData.semester,

        phone: studentData.phone,

        score: score,

        total: questions.length,

        timestamp: new Date().toLocaleString()

    };


    fetch(GOOGLE_SCRIPT_URL, {

        method: "POST",

        mode: "no-cors",

        headers: {

            "Content-Type": "text/plain;charset=utf-8"

        },

        body: JSON.stringify(data)

    })

    .then(() => {

        status.textContent =
            "✓ Your result has been submitted successfully.";

    })

    .catch(error => {

        console.error(error);

        status.textContent =
            "Your quiz is complete, but there was a problem submitting the result.";

    });

}
