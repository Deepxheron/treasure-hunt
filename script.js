const animatedSections = document.querySelectorAll(
    ".section, .tickets"
);

const animatedCards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedSections.forEach((section) => {
    observer.observe(section);
});

animatedCards.forEach((card) => {
    observer.observe(card);
});


// =========================
// TREASURE MAP ANIMATION
// =========================

const trail = document.querySelector(".trail-progress");

const checkpoints = document.querySelectorAll(".checkpoint");

const treasure = document.querySelector(".treasure");


function updateTreasureMap() {

    const map = document.querySelector(".treasure-map");

    if (!map || !trail) return;

    const rect = map.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    const mapHeight = rect.height;

    const progress =
        (windowHeight - rect.top) /
        (windowHeight + mapHeight);

    const clampedProgress =
        Math.max(0, Math.min(1, progress));

    const pathLength = 2500;

    trail.style.strokeDashoffset =
        pathLength - (pathLength * clampedProgress);


    // Reveal checkpoints

    checkpoints.forEach((checkpoint, index) => {

        const revealPoint =
            0.20 + index * 0.23;

        if (clampedProgress > revealPoint) {
            checkpoint.classList.add("visible");
        }

    });


    // Reveal treasure near the end

    if (clampedProgress > 0.82) {
        treasure.classList.add("visible");
    }

}

window.addEventListener(
    "scroll",
    updateTreasureMap,
    { passive: true }
);

updateTreasureMap();


// =========================
// TICKET
// =========================

function buyTicket() {

    alert(
        "Ticket booking will be available soon!"
    );

}