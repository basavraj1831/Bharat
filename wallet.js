// Retrieve the recharge amount from localStorage
let rechargeAmount = parseFloat(localStorage.getItem("rechargeAmount"));

// Retrieve the flag indicating whether the recharge amount has been added to the wallet balance
let rechargeAdded = localStorage.getItem("rechargeAdded");

// Display the wallet balance
if (!isNaN(rechargeAmount) && rechargeAdded !== "true") {
    // Add the recharge amount to the wallet balance
    let walletBalance = parseFloat(localStorage.getItem("walletBalance"));
    if (isNaN(walletBalance)) {
        walletBalance = 0;
    }
    walletBalance += rechargeAmount;
    
    // Update the wallet balance in localStorage
    localStorage.setItem("walletBalance", walletBalance);
    
    // Set the flag to indicate that recharge amount has been added
    localStorage.setItem("rechargeAdded", "true");

    // Display the wallet balance
    document.getElementById("walletAmount").innerText = "Wallet Balance: " + walletBalance;
} else if (!isNaN(rechargeAmount) && rechargeAdded === "true") {
    // Recharge amount has already been added, just display the wallet balance
    let walletBalance = parseFloat(localStorage.getItem("walletBalance"));
    if (isNaN(walletBalance)) {
        walletBalance = 0;
    }
    document.getElementById("walletAmount").innerText = "Wallet Balance: " + walletBalance;
} else {
    // Recharge amount is not available or recharge has not occurred
    document.getElementById("walletAmount").innerText = "Wallet Balance: 0";
}
