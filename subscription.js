// Check Login

let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {

    alert("Please Login First");

    window.location.href = "login.html";

}



// Buy Subscription

function buyPlan(plan, price) {

    let confirmPlan = confirm(

        `You selected the ${plan} Plan.\n\nPrice : ₹${price}\n\nContinue to Payment?`

    );

    if (confirmPlan) {

        let subscription = {

            email: loggedInUser.email,
            plan: plan,
            price: price,
            status: "Pending"

        };

        localStorage.setItem(
            "selectedPlan",
            JSON.stringify(subscription)
        );

        window.location.href = "payment.html";

    }

}