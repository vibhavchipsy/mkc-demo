// document.addEventListener("DOMContentLoaded", () => {
//   // Select all anchors inside .submenu-parent
//   const submenuAnchors = document.querySelectorAll(".submenu-parent > a");

//   submenuAnchors.forEach((anchor) => {
//     anchor.addEventListener("click", (e) => {
//       if (window.innerWidth <= 768) {
//         const parent = anchor.parentElement;
//         const hasHref = anchor.hasAttribute("href") && anchor.getAttribute("href").trim() !== "";

//         if (!hasHref) {
//           // Prevent default behavior for anchors without href
//           e.preventDefault();
//         }

//         // Close all other submenus
//         document.querySelectorAll(".submenu-parent").forEach((other) => {
//           if (other !== parent) {
//             other.classList.remove("active");
//           }
//         });

//         // Toggle the submenu
//         parent.classList.toggle("active");

//         // Optional: Close other open submenus (accordion effect)
//         document.querySelectorAll(".submenu-parent").forEach((other) => {
//           if (other !== parent) {
//             other.classList.remove("active");
//           }
//         });
//       }
//     });
//   });
// });
