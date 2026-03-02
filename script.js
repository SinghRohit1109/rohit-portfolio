// Navbar shrink on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.style.padding = window.scrollY > 50 ? "12px 70px" : "20px 70px";
});

// Counter animation
const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
             const suffix = counter.getAttribute("data-suffix") || "";
            let count = 0;
             const speed = 20;

            const updateCount = () => {
                const increment = target / 100;
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + suffix;
                }
            };

            updateCount();
            observer.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));