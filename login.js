const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if(email === ""){
        document.getElementById("emailError").innerText = "Enter Email";
        return;
    }

    if(password === ""){
        document.getElementById("passwordError").innerText = "Enter Password";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(function(item){

        return item.email === email &&
               item.password === password;

    });

    if(!user){

        alert("Invalid Email or Password");

        return;

    }

    // Save logged in user
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Check whether profile already exists
    let profiles = JSON.parse(localStorage.getItem("profiles")) || [];

    let profile = profiles.find(function(item){

        return item.email === user.email;

    });

    alert("Login Successful");

    if(profile){

        window.location.href = "search1.html";

    }else{

        window.location.href = "cp.html";

    }

});