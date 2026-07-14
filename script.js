// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.classList.add("loader-hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }
});

// ==========================================
// MOBILE MENU
// ==========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

}

// ==========================================
// BACK TO TOP
// ==========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================================
// SCROLL REVEAL
// ==========================================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

// ==========================================
// COUNTER
// ==========================================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;
        const speed = 40;

        const update = () => {

            const current = +counter.innerText;

            if (current < target) {

                counter.innerText = Math.ceil(current + target / speed);

                setTimeout(update, 30);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const statSection = document.querySelector(".stats");

let started = false;

window.addEventListener("scroll", () => {

    if (!statSection || started) return;

    const top = statSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        started = true;
        startCounter();

    }

});

// ==========================================
// STICKY HEADER EFFECT
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});