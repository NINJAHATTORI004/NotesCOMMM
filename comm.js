// script.js

document.getElementById('upload-btn').addEventListener('click', function() {
    document.getElementById('file-upload').click();
});

document.getElementById('file-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    // Code to upload the file to the server
    console.log('Uploading file:', file.name);
    // You can send the file to the server using AJAX or fetch API
});

document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    // Code to filter and display shared notes based on search query
    console.log('Searching for:', searchQuery);
});

document.getElementById('ask-btn').addEventListener('click', function() {
    // Get the doubt input value
    const doubt = document.getElementById('doubt-input').value;
    // Check if doubt is not empty
    if (doubt.trim() !== '') {
        // Display popup confirmation message
        document.getElementById('popup-ask').style.display = 'block';
        // Add the doubt to the shared doubts section
        addDoubt(doubt);
    }
});

document.getElementById('close-popup').addEventListener('click', function() {
    // Close popup confirmation message
    document.getElementById('popup-ask').style.display = 'none';
});

function addDoubt(doubt) {
    // Create a new shared doubt element
    const sharedDoubt = document.createElement('div');
    sharedDoubt.classList.add('shared-doubt');
    // Add the doubt text
    sharedDoubt.innerHTML = `<p class="doubt-text">${doubt}</p>`;
    // Create a reply button
    const replyBtn = document.createElement('button');
    replyBtn.classList.add('reply-btn');
    replyBtn.textContent = 'Reply';
    // Append the reply button to the shared doubt
    sharedDoubt.appendChild(replyBtn);
    // Add event listener for the reply button
    replyBtn.addEventListener('click', function() {
        // Create a form for replying to the doubt
        const replyForm = document.createElement('form');
        replyForm.innerHTML = `
            <textarea class="reply-text" placeholder="Type your reply here..."></textarea>
            <button type="submit" class="submit-reply">Submit</button>
        `;
        // Append the form to the shared doubt
        sharedDoubt.appendChild(replyForm);
        // Remove the reply button
        replyBtn.remove();
        // Add event listener for submitting the reply
        replyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Get the reply text
            const replyText = replyForm.querySelector('.reply-text').value;
            // Display the reply below the doubt
            const replyElement = document.createElement('div');
            replyElement.classList.add('reply');
            replyElement.innerHTML = `<p class="reply-text">${replyText}</p>`;
            sharedDoubt.appendChild(replyElement);
            // Remove the reply form
            replyForm.remove();
        });
    });
    // Append the shared doubt to the shared doubts section
    document.getElementById('shared-doubts').appendChild(sharedDoubt);
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