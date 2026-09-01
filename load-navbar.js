fetch("navbar.html")
  .then(response => {
    if (!response.ok) throw new Error("Failed to load navbar.html");
    return response.text();
  })
  .then(html => {
    const navbarContainer = document.getElementById("navbar-container");
    if (!navbarContainer) {
      console.error("navbar-container NOT FOUND in DOM");
      return;
    }

    // Inject navbar HTML
    navbarContainer.innerHTML = html;

    // Run navbar init AFTER injection
    if (typeof window.initNavbar === "function") {
      window.initNavbar();
    }

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    // Fade-in AFTER injection
    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.classList.add("visible");

    // Optional helpers
    if (typeof window.initFaqAccordion === "function") {
      window.initFaqAccordion();
    }

    if (typeof window.setSmartEmailLink === "function") {
      window.setSmartEmailLink();
    }
  })
  .catch(err => console.error("Error loading navbar:", err));
