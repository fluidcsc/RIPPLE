fetch("navbar.html")
  .then(response => {
    console.log("Navbar fetch status:", response.status);
    if (!response.ok) {
      console.error("Failed to load navbar.html");
      throw new Error("Failed to load navbar.html");
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
      if (typeof window.initNavbar === "function") {
        window.initNavbar();
      }

      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.add("visible");
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
