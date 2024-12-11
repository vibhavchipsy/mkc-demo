export function setupPagination(data, itemsPerPage, containerId, callback) {
    const paginationContainer = document.getElementById(containerId);

    if (!paginationContainer) {
        console.error(`Container with id ${containerId} not found`);
        return;
    }

    const pagination = new tui.Pagination(containerId, {
        totalItems: data.length,
        itemsPerPage: itemsPerPage,
        visiblePages: 4,
        centerAlign: true,
        template: function (type, page, currPage) {
            switch (type) {
                case "prev":
                    return `<button class="pagination-prev"><span class="tui-ico-prev">prev</span></button>`;
                case "next":
                    return `<button class="pagination-next"><span class="tui-ico-next">next</span></button>`;
                case "first":
                    return `<button class="pagination-first"><span class="tui-ico-first">first</span></button>`;
                case "last":
                    return `<button class="pagination-last"><span class="tui-ico-last">last</span></button>`;
                default:
                    return `<button class="pagination-page">${page}</button>`;
            }
        },
    });

    // Attach callback for page change
    pagination.on("afterMove", (event) => {
        callback(event.page);
        replaceIcons();
    });

    replaceIcons();

    return pagination;
}

function replaceIcons() {
    const prevButton = document.querySelector(".tui-ico-prev");
    const nextButton = document.querySelector(".tui-ico-next");
    const firstButton = document.querySelector(".tui-ico-first");
    const lastButton = document.querySelector(".tui-ico-last");

    if (prevButton) {
        prevButton.innerHTML = getPrevIcon(); // Replace with custom icon
    }
    if (nextButton) {
        nextButton.innerHTML = getNextIcon(); // Replace with custom icon
    }
    if (firstButton) {
        firstButton.innerHTML = getFastForwardIcon(); // Replace with custom icon
    }
    if (lastButton) {
        lastButton.innerHTML = getFastForwardIcon(); // Replace with custom icon
    }
}

// Custom icons for pagination buttons
function getPrevIcon() {
    return `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="black"/>
        </svg>
    `;
}

function getNextIcon() {
    return `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="black"/>
        </svg>    
    `;
}

function getFastForwardIcon() {
    return `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.27301 4L3.33301 4.94L6.38634 8L3.33301 11.06L4.27301 12L8.27301 8L4.27301 4Z" fill="black"/>
        <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="black"/>
        </svg>
      `;
}