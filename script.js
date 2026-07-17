// =========================
// MOBILE NAV
// =========================

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


// =========================
// FAQ ACCORDION
// =========================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


// =========================
// SMART EMAIL LINK
// =========================

function setSmartEmailLink() {
  const emailLink = document.getElementById('smartEmailLink');
  if (!emailLink) return;

  const email = "admin@mortice.uk";

  // Detect browser + platform
  const ua = navigator.userAgent.toLowerCase();
  const isChrome = ua.includes("chrome") && !ua.includes("edg");
  const isSafari = ua.includes("safari") && !ua.includes("chrome");
  const isFirefox = ua.includes("firefox");
  const isIOS = /iphone|ipad|ipod/.test(ua);
  const isAndroid = ua.includes("android");

  // Detect common webmail usage
  const isGmailUser = localStorage.getItem("gmailUser") === "true";
  const isOutlookUser = localStorage.getItem("outlookUser") === "true";
  const isYahooUser = localStorage.getItem("yahooUser") === "true";

  // If user visits Gmail, Outlook, Yahoo, ProtonMail, remember it
  const host = window.location.host;
  if (host.includes("mail.google.com")) localStorage.setItem("gmailUser", "true");
  if (host.includes("outlook.com")) localStorage.setItem("outlookUser", "true");
  if (host.includes("mail.yahoo.com")) localStorage.setItem("yahooUser", "true");

  // Routing logic
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

  // Default fallback
  emailLink.href = `mailto:${email}`;
}
