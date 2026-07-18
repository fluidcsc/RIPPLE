fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    const navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer) {
      navbarContainer.innerHTML = data;
    }

    const script = document.createElement("script");
    script.src = "script.js";
    script.onload = () => {
      if (typeof window.initNavbar === "function") {
        window.initNavbar();
      }
      if (typeof window.initFaqAccordion === "function") {
        window.initFaqAccordion();
      }
      if (typeof window.setSmartEmailLink === "function") {
        window.setSmartEmailLink();
      }
    };
    document.body.appendChild(script);
  });
