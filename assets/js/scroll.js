(function() {
  const heroContent = document.querySelector('.hero-content');
  const profileCard = document.querySelector('.profile-card');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroSection = document.querySelector('#hero');

    if (!heroSection) return;

    const heroRect = heroSection.getBoundingClientRect();
    const heroHeight = heroSection.offsetHeight;

    // Parallax on hero (only when visible)
    if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
      const factor = Math.min(scrollY / heroHeight, 1);
      const translateY = factor * 40;

      if (heroContent) {
        heroContent.style.transform = `translateY(${translateY * 0.3}px)`;
      }
      if (profileCard) {
        profileCard.style.transform = `translateY(${translateY * 0.15}px)`;
      }
    }
  });
})();