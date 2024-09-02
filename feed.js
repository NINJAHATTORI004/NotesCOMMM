// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to display the modal
function displayModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function() {
    $("#book-trigger").click(function () {
        $("li").toggleClass("visible");
    });
  });

  // Wait for the document to fully load before attaching event listeners
  document.addEventListener("DOMContentLoaded", function() {
    // Get all links that start with '#' (internal links)
    var internalLinks = document.querySelectorAll('a[href^="#"]');

    // Attach click event listeners to each internal link
    internalLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Get the target element's ID from the href attribute
            var targetId = this.getAttribute("href").substring(1);

            // Find the target element based on the ID
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate the offset position of the target element
                var offsetTop = targetElement.offsetTop;

                // Smooth scroll to the target element
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
     });
    });
