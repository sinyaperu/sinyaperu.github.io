window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.hash);
      const targetOffsetTop = window.scrollY + target.getBoundingClientRect().top;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth',
      });
    });
  });
});