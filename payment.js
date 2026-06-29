// Check Login

let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {

    alert("Please Login First");

    window.location.href = "login.html";

}

// Get Selected Plan

let selectedPlan = JSON.parse(localStorage.getItem("selectedPlan"));

if (!selectedPlan) {

    alert("No Subscription Plan Selected");

    window.location.href = "subscription.html";

}

// Display Plan Details

document.getElementById("plan").innerText =
"Plan : " + selectedPlan.plan;

document.getElementById("price").innerText =
"₹" + selectedPlan.price;


// Payment Form

const form = document.getElementById("paymentForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let holder = document.getElementById("holder").value.trim();

    let card = document.getElementById("card").value.trim();

    let expiry = document.getElementById("expiry").value;

    let cvv = document.getElementById("cvv").value.trim();


    // Card Holder Name

    if(holder==""){

        alert("Enter Card Holder Name");

        return;

    }

    if(!/^[A-Za-z ]+$/.test(holder)){

        alert("Card Holder Name should contain only alphabets");

        return;

    }


    // Card Number

    if(!/^[0-9]{16}$/.test(card)){

        alert("Card Number must contain exactly 16 digits");

        return;

    }


    // Expiry Date

    if(expiry==""){

        alert("Select Expiry Date");

        return;

    }

    let selectedDate = new Date(expiry + "-01");
    let today = new Date();

    if(selectedDate < today){

        alert("Card Expired");

        return;

    }


    // CVV

    if(!/^[0-9]{3}$/.test(cvv)){

        alert("CVV must contain exactly 3 digits");

        return;

    }


    // Save Subscription

    selectedPlan.status = "Active";

    localStorage.setItem("selectedPlan",
    JSON.stringify(selectedPlan));


    // Save Premium User

    localStorage.setItem("premiumUser",
    JSON.stringify({

        email: loggedInUser.email,

        plan: selectedPlan.plan,

        status: "Active"

    }));


    alert("🎉 Payment Successful!\n\nPremium Membership Activated.");

    window.location.href = "search1.html";

});