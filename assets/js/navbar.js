(function() {
  const navbar = document.querySelector('.navbar');
  const progressBar = document.getElementById('progress-bar');

  // Scroll event
  window.addEventListener('scroll', () => {
    // Navbar scrolled
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Progress bar
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
})();

// ===== HAMBURGER MENU =====
(function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  if (!hamburger || !navLinks) return;

  // Toggle menu
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('open');
    body.classList.toggle('menu-open');
  });

  // Close when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      body.classList.remove('menu-open');
    });
  });

  // Close when clicking outside the menu (optional)
  document.addEventListener('click', function(e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      body.classList.remove('menu-open');
    }
  });
})();