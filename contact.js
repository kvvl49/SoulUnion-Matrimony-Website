const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if(name==="" || email==="" || phone==="" || subject==="" || message===""){
        alert("Please fill all fields.");
    }
    else{
        alert("Message Sent Successfully!");

        form.reset();
    }

});