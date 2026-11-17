
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    menuToggle.innerHTML =
        navMenu.classList.contains("show") ? "✕" : "☰";

});

// Close mobile menu after selecting a link
document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("show");
        menuToggle.innerHTML = "☰";

    });

});
