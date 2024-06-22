// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Example using a library like Swiper.js for a carousel
const swiper = new Swiper('.swiper-container', {
    // options
    slidesPerView: 'auto',
    spaceBetween: 20,
    // Optional: Add pagination, navigation buttons, etc.
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Example: Fetching data from a JSON file and dynamically populating content
fetch('data/projects.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            // Create HTML elements dynamically and append to a container
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// Form submission handling
const contactForm = document.getElementById('contact-form');

// Example: Basic form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate form fields here
    // Display appropriate messages or styles for invalid fields
});

// Example: Using Animate.css for animations
document.querySelector('.element').classList.add('animate__animated', 'animate__fadeInUp');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Example: You can add logic here to handle form submission, e.g., send data to a backend API
    // For simplicity, let's just log the form data to console
    const formData = new FormData(contactForm);
    console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    });

    // Clear form fields after submission
    contactForm.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.createElement('div');
    modal.classList.add('modal');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;

            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');

            const img = document.createElement('img');
            img.src = imgSrc;

            modalContent.appendChild(img);
            modal.appendChild(modalContent);

            document.body.appendChild(modal);
            modal.style.display = 'block';

            modal.addEventListener('click', function() {
                modal.style.display = 'none';
                modal.innerHTML = ''; // Clear modal content
            });
        });
    });
});