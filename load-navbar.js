// Load navbar.html into the page
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    // Now that the navbar exists, run the navbar JS
    if (window.initNavbar) {
      window.initNavbar();
    }
  });
