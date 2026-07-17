fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    // Load script.js AFTER navbar is inserted
    const script = document.createElement("script");
    script.src = "script.js";
    document.body.appendChild(script);
  });
