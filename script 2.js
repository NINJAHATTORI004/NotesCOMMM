
// Sample data (replace this with your actual data)
const notesData = [
  { year:'2nd year',university: 'APJ Abdul Kalam University', subject: 'Theory of automata and formal languages', topic: 'Unit 1', type: 'Handwritten', pdfUrl: 'theory-of-automata-unit-1.pdf' },
  { year:'2nd  year',university: 'APJ Abdul Kalam University',subject: 'Theory of automata and formal languages',  topic: 'Unit 2', type: 'Handwritten', pdfUrl: 'TAFL-UNIT-2.pdf' },
  {  year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Theory of automata and formal languages', topic: 'Unit 3', type: 'Handwritten', pdfUrl: 'TAFL-UNIT-3.pdf' },
  {  year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Theory of automata and formal languages',   topic: 'Unit 4', type: 'Handwritten', pdfUrl: 'TAFL-UNIT-4.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University',  subject: 'Theory of automata and formal languages',topic: 'Unit 5', type: 'Handwritten', pdfUrl: 'TAFL-UNIT-5.pdf' },
  {  year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Computer Organization and Architecture', topic: 'Unit 1', type: 'Handwritten', pdfUrl: 'COA-UNIT-1.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Computer Organization and Architecture',  topic: 'Unit 2', type: 'Handwritten', pdfUrl: 'COA-UNIT-2.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University', subject: 'Computer Organization and Architecture',  topic: 'Unit 3', type: 'Handwritten', pdfUrl: 'COA-UNIT-3.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Computer Organization and Architecture',  topic: 'Unit 4', type: 'Handwritten', pdfUrl: ' COA-UNIT-4.pdf' },
  {  year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Computer Organization and Architecture', topic: 'Unit 5', type: 'Handwritten', pdfUrl: 'COA-UNIT-5.pdf' },
  { year:'1st year',university: 'APJ Abdul Kalam University',subject: 'Programming for problem solving',  topic: 'Unit 1', type: 'Book notes', pdfUrl: 'PPS-UNIT-1.pdf' },
  { year:'1st year',university: 'APJ Abdul Kalam University',subject: 'Programming for problem solving',  topic: 'Unit 2', type: 'Book notes', pdfUrl: 'PPS-UNIT-2.pdf' },
  { year:'1st year',university: 'APJ Abdul Kalam University',subject: 'Programming for problem solving',  topic: 'Unit 3', type: 'Book notes', pdfUrl: 'PPS-UNIT-3.pdf' },
  { year:'1st year',university: 'APJ Abdul Kalam University',subject: 'Programming for problem solving',  topic: 'Unit 4', type: 'Book notes', pdfUrl: 'PPS-UNIT-4.pdf' },
  {  year:'1st year',university: 'APJ Abdul Kalam University',subject: 'Programming for problem solving', topic: 'Unit 5', type: 'Book notes', pdfUrl: 'PPS-UNIT-5.pdf' },
  { year:'1st year',university: 'APJ Abdul Kalam University',subject: 'Programming for problem solving',  topic: 'LET US C BOOK', type: 'Book notes', pdfUrl: 'Let us c - yashwantkanetkar.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Cyber security',  topic: 'Unit 1', type: 'Book notes', pdfUrl: 'CS-UNIT-1.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Cyber security',  topic: 'Unit 2', type: 'Book notes', pdfUrl: 'CS-UNIT-2.pdf' },
  {  year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Cyber security', topic: 'UNit 3', type: 'Book notes', pdfUrl: 'CS-UNIT-3.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Cyber security',  topic: 'Unit 4', type: 'Book notes', pdfUrl: 'CS-UNIT-4.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Cyber security',  topic: 'Unit 5', type: 'Book notes', pdfUrl: 'CS-UNIT-5.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University', subject: 'Discrete structure and theory of logics', topic: 'Unit 1', type: 'Handwritten', pdfUrl: 'DSTL-UNIT-1.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University',subject: 'Discrete structure and theory of logics',  topic: 'Unit 2', type: 'Handwritten', pdfUrl: 'DSTL-UNIT-2.pdf' },
  { year:'2nd year',university: 'APJ Abdul Kalam University', subject: 'Discrete structure and theory of logics',  topic: 'Unit 3', type: 'Handwritten', pdfUrl: 'DSTL-UNIT-3.pdf' },
  // Add more entries as needed
];

// Function to filter and display notes based on selection
function filterNotes() {
  const year = document.getElementById('yearSelect').value;
  const subject = document.getElementById('subjectSelect').value;
  const university = document.getElementById('universitySelect').value;
  const topic = document.getElementById('topicSelect').value;
  const type = document.getElementById('typeSelect').value;
  const recentNotesSection = document.getElementById('recentNotes');

  // Clear existing content
  recentNotesSection.innerHTML = '';

  // Filter notes based on selection
  const filteredNotes = notesData.filter(note => {
      const matchesYear = year === '' || note.year === year;
      const matchesSubject = subject === '' || note.subject === subject;
      const matchesUniversity = university === '' || note.university === university;
      const matchesTopic = topic === '' || note.topic === topic;
      const matchesType = type === '' || note.type === type;

      return matchesYear  &&  matchesUniversity &&  matchesSubject &&  matchesTopic && matchesType;
  });

  // Check if there are any filtered notes
  if (filteredNotes.length === 0) {
      // Create a container for the "Not Found" message and GIF section
      const notFoundContainer = document.createElement('div');
      notFoundContainer.classList.add('not-found-container');

      // Display "No matching notes found" message
      const notFoundMessage = document.createElement('p');
      notFoundMessage.textContent = 'No matching notes found!!';
      notFoundMessage.classList.add('not-found-message');
      notFoundContainer.appendChild(notFoundMessage);

      // Display GIF below the "No matching notes found" message
      const gifImage = document.createElement('img');
      gifImage.src = 'not found.gif'; // Replace 'not_found.gif' with your GIF file path
      gifImage.alt = 'Not Found GIF';
      gifImage.classList.add('not-found-image');
      notFoundContainer.appendChild(gifImage);

      // Append the container to recentNotesSection
      recentNotesSection.appendChild(notFoundContainer);
  } else {
      // Display filtered notes
      filteredNotes.forEach(note => {
          // Create a note box container
          const noteBox = document.createElement('div');
          noteBox.classList.add('note-box');

          // Determine the icon based on the note type
          let icon = '';
          if (note.type === 'Handwritten') {
              icon = '🖊️'; // Pen icon for Handwritten notes
          } else if (note.type === 'Book Notes') {
              icon = '📖'; // Book icon for Book notes
          }            
          
          // Construct the content for the note box
          const noteContent = `
              <p><strong>Year:</strong> ${note.year}</p>
              <p><strong>Subject:</strong> ${note.subject}</p>
              <p><strong>University:</strong> ${note.university}</p>
              <p><strong>Topic:</strong> ${note.topic}</p>
              <p><strong>Type:</strong> ${note.type}</p>
           
              <a href="${note.pdfUrl}" target="_blank">Open PDF</a>
              <span class="icon ${note.type === 'Handwritten' ? 'pen-icon' : 'book-icon'}">${icon}</span>
          `;

          // Set the inner HTML of the note box
          noteBox.innerHTML = noteContent;

          // Append the note box to the recentNotesSection
          recentNotesSection.appendChild(noteBox);
      });
  }
}

// Event listener for select elements
document.getElementById('yearSelect').addEventListener('change', filterNotes);
document.getElementById('subjectSelect').addEventListener('change', filterNotes);
document.getElementById('universitySelect').addEventListener('change', filterNotes);
document.getElementById('topicSelect').addEventListener('change', filterNotes);
document.getElementById('typeSelect').addEventListener('change', filterNotes);

// Initial call to populate notes on page load
filterNotes();
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

