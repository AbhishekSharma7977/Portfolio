document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('nav');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
  });
});