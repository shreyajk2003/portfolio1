// Dark mode toggle
const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute(
    'data-theme',
    currentTheme === 'dark' ? 'light' : 'night'
  );
});

// Typing effect
const roles = ['Web Developer', 'Problem Solver', 'Tech Enthusiast'];
let i = 0, j = 0, current = '', isDeleting = false;

function type() {
  const typing = document.getElementById('typing');
  if (!isDeleting && j <= roles[i].length) {
    current = roles[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    current = roles[i].substring(0, j--);
  }

  typing.innerHTML = current + '<span class="cursor">|</span>';

  if (!isDeleting && j === roles[i].length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();