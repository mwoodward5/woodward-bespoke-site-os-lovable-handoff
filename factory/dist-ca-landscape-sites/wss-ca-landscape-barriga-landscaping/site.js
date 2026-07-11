document.documentElement.dataset.ready='true';
document.querySelectorAll('[data-choice]').forEach((button) => {
  button.addEventListener('click', () => {
    const group = button.closest('.choice-row,.chip-cloud');
    if (group) group.querySelectorAll('.is-active').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const summary = document.querySelector('[data-estimate-summary]');
    if (summary) summary.textContent = button.dataset.choice + ' · photo-ready';
  });
});
