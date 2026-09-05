/* ==========================================
   SKILLBRIDGE - SIH FRONTEND JAVASCRIPT
========================================== */


/* ---------- START SKILL ASSESSMENT ---------- */

function startAssessment() {

    const questions = [
        "How comfortable are you with HTML and CSS?",
        "How comfortable are you with JavaScript?",
        "How comfortable are you with Python?",
        "How good are your communication skills?",
        "How comfortable are you with problem solving?"
    ];

    let score = 0;

    for (let i = 0; i < questions.length; i++) {

        let answer = prompt(
            "Question " + (i + 1) + " of " + questions.length +
            "\n\n" +
            questions[i] +
            "\n\nRate yourself from 1 to 5:"
        );

        let rating = parseInt(answer);

        if (!isNaN(rating) && rating >= 1 && rating <= 5) {
            score += rating;
        }
    }

    const percentage =
        Math.round((score / 25) * 100);

    alert(
        "🎯 Skill Assessment Completed!\n\n" +
        "Your Skill Score: " +
        percentage +
        "%\n\n" +
        "Your personalized skill profile can now be generated."
    );
}


/* ---------- GENERAL MESSAGE ---------- */

function showMessage(message) {

    alert("📌 " + message);

}


/* ---------- APPLY FOR JOB / INTERNSHIP ---------- */

function apply(opportunity) {

    const confirmation = confirm(
        "Apply for:\n\n" +
        opportunity +
        "\n\nDo you want to continue?"
    );

    if (confirmation) {

        alert(
            "✅ Application Submitted Successfully!\n\n" +
            "Opportunity: " +
            opportunity +
            "\n\n" +
            "You can track your application from Application Tracking."
        );

    }

}


/* ==========================================
   NAVIGATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const links =
        document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});


/* ==========================================
   SCROLL ANIMATION
========================================== */

const cards =
    document.querySelectorAll(
        ".feature-card, .stat-card, .opportunity"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(20px)";

    card.style.transition =
        "all 0.6s ease";

    observer.observe(card);

});


/* ==========================================
   SKILL PROGRESS ANIMATION
========================================== */

window.addEventListener("load", function () {

    const progressBars =
        document.querySelectorAll(".progress-bar");

    progressBars.forEach(function (bar) {

        const finalWidth =
            bar.style.width;

        bar.style.width = "0";

        setTimeout(function () {

            bar.style.width = finalWidth;

        }, 300);

    });

});


/* ==========================================
   WELCOME MESSAGE
========================================== */

window.addEventListener("load", function () {

    console.log(
        "🚀 SkillBridge Portal Loaded Successfully!"
    );

});


/* ==========================================
   LOGOUT FUNCTION
========================================== */

function logout() {

    const confirmation = confirm(
        "Are you sure you want to logout?"
    );

    if (confirmation) {

        alert(
            "You have been logged out successfully."
        );

        window.location.href =
            "index.html";

    }

}


/* ==========================================
   SEARCH OPPORTUNITIES
========================================== */

function searchOpportunities() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const searchText =
        searchInput.value.toLowerCase();

    const opportunities =
        document.querySelectorAll(
            ".opportunity"
        );

    opportunities.forEach(function (card) {

        const content =
            card.innerText.toLowerCase();

        if (content.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* ==========================================
   PROFILE MESSAGE
========================================== */

function openProfile() {

    alert(
        "👤 Student Profile\n\n" +
        "Name: Student\n" +
        "Skill Match: 72%\n" +
        "Verified Skills: 8\n" +
        "Certificates: 5\n" +
        "Projects: 4"
    );

}


/* ==========================================
   APPLICATION TRACKING
========================================== */

function trackApplication() {

    alert(
        "📊 Application Status\n\n" +
        "Frontend Developer Intern\n" +
        "Status: Under Review\n\n" +
        "Python Developer Intern\n" +
        "Status: Shortlisted"
    );

}


/* ==========================================
   AI SKILL MATCHING DEMO
========================================== */

function aiSkillMatching() {

    alert(
        "🤖 AI Skill Matching\n\n" +
        "Analyzing your:\n" +
        "• Skills\n" +
        "• Education\n" +
        "• Projects\n" +
        "• Career Interests\n\n" +
        "Finding the best industry opportunities..."
    );

    setTimeout(function () {

        alert(
            "🎯 Matching Complete!\n\n" +
            "Best Match:\n" +
            "Frontend Developer Intern\n\n" +
            "Skill Compatibility: 87%"
        );

    }, 1500);

}


