document.getElementById('boxOfficeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Validate phone number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }
  
    // Validate credit card number
    const card = document.getElementById('card').value;
    const cardPattern = /^[0-9]{16}$/;
    if (!cardPattern.test(card)) {
      alert('Please enter a valid credit card number.');
      return;
    }
  
    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // If all validations pass, show success message
    document.getElementById('boxOfficeForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
  });