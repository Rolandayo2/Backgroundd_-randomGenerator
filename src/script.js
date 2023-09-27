// Get the button element by its ID
const colorButton = document.getElementById("colorButton");

// Function to change the background color
function changeColor() {
    // Generate a random RGB color
    const randomColor = 'rgb(' +
        Math.round(Math.random() * 255) + ',' +
        Math.round(Math.random() * 255) + ',' +
        Math.round(Math.random() * 255) + ')';

    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
}

// Add a click event listener to the button
colorButton.addEventListener("click", changeColor);
