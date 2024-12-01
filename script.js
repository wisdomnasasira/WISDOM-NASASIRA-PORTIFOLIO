// script.js
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    alert('Thank you for contacting me!'); // Alert on form submission
});
// Responsive Navigation Toggle (Optional)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
