const form = document.getElementById("profileForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // Personal Details
    const name = document.getElementById("name").value.trim();
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const mobile = document.getElementById("mobile").value.trim();
    const height = document.getElementById("height").value.trim();
    const religion = document.getElementById("religion").value;
    const caste = document.getElementById("caste").value.trim();
    const language = document.getElementById("language").value.trim();
    const status = document.getElementById("status").value;

    // Education
    const qualification = document.getElementById("qualification").value.trim();
    const college = document.getElementById("college").value.trim();
    const occupation = document.getElementById("occupation").value.trim();
    const income = document.getElementById("income").value.trim();

    // Family
    const father = document.getElementById("father").value.trim();
    const mother = document.getElementById("mother").value.trim();
    const familyType = document.getElementById("familyType").value;
    const familyStatus = document.getElementById("familyStatus").value;

    // Location
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const country = document.getElementById("country").value.trim();

    // Photo
    const photo = document.getElementById("photo").files[0];

    // Logged in user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if(!loggedInUser){
        alert("Please login first.");
        window.location.href="login.html";
        return;
    }

    // Name Validation
    const alpha = /^[A-Za-z ]+$/;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name should contain only alphabets");
        return;
    }

    if(gender==""){
        alert("Select Gender");
        return;
    }

    if(dob==""){
        alert("Select Date of Birth");
        return;
    }

    // Age Validation
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }

    if(gender=="Male" && age<21){
        alert("Male must be at least 21 years old");
        return;
    }

    if(gender=="Female" && age<18){
        alert("Female must be at least 18 years old");
        return;
    }

    if(!/^[0-9]{10}$/.test(mobile)){
        alert("Enter valid 10 digit mobile number");
        return;
    }

    if(height==""){
        alert("Enter Height");
        return;
    }

    if(religion==""){
        alert("Select Religion");
        return;
    }

    if(caste==""){
        alert("Enter Caste");
        return;
    }

    if(language==""){
        alert("Enter Mother Tongue");
        return;
    }

    if(status==""){
        alert("Select Marital Status");
        return;
    }

    if(qualification==""){
        alert("Enter Qualification");
        return;
    }

    if(college==""){
        alert("Enter College");
        return;
    }

    if(occupation==""){
        alert("Enter Occupation");
        return;
    }

    if(income==""){
        alert("Enter Annual Income");
        return;
    }

    if(!alpha.test(father)){
        alert("Father Name should contain only alphabets");
        return;
    }

    if(!alpha.test(mother)){
        alert("Mother Name should contain only alphabets");
        return;
    }

    if(familyType==""){
        alert("Select Family Type");
        return;
    }

    if(familyStatus==""){
        alert("Select Family Status");
        return;
    }

    if(!alpha.test(city)){
        alert("City should contain only alphabets");
        return;
    }

    if(!alpha.test(state)){
        alert("State should contain only alphabets");
        return;
    }

    if(!alpha.test(country)){
        alert("Country should contain only alphabets");
        return;
    }

    if(!photo){
        alert("Upload Profile Photo");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(){

        let profiles = JSON.parse(localStorage.getItem("profiles")) || [];

        const profile = {

            email: loggedInUser.email,

            name,
            gender,
            dob,
            age,
            mobile,
            height,
            religion,
            caste,
            language,
            status,
            qualification,
            college,
            occupation,
            income,
            father,
            mother,
            familyType,
            familyStatus,
            city,
            state,
            country,
            photo: reader.result

        };

        // Check if profile already exists
        const index = profiles.findIndex(function(item){
            return item.email === loggedInUser.email;
        });

        if(index !== -1){

            profiles[index] = profile;

        }else{

            profiles.push(profile);

        }

        localStorage.setItem("profiles", JSON.stringify(profiles));

        alert("Profile Created Successfully!");

        window.location.href="search1.html";

    };

    reader.readAsDataURL(photo);

});