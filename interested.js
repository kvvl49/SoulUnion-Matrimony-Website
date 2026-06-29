// Check Login
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
    alert("Please Login First");
    window.location.href = "login.html";
}

// Get Data
let profiles = JSON.parse(localStorage.getItem("profiles")) || [];
let interested = JSON.parse(localStorage.getItem("interested")) || [];

// Logged-in User Profile
let myProfile = profiles.find(function(profile){
    return profile.email === loggedInUser.email;
});

// Show Logged-in User
if(myProfile){

    document.getElementById("userName").innerText = myProfile.name;
    document.getElementById("profilePic").src = myProfile.photo;

}

// Container
let container = document.getElementById("interestedContainer");

// Empty List
if(interested.length === 0){

    container.innerHTML = `

    <div class="empty">

        <h2>No Interested Profiles 💌</h2>

        <br>

        <button onclick="window.location.href='search1.html'">

        Search Profiles

        </button>

    </div>

    `;

}
else{

    showInterested();

}

// Show Interested Profiles
function showInterested(){

    container.innerHTML = "";

    interested.forEach(function(index){

        let profile = profiles[index];

        if(profile){

            container.innerHTML += `

            <div class="card">

                <img src="${profile.photo}">

                <div class="card-content">

                    <h3>${profile.name}</h3>

                    <p><b>Age :</b> ${profile.age}</p>

                    <p><b>Gender :</b> ${profile.gender}</p>

                    <p><b>Religion :</b> ${profile.religion}</p>

                    <p><b>Occupation :</b> ${profile.occupation}</p>

                    <p><b>City :</b> ${profile.city}</p>

                    <div class="buttons">

                        <button class="view"
                        onclick="viewProfile(${index})">

                        👁 View Profile

                        </button>

                        <button class="remove"
                        onclick="removeInterested(${index})">

                        ❌ Remove

                        </button>

                    </div>

                </div>

            </div>

            `;

        }

    });

}

// View Profile
function viewProfile(index){

    localStorage.setItem("selectedProfile", index);

    window.location.href = "pview.html";

}

// Remove Interested Profile
function removeInterested(index){

    let confirmRemove = confirm("Remove this profile from Interested list?");

    if(confirmRemove){

        interested = interested.filter(function(item){

            return item != index;

        });

        localStorage.setItem("interested", JSON.stringify(interested));

        showInterested();

        if(interested.length === 0){

            container.innerHTML = `

            <div class="empty">

                <h2>No Interested Profiles 💌</h2>

                <br>

                <button onclick="window.location.href='search1.html'">

                Search Profiles

                </button>

            </div>

            `;

        }

    }

}

// Logout
function logout(){

    let confirmLogout = confirm("Are you sure you want to Logout?");

    if(confirmLogout){

        localStorage.removeItem("loggedInUser");

        alert("Logged Out Successfully");

        window.location.href = "index.html";

    }

}