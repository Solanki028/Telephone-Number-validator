// Function to validate phone number
function validatePhoneNumber(phoneNumber) {
    const phonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return phonePattern.test(phoneNumber);
}

// Function to handle check button click
function checkPhoneNumber() {
    const userInput = document.getElementById("user-input").value;
    const resultsDiv = document.getElementById("results-div");

    // Clear previous results
    resultsDiv.textContent = '';

    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    if (validatePhoneNumber(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
        resultsDiv.style.backgroundColor = "#d4edda";
        resultsDiv.style.color = "#155724";
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
        resultsDiv.style.backgroundColor = "#f8d7da";
        resultsDiv.style.color = "#721c24";
    }
}

// Function to clear results
function clearResults() {
    document.getElementById("user-input").value = '';
    document.getElementById("results-div").textContent = '';
}

// Event listeners
document.getElementById("check-btn").addEventListener("click", checkPhoneNumber);
document.getElementById("clear-btn").addEventListener("click", clearResults);
