fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    if (window.initNavbar) {
      window.initNavbar();
    }
  });
