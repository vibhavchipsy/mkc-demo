// Function to load the header
function loadHeader() {
  fetch("/components/header.html") // Path to your header file
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load header.");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("header").innerHTML = data; // Inject header content
    })
    .catch((error) => console.error("Error loading header:", error));
}

function loadFooter() {
  fetch("/components/footer.html") // Path to your footer file
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load footer.");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer").innerHTML = data; // Inject footer content
    })
    .catch((error) => console.error("Error loading footer:", error));
}

// Call the function
loadHeader();
loadFooter();