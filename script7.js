document.head.insertAdjacentHTML("beforeend", `
<style>
    body {
        margin: 0; min-height: 100vh;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        font-family: Arial, sans-serif;
        color: white; background: #15152e;
        text-align: center;
    }
	input {
        width: 280px; max-width: 65vw;
        padding: 12px 18px; margin-bottom: 22px;
        box-sizing: border-box;
        border-radius: 25px;
        background: radial-gradient(circle at 35% 30%, #303c87, #101638 85%);
        box-shadow: inset 4px 4px 10px #000c, inset -3px -3px 8px #6478ff40;
        border: 1px solid #454d83;
        color: white; font-size: 15px;
        text-align: center; outline: none;
        transition: box-shadow 0.3s, border-color 0.3s;
    }
    .ball {
        width: 280px; height: 280px;
        max-width: 65vw; max-height: 65vw;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 25%, #555, #050505 70%);
        box-shadow: 0 0 30px #7775d9;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer;
    }
    .answer {
        width: 45%; height: 45%; padding: 10px;
        box-sizing: border-box;
        border-radius: 50%;
        background: radial-gradient(circle at 35% 30%, #303c87, #101638 75%);
        box-shadow: inset 8px 8px 15px #000c, inset -5px -5px 12px #6478ff40;
        border: 1px solid #454d83;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px;
    }
    .shake { animation: shake .6s; }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-10px) rotate(-4deg); }
        40%, 80% { transform: translateX(10px) rotate(4deg); }
    }
</style>
`);

document.body.innerHTML = `
<h1>Магічна куля</h1>
<p>Введи запитання та натисни на кулю, щоб отримати відповідь</p>
<input type="text" id="question" placeholder="Ваше запитання...">
<div class="ball" id="ball">
    <div class="answer" id="answer">8</div>
</div>
<p id="result" aria-live="polite"></p>`;

let answers = [
    "Так!", "Безумовно!", "Можливо.", "Найімовірніше.",
    "Запитай пізніше.", "Спробуй ще раз.", "Ні.",
    "Навряд чи.", "Дуже сумнівно.", "Перспективи добрі."
];

let ball = document.getElementById("ball");
let answer = document.getElementById("answer");
let result = document.getElementById("result");
let question = document.getElementById("question");

function askBall() {
    if (question.value.trim() === "") {
        result.textContent = "Спочатку введіть запитання!";
        return;
    }

    result.textContent = "Куля шукає відповідь...";
    answer.textContent = "...";
    ball.classList.remove("shake");
    void ball.offsetWidth;
    ball.classList.add("shake");

    setTimeout(() => {
        answer.textContent = answers[Math.floor(Math.random() * answers.length)];
        result.textContent = "Відповідь отримано!";
        question.value = "";
    }, 600);
}

ball.addEventListener("click", askBall);
