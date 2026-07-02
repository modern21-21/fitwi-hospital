
/* ================= STICKY NAVBAR EFFECT ================= */
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
        navbar.style.backgroundColor = "#0d6efd";
    } else {
        navbar.classList.remove("shadow");
    }
});

/* ================= MOBILE MENU AUTO CLOSE ================= */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        let navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ================= BACK TO TOP BUTTON ================= */
let backToTop = document.createElement("button");
backToTop.innerHTML = "↑";
backToTop.className = "btn btn-success position-fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
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

/* ================= SCROLL ANIMATION ================= */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, section, .p-4").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});

/* ================= APPOINTMENT FORM VALIDATION ================= */
const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("fullname").value;
        let email = document.getElementById("appointmentEmail").value;
        let phone = document.getElementById("phone").value;
        let department = document.getElementById("department").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;

        if (!name || !email || !phone || !department || !date || !time) {
            alert("⚠️ Please fill all fields before submitting.");
            return;
        }

        showPopup("✅ Appointment booked successfully!");
        appointmentForm.reset();
    });
}

/* ================= LOGIN VALIDATION (FOR FUTURE LOGIN PAGE) ================= */
const loginForm = document.querySelector("#loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        if (!email || !password) {
            alert("⚠️ Please enter email and password.");
            return;
        }

        showPopup("✅ Login successful!");
        loginForm.reset();
    });
}

/* ================= POPUP MESSAGE ================= */
function showPopup(message) {
    let popup = document.createElement("div");

    popup.innerText = message;
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.background = "#00c896";
    popup.style.color = "white";
    popup.style.padding = "15px 20px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    popup.style.zIndex = "9999";
    popup.style.fontWeight = "500";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 3000);
}

/* ================= PAGE LOADING EFFECT ================= */
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "1s";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});