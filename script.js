const screen = document.getElementById("screen");
let stage = 1;
let timerInterval = null;

/* ---------------- 1번 화면 ---------------- */
function showFirstScreen() {
    screen.innerHTML = "";
    document.body.style.overflow = "hidden";
    screen.style.cursor = "pointer";

    screen.innerHTML = `
        <div class="title">
            Feliz cumpleaños mi amor~!!
        </div>
    `;
}

/* ---------------- 공통 타이핑 화면 ---------------- */
function showTypingScreen(text) {
    screen.innerHTML = "";
    document.body.style.overflow = "hidden";
    screen.style.cursor = "pointer";

    const typingDiv = document.createElement("div");
    typingDiv.classList.add("typing");
    screen.appendChild(typingDiv);

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingDiv.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 60);
        }
    }

    typeWriter();
}

/* ---------------- 3번 화면 (시) ---------------- */
function showThirdScreen() {
    screen.innerHTML = "";
    document.body.style.overflow = "auto";
    screen.style.cursor = "pointer";

    const box = document.createElement("div");
    box.classList.add("pink-box");

    box.innerText = `I love you without knowing how, or when, or from where.
There is nothing we can measure or explain about us—
no map, no origin, no logic—
only the quiet certainty that it is real.
I move forward with the confidence
that a promised happiness waits for me,
somewhere I have never been before,
yet somehow have always known.
How do I love thee? Let me count the ways.
I love thee to the depth and breadth and height
my soul can reach,
when feeling out of sight
for the ends of being and ideal grace.
I love you as the plant that does not bloom,
yet carries within itself
the hidden light of flowers—
and because of your love,
that once-silent fragrance
now rises softly through my body.
For you, I would choose chaos over peace,
and through you
I discover a peace among chaos
others hear our voice smiling and crying 
but all i hear is a voice less loud, through its joys and fears, 
than the two hearts beating each to each
i love you with the breathe, smiles, tears, of all my life 
and if God choose, i shall but love thee better after death.

-from your biggest lover hun <3`;

    screen.appendChild(box);
}

/* ---------------- 4번 화면 (타이머) ---------------- */
function showFourthScreen() {
    screen.innerHTML = "";
    document.body.style.overflow = "hidden";
    screen.style.cursor = "default";

    // 상단 흰 카드
    const topCard = document.createElement("div");
    topCard.classList.add("top-card");
    topCard.innerText = "From the start";

    // 중앙 회색 카드
    const timerCard = document.createElement("div");
    timerCard.classList.add("timer-card");

    const timer = document.createElement("div");
    timer.classList.add("timer");
    timer.id = "relationship-timer";

    timerCard.appendChild(timer);

    screen.appendChild(topCard);
    screen.appendChild(timerCard);

    startTimer();
}

/* ---------------- 코스타리카 기준 타이머 ---------------- */
function startTimer() {

    // Costa Rica = UTC -6
    const startDate = new Date("2025-12-10T12:00:00-06:00");

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const timerElement = document.getElementById("relationship-timer");

        if (diff < 0) {
            timerElement.innerText = "It hasn't started yet 🤍";
            return;
        }

        const seconds = Math.floor(diff / 1000) % 60;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        timerElement.innerText =
            `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

/* ---------------- 클릭 이벤트 ---------------- */
screen.addEventListener("click", () => {

    if (stage === 1) {
        showTypingScreen("Te amo mi amor, ¿llego un poco tarde?, Te escribí un poema");
        stage++;
    }

    else if (stage === 2) {
        showTypingScreen("Dedico este poema a mi amada Valeria <3");
        stage++;
    }

    else if (stage === 3) {
        showThirdScreen();
        stage++;
    }

    else if (stage === 4) {
        showFourthScreen();
        stage++;
    }

});

/* ---------------- 시작 실행 ---------------- */
showFirstScreen();
