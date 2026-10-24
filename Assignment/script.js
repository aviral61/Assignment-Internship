// Standard AI Chat by DeepAI

// Import necessary libraries
import { createCanvas } from 'canvas';

// Initialize Canvas
let canvas = createCanvas(800, 600);
let ctx = canvas.getContext('2d');

// Set up the chat interface
class ChatInterface {
  constructor() {
    this.inputField = document.getElementById('input-field');
    this.outputField = document.getElementById('output-field');
  }

  // Send message to the server
  sendMessage() {
    const message = this.inputField.value.trim();
    if (message !== '') {
      this.inputField.value = '';
      // Send the message to the server (this will be handled by the server-side code)
      // For now, we'll just simulate a response
      this.handleResponse('Server Response: ' + message);
    }
  }

  // Handle response from the server
  handleResponse(response) {
    const formattedResponse = this.formatResponse(response);
    this.outputField.value += formattedResponse + '\n';
    this.scrollToBottom();
  }

  // Format the response for display
  formatResponse(response) {
    const formattedResponse = response.trim();
    const formattedResponseHtml = `
      <div class="response">
        <p class="response-text">${formattedResponse}</p>
      </div>
    `;
    return formattedResponseHtml;
  }

  // Scroll the output field to the bottom
  scrollToBottom() {
    this.outputField.scrollTop = this.outputField.scrollHeight;
  }
}

// Create a new instance of the chat interface
const chatInterface = new ChatInterface();

// Add event listeners
document.getElementById('send-button').addEventListener('click', () => {
  chatInterface.sendMessage();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    chatInterface.sendMessage();
  }
});

// Handle typing events
document.getElementById('input-field').addEventListener('input', () => {
  const message = chatInterface.inputField.value;
  if (message !== '') {
    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.textContent = 'Typing...';
    setTimeout(() => {
      typingIndicator.textContent = '';
    }, 1000);
  }
});

// Finalize the canvas initialization
canvas.id = 'canvas';
document.body.appendChild(canvas);

// Create a new typing indicator element
const typingIndicator = document.createElement('div');
typingIndicator.id = 'typing-indicator';
document.body.appendChild(typingIndicator);