// =========================
// NAVIGATION TOGGLE (Unified)
// =========================
window.initNavbar = function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  const navbar = document.querySelector(".navbar");

  if (!toggle || !links || !navbar) {
    console.warn("Navbar elements not found.");
    return;
  }

  // Toggle mobile menu
  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("open");
    links.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Scroll blur / scrolled state
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on load
};


// =========================
// NAVBAR VISIBILITY (Fade-in)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) navbar.classList.add("visible");
});


// =========================
// FAQ ACCORDION
// =========================
window.initFaqAccordion = function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
};


// =========================
// SMART EMAIL LINK
// =========================
window.setSmartEmailLink = function () {
  const emailLink = document.getElementById("smartEmailLink");
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
};
