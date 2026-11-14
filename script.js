
// ===== MOBILE NAVIGATION =====

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close mobile menu after clicking a link

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ===== CURRENT YEAR =====

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===== SCROLL REVEAL ANIMATION =====

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach((element) => {
        observer.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

}


// ===== ACTIVE NAVIGATION =====

const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navItems.forEach((link) => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") ===
                        "#" + entry.target.id) {

                        link.classList.add("active");

                    }

                });

            }

        });

    }, {
        rootMargin: "-35% 0px -55% 0px"
    });

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

}


// ===== PLACEHOLDER PROJECT LINK =====

document.querySelectorAll("[data-placeholder]").forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        alert("Add your actual project URL here before publishing.");

    });

});
