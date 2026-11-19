document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // 2. Course & Gallery Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filter-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      filterItems.forEach((item) => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 3. Contact & Enrollment Form Handler
  const forms = document.querySelectorAll('.js-form');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusMsg = form.querySelector('.form-status');
      if (statusMsg) {
        statusMsg.textContent = 'Thank you! Your submission has been received by LM Academy.';
        statusMsg.style.color = '#8C2C3F';
        statusMsg.style.fontWeight = '600';
        statusMsg.style.marginTop = '12px';
      }
      form.reset();
    });
  });

  // 4. Maintenance Countdown Timer
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    let timeRemaining = 7200; // 2 hours in seconds
    setInterval(() => {
      if (timeRemaining <= 0) return;
      timeRemaining--;
      const hrs = String(Math.floor(timeRemaining / 3600)).padStart(2, '0');
      const mins = String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, '0');
      const secs = String(timeRemaining % 60).padStart(2, '0');
      countdownEl.textContent = `${hrs}h : ${mins}m : ${secs}s`;
    }, 1000);
  }
});