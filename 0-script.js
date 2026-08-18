// Small progressive-enhancement touch: mark external email action for analytics later.
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Contact link clicked');
  });
});
