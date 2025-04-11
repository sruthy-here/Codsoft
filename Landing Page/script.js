// Coffee info toggle
document.getElementById('infoBtn').addEventListener('click', function () {
  document.getElementById('coffeeInfo').classList.toggle('hidden');
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
