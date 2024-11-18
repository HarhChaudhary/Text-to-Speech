// let speech = new SpeechSynthesisUtterance();

// let voices = [];

// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = () => {
//   voices = window.speechSynthesis.getVoices();

//   speech.voice = voices[0];
//   voices.forEach(
//     (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
// };

// voiceSelect.addEventListener("change", () =>{
//     speech.voice = voices[voiceSelect.value];
// });

// document.querySelector("button").addEventListener("click", () => {
//   speech.text = document.querySelector("textarea").value;
//   window.SpeechSynthesis.speak(speech);
// });


// Create the speech synthesis utterance object
let speech = new SpeechSynthesisUtterance();

// Array to hold available voices
let voices = [];

// Select the dropdown element for voice selection
let voiceSelect = document.querySelector("select");

// Function to update the available voices when they change
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  
  // Clear the dropdown options
  voiceSelect.innerHTML = "";

  // Add the voices to the dropdown list
  voices.forEach((voice, i) => {
    let option = new Option(voice.name, i);
    voiceSelect.add(option);
  });

  // Set the default voice (first voice in the list)
  if (voices.length > 0) {
    speech.voice = voices[0];
  }
};

// When the voice selection changes, update the speech voice
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Button click to trigger the speech synthesis
document.querySelector("button").addEventListener("click", () => {
  // Get the text from the textarea
  speech.text = document.querySelector("textarea").value;

  // Check if there is text to speak
  if (speech.text.trim() !== "") {
    window.speechSynthesis.speak(speech);
  } else {
    alert("Please enter some text!");
  }
});

