document.addEventListener("DOMContentLoaded", function() {
    // Get all sections and navigation links
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll("nav a");

    // Add click event listener to each navigation link
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Hide all sections
            sections.forEach(function(section) {
                section.style.display = "none";
            });

            // Show the corresponding section based on the href attribute
            var targetId = this.getAttribute("href").substring(1); // Remove the '#'
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
});
