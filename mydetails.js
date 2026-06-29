// Check Login
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
    alert("Please Login First");
    window.location.href = "login.html";
}

// Get All Profiles
let profiles = JSON.parse(localStorage.getItem("profiles")) || [];

// Find Logged-in User Profile
let myProfile = profiles.find(function(profile){
    return profile.email === loggedInUser.email;
});

if(!myProfile){
    alert("Profile Not Found");
    window.location.href = "cp.html";
}

// Display Profile

document.getElementById("photo").src = myProfile.photo;
document.getElementById("name").innerText = myProfile.name;
document.getElementById("gender").innerText = myProfile.gender;
document.getElementById("dob").innerText = myProfile.dob;
document.getElementById("age").innerText = myProfile.age;
document.getElementById("mobile").innerText = myProfile.mobile;
document.getElementById("height").innerText = myProfile.height;
document.getElementById("religion").innerText = myProfile.religion;
document.getElementById("caste").innerText = myProfile.caste;
document.getElementById("language").innerText = myProfile.language;
document.getElementById("status").innerText = myProfile.status;
document.getElementById("qualification").innerText = myProfile.qualification;
document.getElementById("college").innerText = myProfile.college;
document.getElementById("occupation").innerText = myProfile.occupation;
document.getElementById("income").innerText = myProfile.income;
document.getElementById("father").innerText = myProfile.father;
document.getElementById("mother").innerText = myProfile.mother;
document.getElementById("familyType").innerText = myProfile.familyType;
document.getElementById("familyStatus").innerText = myProfile.familyStatus;
document.getElementById("city").innerText = myProfile.city;
document.getElementById("state").innerText = myProfile.state;
document.getElementById("country").innerText = myProfile.country;


// Logout

function logout(){

    let choice = confirm("Are you sure you want to logout?");

    if(choice){

        localStorage.removeItem("loggedInUser");

        alert("Logged Out Successfully");

        window.location.href = "index.html";

    }

}