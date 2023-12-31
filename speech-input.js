function startSpeechRecognition() {
    const startButton = document.getElementById('start-recognition');
    const transcriptionBox = document.getElementById('transcription');
  
    const recognition = new webkitSpeechRecognition(); // Using the Web Speech API
  
    recognition.onstart = () => {
      startButton.disabled = true;
    };
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      transcriptionBox.textContent = `Transcription: ${transcript}`;
    };
  
    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };
  
    recognition.onend = () => {
      startButton.disabled = false;
    };
  
    recognition.start();
  }
  