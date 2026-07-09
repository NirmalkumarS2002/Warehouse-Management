const submitBtn = document.querySelector(".form-submit");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

// Name field - letters and spaces only
nameInput.addEventListener("input", () => {
    nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, "");
});

// Phone field - numbers only
phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (nameInput.value.trim() === "") {
        alert("Please enter your name");
        nameInput.focus();
    }

    else if (!nameRegex.test(nameInput.value.trim())) {
        alert("Name should contain only letters");
        nameInput.focus();
    }

    else if (emailInput.value.trim() === "") {
        alert("Please enter your email");
        emailInput.focus();
    }

    else if (!emailRegex.test(emailInput.value.trim())) {
        alert("Please enter a valid email address");
        emailInput.focus();
    }

    else if (phoneInput.value.trim() === "") {
        alert("Please enter your phone number");
        phoneInput.focus();
    }

    else if (!phoneRegex.test(phoneInput.value.trim())) {
        alert("Phone number must contain exactly 10 digits");
        phoneInput.focus();
    }

    else if (subjectInput.value.trim() === "") {
        alert("Please enter the subject");
        subjectInput.focus();
    }

    else if (messageInput.value.trim() === "") {
        alert("Please enter your message");
        messageInput.focus();
    }

    else {
        alert("Message sent successfully!");

        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";
    }
});