const subBtn = document.querySelector(".subtn");
const subEmail = document.querySelector("#subemail");

subBtn.addEventListener("click", () => {

    const email = subEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Please enter your email address");
        subEmail.focus();
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        subEmail.focus();
        return;
    }

    alert("Subscribed successfully!");
    subEmail.value = "";
});