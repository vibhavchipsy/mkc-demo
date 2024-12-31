import { data } from "../data/publicationsData.js";
import { renderPage } from "./publications_accordion.js";
import { setupPagination } from "./publications_pagination.js";

document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 50; // Items per page
    const container = document.getElementById("accordion-container");

    // Render initial page
    function render(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        renderPage(container, data, start, end);
    }

    render(1); // Initial render

    // Setup pagination
    setupPagination(data, itemsPerPage, "pagination", render);
});