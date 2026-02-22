
// Wait until DOM loads
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".credit-card");
    const cardNumber = document.getElementById("cardNumber");
    const cardName = document.getElementById("cardName");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const cvv = document.getElementById("cvv");

    // Create message container
    const message = document.createElement("div");
    message.classList.add("form-message");
    form.appendChild(message);

    // ===============================
    // FORMAT CARD NUMBER (adds spaces)
    // ===============================
    cardNumber.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.substring(0, 16);

        // Add space every 4 digits
        value = value.replace(/(.{4})/g, "$1 ").trim();
        e.target.value = value;
    });

    // ===============================
    // FORM SUBMIT VALIDATION
    // ===============================
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        message.textContent = "";
        message.style.color = "red";

        // Remove spaces for checking
        const cleanedCardNumber = cardNumber.value.replace(/\s/g, "");

        // -------------------------------
        // STEP 1: Validate Card Number
        // -------------------------------
        if (cleanedCardNumber !== "1234123412341234") {
            showError("Invalid card number. Use 1234123412341234");
            return;
        }

        // -------------------------------
        // STEP 2: Validate Name
        // -------------------------------
        if (cardName.value.trim() === "") {
            showError("Please enter the card holder name.");
            return;
        }

        // -------------------------------
        // STEP 3: Validate Month
        // -------------------------------
        const monthValue = parseInt(month.value);
        if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
            showError("Enter a valid month (01–12).");
            return;
        }

        // -------------------------------
        // STEP 4: Validate Year
        // -------------------------------
        const yearValue = parseInt(year.value);
        if (isNaN(yearValue) || year.value.length !== 2) {
            showError("Enter a valid 2-digit year.");
            return;
        }

        // -------------------------------
        // STEP 5: Check Expiration
        // -------------------------------
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100; // last 2 digits
        const currentMonth = currentDate.getMonth() + 1;

        if (
            yearValue < currentYear ||
            (yearValue === currentYear && monthValue < currentMonth)
        ) {
            showError("Card is expired.");
            return;
        }

        // -------------------------------
        // STEP 6: Validate CVV
        // -------------------------------
        if (!/^\d{3}$/.test(cvv.value)) {
            showError("CVV must be 3 digits.");
            return;
        }

        // -------------------------------
        // SUCCESS
        // -------------------------------
        showSuccess("✅ Payment successful! Your card has been validated.");

        form.reset();
    });

    // ===============================
    // HELPER FUNCTIONS
    // ===============================

    function showError(msg) {
        message.textContent = msg;
        message.style.color = "red";
    }

    function showSuccess(msg) {
        message.textContent = msg;
        message.style.color = "lightgreen";
    }

});