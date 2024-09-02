// Get the login modal
var loginModal = document.getElementById('loginModal');

// Get the sign-up modal
var signupModal = document.getElementById('signupModal');

// Get the login button
var loginBtn = document.getElementById("loginBtn");

// Get the sign-up button inside the login modal
var signupBtn = document.getElementById("signupBtn");

// Get the close button for the login modal
var loginCloseBtn = document.querySelector("#loginModal .close");

// Get the close button for the sign-up modal
var signupCloseBtn = document.querySelector("#signupModal .close");

// When the user clicks the login button, open the login modal
loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

// When the user clicks the sign-up button inside the login modal, open the sign-up modal
signupBtn.onclick = function() {
  signupModal.style.display = "block";
  loginModal.style.display = "none";
}

// When the user clicks on the close button for the login modal, close the login modal
loginCloseBtn.onclick = function() {
  loginModal.style.display = "none";
}

// When the user clicks on the close button for the sign-up modal, close the sign-up modal
signupCloseBtn.onclick = function() {
  signupModal.style.display = "none";
}

// When the user clicks anywhere outside of the login modal or the sign-up modal, close them
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
}

// Function to handle Google login button click
document.getElementById('google-login').addEventListener('click', function() {
  // Redirect to Google OAuth endpoint
  window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile&state=google';
});

// Function to handle GitHub login button click
document.getElementById('github-login').addEventListener('click', function() {
  // Redirect to GitHub OAuth endpoint
  window.location.href = 'https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user';
});


document.addEventListener('DOMContentLoaded', function () {
  var homepageSection = document.querySelector('.homepage');
  var headerHeight = document.querySelector('header').offsetHeight;

  window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;

      if (scrollPosition >= headerHeight) {
          homepageSection.classList.add('active');
      } else {
          homepageSection.classList.remove('active');
      }
  });
});

$(document).ready(function() {
  $("#book-trigger").click(function () {
      $("li").toggleClass("visible");
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const blogPosts = document.querySelectorAll(".blog-post");
  const dotsContainer = document.querySelector(".dots");
  let currentPostIndex = 0;

  function showPost(index) {
      blogPosts.forEach(post => post.style.display = "none");
      blogPosts[index].style.display = "block";
  }

  function updateDots(index) {
      const dots = document.querySelectorAll(".dot");
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
  }

  function nextPost() {
      currentPostIndex = (currentPostIndex + 1) % blogPosts.length;
      showPost(currentPostIndex);
      updateDots(currentPostIndex);
  }

  // Automatic transition every 5 seconds
  setInterval(nextPost, 5000);

  // Show initial post and update dots
  showPost(currentPostIndex);
  blogPosts.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
          showPost(index);
          updateDots(index);
          currentPostIndex = index;
      });
      dotsContainer.appendChild(dot);
  });
  updateDots(currentPostIndex);
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