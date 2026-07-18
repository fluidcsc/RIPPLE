fetch("navbar.html")
  .then(response => {
    console.log("Navbar fetch status:", response.status);
    if (!response.ok) {
      console.error("Failed to load navbar.html");
    }
    return response.text();
  })
  .then(data => {
    const navbarContainer = document.getElementById("navbar-container");
    if (!navbarContainer) {
      console.error("navbar-container NOT FOUND in DOM");
      return;
    }

    console.log("Navbar HTML loaded:", data.slice(0, 50));
    navbarContainer.innerHTML = data;

    const script = document.createElement("script");
    script.src = "script.js";
    script.onload = () => {
      console.log("script.js loaded");
      if (typeof window.initNavbar === "function") {
        console.log("Running initNavbar()");
        window.initNavbar();
      }
      if (typeof window.initFaqAccordion === "function") {
        console.log("Running initFaqAccordion()");
        window.initFaqAccordion();
      }
      if (typeof window.setSmartEmailLink === "function") {
        console.log("Running setSmartEmailLink()");
        window.setSmartEmailLink();
      }
    };
    document.body.appendChild(script);
  })
  .catch(err => console.error("Error loading navbar:", err));
