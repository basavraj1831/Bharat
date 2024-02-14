document.addEventListener("DOMContentLoaded", function() {
    var rechargeForm = document.getElementById("rechargeForm");
    var message = document.getElementById("message");

    rechargeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var amount = document.getElementById("amount").value;
        var password = document.getElementById("password").value;

        // Check if the password is correct (dummy password for demonstration)
        if (password === "1234") {
            // Reset the form and display success message
            rechargeForm.reset();
            message.textContent = "Recharge successful!";
            message.style.color = "green";

            // Send a message to the parent window (assuming wallet.html is the parent)
        
                localStorage.setItem("rechargeAmount", amount);
                window.location.href = "wallet.html";
            
        } else {
            // Display error message for incorrect password
            message.textContent = "Incorrect password. Recharge failed!";
            message.style.color = "red";
        }
    });
});
