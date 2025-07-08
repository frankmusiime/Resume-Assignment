// === Responsive Navbar Toggle ===
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// === Contact Form Validation ===
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form from submitting immediately

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('❗ Please fill in all fields before submitting.');
      return;
    }

    // Simple email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert('❗ Please enter a valid email address.');
      return;
    }

    // If everything is okay:
    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset(); // Optional: clear the form
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul.nav-links a");
  
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

// === Theme Toggle ===
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

// Apply saved or preferred theme
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.body.classList.add('dark-theme');
  themeToggle.innerHTML = '<button id="theme-toggle" aria-label="Toggle light/dark mode" style="background: none; border: none; cursor: pointer; color: white;"><i class="fa-solid fa-sun"></i></button>';
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  themeToggle.innerHTML = isDark ? '<button id="theme-toggle" aria-label="Toggle light/dark mode" style="background: none; border: none; cursor: pointer; color: white;"><i class="fa-solid fa-sun"></i></button>' : '<button id="theme-toggle" aria-label="Toggle light/dark mode" style="background: none; border: none; cursor: pointer; color: white;"><i class="fa-solid fa-moon"></i></button>';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
