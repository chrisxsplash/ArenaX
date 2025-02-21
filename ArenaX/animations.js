// Function to create diagonal bars animation
function createDiagonalBars() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    bar.style.animationDelay = `${index * 0.5}s`;
  });
}

// Call the function to create diagonal bars animation
createDiagonalBars();

// Hide splash screen and show homepage after delay
setTimeout(() => {
  document.querySelector('.splash').style.opacity = '0';
  setTimeout(() => {
    document.querySelector('.splash').style.display = 'none';
    const homepage = document.getElementById('homepage');
    homepage.style.display = 'block';
    fadeInElements();
  }, 1000); // 1 second delay to match the fade-out animation
}, 5000); // 5 seconds delay

// Function to fade in elements
function fadeInElements() {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('.section');

  header.style.opacity = '0';
  header.style.transform = 'translateY(-20px)';
  header.style.transition = 'opacity 1s ease, transform 1s ease';
  header.style.opacity = '1';
  header.style.transform = 'translateY(0)';

  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = `opacity 1s ease ${index * 0.2}s, transform 1s ease ${index * 0.2}s`;
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
  });
}

// Function to handle the zoom and pan effect
function handleZoomAndPan() {
  const splashLogo = document.querySelector('.splash-logo');
  const splashContent = document.querySelector('.splash-content');

  setTimeout(() => {
    splashContent.style.transform = 'scale(2) translateX(-20vw)';
  }, 2000); // Zoom in on "ARE"

  setTimeout(() => {
    splashLogo.textContent = 'NAX';
    splashContent.style.transform = 'scale(2) translateX(20vw)';
  }, 4000); // Pan to the other side with "NAX" fading in

  setTimeout(() => {
    splashLogo.textContent = 'ARENAX';
    splashContent.style.transform = 'scale(1) translateX(0)';
  }, 6000); // Pan back to show "ARENAX"
}

// Call the function to handle the zoom and pan effect
handleZoomAndPan();