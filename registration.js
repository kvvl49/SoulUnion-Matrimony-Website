const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("fname").value.trim();

    const gender = document.querySelector("input[name='gender']:checked");

    const dob = document.getElementById("dob").value;

    const mobile = document.getElementById("mobile").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("cpassword").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name should contain only alphabets");
        return;
    }

    if (gender === null) {
        alert("Please select your gender");
        return;
    }

    if (dob === "") {
        alert("Please select your Date of Birth");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    if (gender.value === "Male" && age < 21) {
        alert("Male must be at least 21 years old");
        return;
    }

    if (gender.value === "Female" && age < 18) {
        alert("Female must be at least 18 years old");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number");
        return;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let emailExists = users.some(function (user) {
        return user.email === email;
    });

    if (emailExists) {
        alert("Email already registered");
        return;
    }

    const user = {
        name: name,
        gender: gender.value,
        dob: dob,
        mobile: mobile,
        email: email,
        password: password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    form.reset();

    window.location.href = "login.html";
});