function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
      const chatContainer = document.getElementById('chat-container');
      const message = document.createElement('div');
      message.className = 'message';
      message.textContent = `You: ${userInput}`;
      chatContainer.appendChild(message);
      document.getElementById('user-input').value = '';
    }
  }
  