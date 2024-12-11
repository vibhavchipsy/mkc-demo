// import { handleAnchorNavigation } from "./js/utils.js";

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

function handleAnchorNavigation() {
  // Function to handle anchor link navigation
  function navigateToSection() {
    const hash = window.location.hash; // Get the fragment identifier from URL

    if (hash) {
      document.querySelector("#close_menu").click();
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  // Add event listener to handle navigation on page load
  document.addEventListener("DOMContentLoaded", () => {
    navigateToSection();
  });

  // Add event listener for dynamic hash change
  window.addEventListener("hashchange", navigateToSection);
}

// Call the function
loadHeader();
loadFooter();

document.addEventListener("DOMContentLoaded", () => {
  handleAnchorNavigation();
});