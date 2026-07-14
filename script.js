document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");
    const startBtn = document.getElementById("start-learning-btn");

    // सेक्सन स्विच गर्ने फङ्सन
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === `${sectionId}-section`) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    // मेनुका लिंकहरू क्लिक गर्दा सेक्सन फेर्ने
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute("data-section");
            showSection(targetSection);
        });
    });

    // "Start Learning" बटन थिच्दा सिधै Grammar सेक्सनमा लैजाने
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            showSection("grammar");
        });
    }
});
