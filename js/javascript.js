const mario = document.querySelector(".mario");
const tubo = document.querySelector(".tubo");
const nuvens = document.querySelector(".nuvens");
const gameover = document.querySelector(".gameover");
const scoreDisplay = document.querySelector("#score");

document.addEventListener("keydown", function () {
    mario.classList.add("pulo");

    setTimeout(function () {
        mario.classList.remove("pulo");
    }, 600);
});

let scoreValue = 0;
let lastScoreValue = 0;

const scoreInterval = setInterval(function () {
    scoreValue++;
    scoreDisplay.textContent = scoreValue;
}, 1000);

const loop = setInterval(() => {
    const posicaoTubo = tubo.offsetLeft;
    const posicaoMario = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");
    const posicaoNuvens = nuvens.offsetLeft;

    if (posicaoTubo <= 160 && posicaoTubo > 0 && posicaoMario <= 110) {
        clearInterval(loop);
        clearInterval(scoreInterval);

        lastScoreValue = scoreValue;

        tubo.style.animation = "none";
        tubo.style.left = `${posicaoTubo}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${posicaoMario}px`;

        mario.src = "../assets/game-over.png";
        mario.style.width = "80px";
        mario.style.marginLeft = " 70px";

        nuvens.style.animation = "none";
        nuvens.style.left = `${posicaoNuvens}px`;

        gameover.style.display = "block";
    }
}, 10);
