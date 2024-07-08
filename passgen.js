// Define all characters for generating strong passwords
const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

// Function to generate and display password
function Mixer() {
    const show = document.getElementById("show");
    const lim = document.getElementById("lim");
    const number = parseInt(lim.value);

    // Validate user input
    if (number > 0) {
        let pass = "";
        for (let index = 0; index < number; index++) {
            pass += char[Math.floor(Math.random() * char.length)];
        }
        show.textContent = pass;
    } else {
        show.textContent = "Please enter a valid number greater than 0.";
    }
}

// Function to copy password to clipboard
function copyToClipboard() {
    const show = document.getElementById("show");
    const text = show.textContent;

    navigator.clipboard.writeText(text).then(function() {
        alert("Password copied to clipboard!");
    }).catch(function(err) {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy text. Please try again.");
    });
}
