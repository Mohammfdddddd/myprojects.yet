// Menu Toggle for Mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');
const closeIcon = document.querySelector('header .close-x');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('close');
    closeIcon.classList.toggle('active');
});
closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
   
    menuToggle.classList.remove('close');
    closeIcon.classList.toggle('active');
});

// Close menu when a link is clicked (mobile)
const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});

// Search Functionality
const searchInput = document.getElementById('search');
const bookContainer = document.getElementById('book-container');

if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        const books = bookContainer.getElementsByClassName('book');
        
        Array.from(books).forEach(book => {
            const title = book.getElementsByTagName('h3')[0].innerText.toLowerCase();
            if (title.includes(filter)) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
        });
    });
}

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
        
        if (name === '' || email === '' || message === '') {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please fill in all fields.';
            return;
        }
        
        // Simple email regex for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please enter a valid email address.';
            return;
        }
        
        // Simulate form submission
        formMessage.style.color = 'green';
        formMessage.textContent = 'Thank you for your message!';
        contactForm.reset();
    });
}

// Add to Cart Functionality
const addToCartBtn = document.getElementById('add-to-cart');

if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
        alert('Book added to cart!');
    });
}

// Image Slider (if you add a slider)
let slideIndex = 0;
const slides = document.getElementsByClassName('slide');

function showSlides() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    if(slides[0]){
        slides[slideIndex-1].style.display = 'block';
    }
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

window.onload = function() {
    showSlides();
};

// Popup Modal (Example: Newsletter Signup)
const modal = document.getElementById('newsletter-modal');
const closeModal = document.getElementById('close-modal');

if (modal) {
    setTimeout(() => {
        modal.style.display = 'block';
    }, 5000); // Show modal after 5 seconds

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

// Dynamic Content Loading (Example: Load Blog Posts)
const blogSection = document.querySelector('.blog');

if (blogSection) {
    // Fetch or dynamically load blog posts here
    // For simplicity, this is left as a placeholder
}

// Animation Effects (Example: Fade In on Scroll)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
