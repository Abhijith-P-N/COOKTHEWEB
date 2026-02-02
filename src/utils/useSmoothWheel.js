export function scrollToSection(id, duration = 900) {
  const target = document.querySelector(id);
  if (!target) return;

  const start = window.scrollY;
  const end =
    target.getBoundingClientRect().top + window.scrollY - 100; // navbar height
  const distance = end - start;
  let startTime = null;

  function animate(time) {
    if (!startTime) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);

    // easeInOutCubic
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
