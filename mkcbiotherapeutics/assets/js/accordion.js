document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion-item");

    accordions.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        const toggle = item.querySelector(".accordion-toggle");
        const body = item.querySelector(".accordion-body");
        const openIcon = item.querySelector(".icon-open");
        const closedIcon = item.querySelector(".icon-closed");

        header.addEventListener("click", () => {
            const isExpanded = toggle.getAttribute("aria-expanded") === "true";

            // Toggle aria-expanded attribute
            toggle.setAttribute("aria-expanded", !isExpanded);

            if (isExpanded) {
                // Collapse the accordion
                openIcon.style.display = "none";
                closedIcon.style.display = "inline";
                body.classList.remove("open");
            } else {
                // Expand the accordion
                openIcon.style.display = "inline";
                closedIcon.style.display = "none";
                body.classList.add("open");
            }

            // Optional: Close other accordions
            accordions.forEach((otherItem) => {
                if (otherItem !== item) {
                    const otherToggle = otherItem.querySelector(".accordion-toggle");
                    const otherBody = otherItem.querySelector(".accordion-body");
                    const otherOpenIcon = otherItem.querySelector(".icon-open");
                    const otherClosedIcon = otherItem.querySelector(".icon-closed");

                    otherToggle.setAttribute("aria-expanded", "false");
                    otherOpenIcon.style.display = "none";
                    otherClosedIcon.style.display = "inline";
                    otherBody.classList.remove("open");
                }
            });
        });
    });
});
