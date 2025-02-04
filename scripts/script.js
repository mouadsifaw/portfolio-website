// 1. Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 2. Simple form validation for the contact form (if present)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
      }
    });
  }
  
  // 3. Sticky Navbar
  window.onscroll = function () {
    const navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };
  
  // 4. Scroll-to-top button
  const scrollTopButton = document.createElement('button');
  scrollTopButton.innerText = '↑';
  scrollTopButton.classList.add('scroll-top');
  document.body.appendChild(scrollTopButton);
  
  scrollTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  };
  
  // 5. Scroll animations (fade-in) for elements when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });
  
  const elements = document.querySelectorAll('.fade');
  elements.forEach(element => {
    observer.observe(element);
  });
// Fade-in effect when the page loads
window.addEventListener('load', function() {
    const projectSections = document.querySelectorAll('.fade');
    projectSections.forEach(section => {
        section.classList.add('visible');
    });
});

// Scroll to top button functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.backgroundColor = '#3498db';
scrollToTopBtn.style.color = '#fff';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.display = 'none';

document.body.appendChild(scrollToTopBtn);

// Show or hide the button based on scroll position
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll smoothly to top when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
  