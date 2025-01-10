// navigation ---


const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

// Open the navigation menu
menuIcon.addEventListener('click', () => {
    navLinks.classList.add('show');
    overlay.classList.add('show');
});

// Close the navigation menu
closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('show');
    overlay.classList.remove('show');
});

// Close the navigation menu when clicking the overlay
overlay.addEventListener('click', () => {
    navLinks.classList.remove('show');
    overlay.classList.remove('show');
});


// contact page ---


// Initialize EmailJS
emailjs.init('Jem4_csKgwpMi2SVy'); // Replace with your EmailJS Public Key

// Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('service_4dw37wh', 'template_v7gur8y', this)
        .then(function() {
            alert('Email Sent Successfully!');
        }, function(error) {
            alert('Failed to Send Email: ' + error.text);
        });
});









