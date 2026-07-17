fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    const navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer) {
      navbarContainer.innerHTML = data;
    }

    // Load script.js AFTER navbar is inserted
    const script = document.createElement("script");
    script.src = "script.js";
    script.onload = () => {
      if (typeof window.initPageInteractions === "function") {
        window.initPageInteractions();
      }
    };
    document.body.appendChild(script);
  });
