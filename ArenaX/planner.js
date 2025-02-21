document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotPopup = document.getElementById('chatbot-popup');
    const navItems = document.querySelectorAll('.nav-item');
  
    sidebar.addEventListener('mouseenter', function() {
      sidebar.classList.add('expanded');
    });
  
    sidebar.addEventListener('mouseleave', function() {
      sidebar.classList.remove('expanded');
    });
  
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        const url = item.getAttribute('data-url');
        if (url) {
          window.location.href = url;
        }
      });
    });
  
    chatbotToggle.addEventListener('click', function() {
      chatbotPopup.style.display = 'flex';
    });
  });
  
  function closeChatbot() {
    document.getElementById('chatbot-popup').style.display = 'none';
  }