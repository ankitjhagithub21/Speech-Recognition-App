// Get references to the HTML elements
const startButton = document.getElementById("startButton");
const output = document.getElementById("output");

// Initialize the SpeechRecognition API
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// Set recognition properties
recognition.interimResults = true; // Get interim results while speaking
recognition.lang = "en-US"; // Set the recognition language

// Event listener for the start button
startButton.addEventListener("click", () => {
    startButton.textContent = "Listening...";
    recognition.start();
});

// Event listener for when speech is recognized
recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join("");

    output.value = transcript;
};

// Event listener for when the speech recognition ends
recognition.onend = () => {
    startButton.textContent = "Start Listening";
};

// Event listener for any errors
recognition.onerror = (event) => {
    output.textContent = "Error: " + event.error;
};
