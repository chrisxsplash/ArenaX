document.getElementById('nav-button').addEventListener('click', () => {
  const circularNav = document.getElementById('circular-nav');
  circularNav.classList.toggle('open');
});

document.querySelectorAll('.nav-item').forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`; // Add delay based on index
  item.addEventListener('click', () => {
    const url = item.getAttribute('data-url');
    window.location.href = url;
  });
});