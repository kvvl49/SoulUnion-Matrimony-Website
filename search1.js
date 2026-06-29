// Logged-in User
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
    window.location.href = "login.html";
}

// All Profiles
let profiles = JSON.parse(localStorage.getItem("profiles")) || [];

// Current User Profile
let myProfile = profiles.find(function(profile){
    return profile.email === loggedInUser.email;
});

// Display Logged-in User
if(myProfile){

    document.getElementById("userName").innerText = myProfile.name;

    document.getElementById("profilePic").src = myProfile.photo;

}

// Show other profiles only
let matchProfiles = profiles.filter(function(profile){

    return profile.email !== loggedInUser.email;

});

showProfiles(matchProfiles);


// ---------------- SHOW PROFILES ----------------

function showProfiles(data){

    let container = document.getElementById("profiles");

    container.innerHTML = "";

    if(data.length==0){

        container.innerHTML="<h2>No Profiles Found</h2>";

        return;

    }

    data.forEach(function(profile,index){

        container.innerHTML += `

        <div class="card">

        <img src="${profile.photo}">

        <div class="card-content">

        <h3>${profile.name}</h3>

        <p><b>Age :</b> ${profile.age}</p>

        <p><b>Religion :</b> ${profile.religion}</p>

        <p><b>Occupation :</b> ${profile.occupation}</p>

        <p><b>City :</b> ${profile.city}</p>

        <button class="view" onclick="viewProfile(${profiles.indexOf(profile)})">

        View Profile

        </button>

        <button class="short" onclick="addShortlist(${profiles.indexOf(profile)})">

        ❤️ Shortlist

        </button>

        <button class="interest" onclick="addInterested(${profiles.indexOf(profile)})">

        💌 Interested

        </button>

        </div>

        </div>

        `;

    });

}


// ---------------- FILTER ----------------

function filterProfiles(){

    let age=document.getElementById("age").value;

    let gender=document.getElementById("gender").value;

    let religion=document.getElementById("religion").value;

    let caste=document.getElementById("caste").value;

    let qualification=document.getElementById("qualification").value.toLowerCase();

    let occupation=document.getElementById("occupation").value.toLowerCase();

    let city=document.getElementById("city").value.toLowerCase();

    let state=document.getElementById("state").value.toLowerCase();

    let result=matchProfiles.filter(function(profile){

        return(

        (age=="" || profile.age==age)

        &&

        (gender=="" || profile.gender==gender)

        &&

        (religion=="" || profile.religion==religion)

        &&

        (caste=="" || profile.caste==caste)

        &&

        (qualification=="" || profile.qualification.toLowerCase().includes(qualification))

        &&

        (occupation=="" || profile.occupation.toLowerCase().includes(occupation))

        &&

        (city=="" || profile.city.toLowerCase().includes(city))

        &&

        (state=="" || profile.state.toLowerCase().includes(state))

        );

    });

    showProfiles(result);

}


// ---------------- RESET ----------------

function resetFilters(){

document.querySelectorAll(".filters input,.filters select").forEach(function(item){

item.value="";

});

showProfiles(matchProfiles);

}


// ---------------- SORT ----------------

function sortProfiles(){

let type=document.getElementById("sort").value;

let sorted=[...matchProfiles];

if(type=="name"){

sorted.sort(function(a,b){

return a.name.localeCompare(b.name);

});

}

if(type=="age"){

sorted.sort(function(a,b){

return a.age-b.age;

});

}

showProfiles(sorted);

}


// ---------------- VIEW PROFILE ----------------

function viewProfile(index){

localStorage.setItem("selectedProfile",index);

window.location.href="pview.html";

}


// ---------------- SHORTLIST ----------------

function addShortlist(index){

let shortlist=JSON.parse(localStorage.getItem("shortlist"))||[];

if(!shortlist.includes(index)){

shortlist.push(index);

localStorage.setItem("shortlist",JSON.stringify(shortlist));

alert("Added to Shortlist ❤️");

}else{

alert("Already Added");

}

}


// ---------------- INTERESTED ----------------

function addInterested(index){

let interested=JSON.parse(localStorage.getItem("interested"))||[];

if(!interested.includes(index)){

interested.push(index);

localStorage.setItem("interested",JSON.stringify(interested));

alert("Interest Sent 💌");

}else{

alert("Already Sent");

}

}


// ---------------- SUBSCRIBE ----------------

function subscribeAlert(){

alert("Please Subscribe to View Premium Profiles.");

window.location.href="subscription.html";

}


// ---------------- LOGOUT ----------------

function logout(){

let confirmLogout=confirm("Are you sure you want to logout?");

if(confirmLogout){

localStorage.clear();

window.location.href="index.html";

}

}