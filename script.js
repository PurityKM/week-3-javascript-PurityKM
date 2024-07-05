// String variable
var town = "Nyeri";

// Number variable
var price = 300;

// Boolean variable
var isBeautiful = true;

// Function to add two numbers
function add(x, y) {
    return x + y;
}

// Function to subtract the second number from the first
function subtract(x, y) {
    return x - y;
}

// Function to divide the first number by the second
function divide(x, y) {
    if (y === 0) {
        console.log("Error: Division by zero is not allowed.");
        return null;
    }
    return x / y;
}

// Function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

// Test the functions and log the results
var x = 100;
var y = 50;

console.log("Addition:", add(x, y)); // Output: Addition: 150
console.log("Subtraction:", subtract(x, y)); // Output: Subtraction: 50
console.log("Division:", divide(x, y)); // Output: Division: 2
console.log("Multiplication:", multiply(x, y)); // Output: Multiplication: 5000


document.addEventListener("DOMContentLoaded", function() {
    // Get references to the DOM elements
    const messageParagraph = document.getElementById("message");
    const userInput = document.getElementById("user-input");
    const changeButton = document.getElementById("change-button");
    const styleParagraph = document.getElementById("style-paragraph");
    const changeStyleButton = document.getElementById("change-style-button");
    const toggleParagraph = document.getElementById("toggle-paragraph");
    const toggleButton = document.getElementById("toggle-button");

    // Function to update the message paragraph with user input
    function updateMessage() {
        const newMessage = userInput.value;
        messageParagraph.textContent = newMessage;
    }

    // Function to change the style of the paragraph
    function changeStyle() {
        styleParagraph.style.color = "blue";
        styleParagraph.style.fontSize = "20px";
        styleParagraph.style.fontWeight = "bold";
    }

    // Function to toggle the visibility of the paragraph
    function toggleParagraphVisibility() {
        if (toggleParagraph.style.display === "none") {
            toggleParagraph.style.display = "block";
        } else {
            toggleParagraph.style.display = "none";
        }
    }

    // Add event listener for the button to change the message
    changeButton.addEventListener("click", updateMessage);

    // Add event listener for the button to change the style
    changeStyleButton.addEventListener("click", changeStyle);

    // Add event listener for the button to toggle paragraph visibility
    toggleButton.addEventListener("click", toggleParagraphVisibility);

    // Create and render the chart using Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Yearly Data',
                data: [65, 59, 80, 81, 56, 55, 40, 15, 22, 56, 90, 12],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});