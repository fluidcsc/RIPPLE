// Mobile nav
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const dropdownToggle = document.getElementById('navDropdownToggle');
const dropdown = document.querySelector('.nav-dropdown');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
    if (dropdown) {
      dropdown.classList.remove('open');
    }
  });
}

if (dropdownToggle && dropdown) {
  dropdownToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdown.classList.toggle('open');
    dropdownToggle.classList.toggle('open');

  });
}

document.addEventListener('click', (event) => {
  if (dropdown && !dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
  }
});

document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});


// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});