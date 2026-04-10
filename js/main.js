// Fade-in sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section, .hero');

  // Set initial hidden state via class to avoid FOUC
  sections.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(16px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  // Small delay so the browser paints the hidden state first
  requestAnimationFrame(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    sections.forEach((section) => observer.observe(section));
  });
});
