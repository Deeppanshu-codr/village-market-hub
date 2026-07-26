// Village Market Hub - Minimal JS

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Simple form demo submit (no backend)
  const forms = document.querySelectorAll('form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const msg = form.querySelector('.success-msg');
      if (msg) {
        msg.style.display = 'block';
        form.reset();
        setTimeout(function () {
          msg.style.display = 'none';
        }, 4000);
      } else {
        alert('Thank you! Your request has been recorded (demo only).');
        form.reset();
      }
    });
  });
});