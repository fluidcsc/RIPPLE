// =========================
// NAVIGATION TOGGLE
// =========================
function initNavbar() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#nav-menu');

  if (!toggle || !menu) {
    console.warn("Navbar elements not found.");
    return;
  }

  function toggleMenu() {
    const isOpen = toggle.classList.toggle('open');
    menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  }

  toggle.addEventListener('click', toggleMenu);

  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });
}

window.initNavbar = initNavbar;


// =========================
// NAVBAR VISIBILITY + TRANSLUCENCY
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  navbar.classList.add("visible");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  navbar.addEventListener("mouseenter", () => {
    navbar.classList.remove("scrolled");
  });

  navbar.addEventListener("mouseleave", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    }
  });
});


// =========================
// FAQ ACCORDION
// =========================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

window.initFaqAccordion = initFaqAccordion;


// =========================
// SMART EMAIL LINK
// =========================
function setSmartEmailLink() {
  const emailLink = document.getElementById('smartEmailLink');
  if (!emailLink) return;

  const email = "admin@mortice.uk";

  const ua = navigator.userAgent.toLowerCase();
  const isChrome = ua.includes("chrome") && !ua.includes("edg");
  const isSafari = ua.includes("safari") && !ua.includes("chrome");
  const isFirefox = ua.includes("firefox");
  const isIOS = /iphone|ipad|ipod/.test(ua);
  const isAndroid = ua.includes("android");

  const isGmailUser = localStorage.getItem("gmailUser") === "true";
  const isOutlookUser = localStorage.getItem("outlookUser") === "true";
  const isYahooUser = localStorage.getItem("yahooUser") === "true";

  const host = window.location.host;
  if (host.includes("mail.google.com")) localStorage.setItem("gmailUser", "true");
  if (host.includes("outlook.com")) localStorage.setItem("outlookUser", "true");
  if (host.includes("mail.yahoo.com")) localStorage.setItem("yahooUser", "true");

  if (isGmailUser || (isChrome && navigator.registerProtocolHandler)) {
    emailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    emailLink.target = "_blank";
    return;
  }

  if (isOutlookUser) {
    emailLink.href = `https://outlook.com/?path=/mail/action/compose&to=${email}`;
    emailLink.target = "_blank";
    return;
  }

  if (isYahooUser) {
    emailLink.href = `https://compose.mail.yahoo.com/?to=${email}`;
    emailLink.target = "_blank";
    return;
  }

  if (isIOS || isAndroid || isSafari || isFirefox) {
    emailLink.href = `mailto:${email}`;
    return;
  }

  emailLink.href = `mailto:${email}`;
}
