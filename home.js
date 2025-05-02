// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
  });
  
  // Form submission
  
// Toggle mobile navbar
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('active');
  });
    