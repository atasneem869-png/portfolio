
var form = document.getElementById("informationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var address = document.getElementById("address").value.trim();

    var namePattern = /^[A-Za-z ]+$/;
    var phonePattern = /^[0-9]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Please enter your name");
    }

    else if (!namePattern.test(name)) {
        alert("Name must contain letters only");
    }

    else if (phone === "") {
        alert("Please enter your phone number");
    }

    else if (!phonePattern.test(phone)) {
        alert("Phone number must contain numbers only");
    }

    else if (email === "") {
        alert("Please enter your email");
    }

    else if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
    }

    else if (address === "") {
        alert("Please enter your address");
    }

    else {
        alert("Your information has been submitted successfully");
    }

});

