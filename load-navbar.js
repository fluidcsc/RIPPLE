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

    // Run navbar init if available
    if (typeof window.initNavbar === "function") {
      window.initNavbar();
    }

    // Fade-in animation
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.add("visible");
    }

    // Optional helpers
    if (typeof window.initFaqAccordion === "function") {
      window.initFaqAccordion();
    }

    if (typeof window.setSmartEmailLink === "function") {
      window.setSmartEmailLink();
    }
  })
  .catch(err => console.error("Error loading navbar:", err));
