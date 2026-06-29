let profiles = JSON.parse(localStorage.getItem("profiles"));

let index = localStorage.getItem("selectedProfile");

let data = profiles[index];


// old values show
document.getElementById("name").value = data.name;
document.getElementById("age").value = data.age;
document.getElementById("gender").value = data.gender;


let newPhoto = data.photo;


// change photo
document.getElementById("photo").addEventListener("change", function(e){

    let file = e.target.files[0];

    let reader = new FileReader();

    reader.onload = function(){

        newPhoto = reader.result;

    }

    reader.readAsDataURL(file);

});


// update function
function updateProfile(){

    profiles[index] = {

        ...profiles[index],

        name: document.getElementById("name").value,

        age: document.getElementById("age").value,

        gender: document.getElementById("gender").value,

        photo: newPhoto

    };


    localStorage.setItem("profiles", JSON.stringify(profiles));


    alert("Profile Updated Successfully");


    window.location.href="pview.html";

}