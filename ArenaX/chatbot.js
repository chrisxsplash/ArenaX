document.addEventListener('DOMContentLoaded', function() {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
  
    chatbotSend.addEventListener('click', function() {
      const userMessage = chatbotInput.value;
      if (userMessage.trim() !== '') {
        addMessage('user', userMessage);
        chatbotInput.value = '';
        setTimeout(() => {
          addMessage('bot', getBotResponse(userMessage));
        }, 1000);
      }
    });
  
    function addMessage(sender, message) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('chatbot-message', sender);
      messageDiv.textContent = message;
      chatbotMessages.appendChild(messageDiv);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  
    function getBotResponse(message) {
      // Simple bot response logic
      if (message.toLowerCase().includes('rental')) {
        return 'For arena rental inquiries, please contact us at rental@arenax.com or call (123) 456-7890.';
      } else if (message.toLowerCase().includes('contact')) {
        return 'For general inquiries, please contact us at info@arenax.com or call (123) 456-7890.';
      } else {
        return 'I\'m sorry, I didn\'t understand that. Can you please rephrase?';
      }
    }
  });