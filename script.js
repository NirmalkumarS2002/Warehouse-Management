//menu toggle
const menubtn = document.querySelector(".menubtn")
const closebtn = document.querySelector(".closebtn")
const menubar = document.querySelector(".menubar")

menubtn.addEventListener("click", () => {
    menubar.classList.add("visible")
})

closebtn.addEventListener("click", () => {
    menubar.classList.remove("visible")
})

//errorpage

let errorpage = document.querySelectorAll(".errorpage")
errorpage.forEach((error) => {
    error.addEventListener("click", () => {
        window.location.href = "404.html"
    })
})


//newsletter

const subscribeBtn = document.querySelector(".subscribe-btn");
const footerEmail = document.querySelector("#footer-email");

subscribeBtn.addEventListener("click", () => {
    const email = footerEmail.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Please enter your email address");
        footerEmail.focus();
    }
    else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        footerEmail.focus();
    }
    else {
        alert("Subscribed successfully!");
        footerEmail.value = "";
    }
});

// reveal animation 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showed");
        }
    })
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
})

document.querySelectorAll(".reveal, .reveal-right, .reveal-left").forEach((el) => {
    observer.observe(el)
})