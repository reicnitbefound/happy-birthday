const bouquet = document.getElementById("bokey");
const letter = document.getElementById("message");
const closeLetter = document.getElementById("closeLetter");
const petals = document.getElementById("petals");

function makePetal(count = 18) {
    for (let i = 0; i < count; i++) {
        const p = document.createElement("span");

        p.className = "petal";

        p.style.left =
            Math.random() * 100 + "%";

        p.style.setProperty(
            "--drift",
            (Math.random() * 260 - 130) + "px"
        );

        p.style.animationDuration =
            (3.5 + Math.random() * 3.5) + "s";

        p.style.animationDelay =
            (Math.random() * 0.8) + "s";

        p.style.transform =
            `rotate(${Math.random() * 360}deg)
             scale(${0.6 + Math.random() * 0.8})`;

        petals.appendChild(p);

        setTimeout(() => {
            p.remove();
        }, 8000);
    }
}

bouquet.addEventListener("click", () => {
    letter.classList.add("open");
    makePetal(30);
});

closeLetter.addEventListener("click", (event) => {
    event.stopPropagation();
    letter.classList.remove("open");
});

letter.addEventListener("click", (event) => {
    if (event.target === letter) {
        letter.classList.remove("open");
    }
});

document.addEventListener("click", (event) => {
    if (letter.classList.contains("open")) {
        return;
    }

    if (event.target.closest(".bokey")) {
        return;
    }

    const p = document.createElement("span");

    p.className = "petal";

    p.style.left =
        event.clientX + "px";

    p.style.top =
        event.clientY + "px";

    p.style.setProperty(
        "--drift",
        (Math.random() * 160 - 80) + "px"
    );

    p.style.animationDuration = "4s";

    petals.appendChild(p);

    setTimeout(() => {
        p.remove();
    }, 4500);
});
