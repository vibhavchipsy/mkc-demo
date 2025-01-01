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

      // Attach event listeners after the header is loaded
      attachHamburgerMenuListeners();
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

      // Handle navigation to tab panels (if the hash is for a tab)
      if (hash.includes("panel-")) {
        document.querySelector(".tabs").scrollIntoView({ behavior: "smooth" });
        activateTab(hash);
      }
    }
  }

  // Function to activate the tab based on hash
  function activateTab(hash) {
    const tabId = hash.replace("#", ""); // Get the tab ID from the hash (e.g., tab-1)
    console.log(tabId);
    // document.querySelector('[data-tab-panel="tabId"]').click();
    document.querySelector(`[data-tab="${tabId}"]`).click();
  }

  // Add event listener to handle navigation on page load
  document.addEventListener("DOMContentLoaded", () => {
    navigateToSection();
  });

  // Add event listener for dynamic hash change
  window.addEventListener("hashchange", navigateToSection);
}

// Function to attach event listeners
function attachHamburgerMenuListeners() {
  // Select all anchors inside .submenu-parent
  const submenuAnchors = document.querySelectorAll(".submenu-parent > a");

  submenuAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        const parent = anchor.parentElement;
        const hasHref = anchor.hasAttribute("href") && anchor.getAttribute("href").trim() !== "";

        if (!hasHref) {
          // Prevent default behavior for anchors without href
          e.preventDefault();
        }

        // Close all other submenus
        document.querySelectorAll(".submenu-parent").forEach((other) => {
          if (other !== parent) {
            other.classList.remove("active");
          }
        });

        // Toggle the submenu
        parent.classList.toggle("active");

        // Optional: Close other open submenus (accordion effect)
        document.querySelectorAll(".submenu-parent").forEach((other) => {
          if (other !== parent) {
            other.classList.remove("active");
          }
        });
      }
    });
  });
}

// Function to activate the correct tab based on the hash
function switchTabPanel() {
  const hash = window.location.hash; // Get the hash from the URL (e.g., #tab-section-4)
  if (!hash) return; // Exit if there's no hash in the URL

  const targetPanel = document.querySelector(hash); // Find the element with the ID from the hash
  if (!targetPanel) return; // Exit if the element doesn't exist

  // Get the parent tab container
  const tabContainer = targetPanel.closest('.our_science_page-tabsection');
  if (!tabContainer) return; // Exit if no tab container is found

  const tabButtons = tabContainer.querySelectorAll('.tab-button');
  const tabPanels = tabContainer.querySelectorAll('.tab-panel');

  // Remove active classes from all buttons and panels
  tabButtons.forEach((btn) => btn.classList.remove('active'));
  tabPanels.forEach((panel) => panel.classList.remove('active'));

  // Activate the corresponding button and panel
  const targetButton = tabContainer.querySelector(`[data-tab="${hash.replace('#', '')}"]`);
  if (targetButton) targetButton.classList.add('active');
  targetPanel.classList.add('active');
}

// Call the function
loadHeader();
loadFooter();

document.addEventListener("DOMContentLoaded", () => {
  // handleAnchorNavigation();
  switchTabPanel();
});

// Run the function when the hash changes
window.addEventListener('hashchange', switchTabPanel);
