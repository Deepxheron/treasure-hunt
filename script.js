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


// Subtle parallax effect while scrolling

window.addEventListener("scroll", () => {

    const heroContent = document.querySelector(".hero-content");

    if (!heroContent) return;

    const scrollPosition = window.scrollY;

    heroContent.style.transform =
        `translateY(${scrollPosition * 0.15}px)`;
});


// Ticket button

function buyTicket() {
    alert("Ticket booking will be available soon!");
}