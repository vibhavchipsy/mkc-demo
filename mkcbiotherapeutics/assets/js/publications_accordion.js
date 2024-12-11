// Render a single accordion item
export function renderAccordionItem(container, item, serialNumber) {
  const accordionItem = document.createElement("div");

  accordionItem.classList.add("accordion-item");

  accordionItem.innerHTML = `
    <div class="accordion-title">
      <div class="accordion_title-left">
        <div class="bgcolor-5 serial-number font-16 color-white">${serialNumber}</div>
        <div class="title font-18 color3-color">${item.title}</div>
      </div>
      <div class="accordion_title-right mobile_hide">
        <div class="accordion_icon accordion_icon-plus">
          <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.1641 11.5234H13.6172V0.976562C13.6172 0.437207 13.18 0 12.6406 0C12.1013 0 11.6641 0.437207 11.6641 0.976562V11.5234H1.11719C0.577832 11.5234 0.140625 11.9606 0.140625 12.5C0.140625 13.0394 0.577832 13.4766 1.11719 13.4766H11.6641V24.0234C11.6641 24.5628 12.1013 25 12.6406 25C13.18 25 13.6172 24.5628 13.6172 24.0234V13.4766H24.1641C24.7034 13.4766 25.1406 13.0394 25.1406 12.5C25.1406 11.9606 24.7034 11.5234 24.1641 11.5234Z" fill="#5FBA8D"/>
          </svg>
        </div>
        <div class="accordion_icon accordion_icon-minus">
          <svg width="26" height="2" viewBox="0 0 26 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.1641 0C9.20554 0 15.427 0 1.11719 0C0.577832 0 0.140625 0.437207 0.140625 0.976562C0.140625 1.51592 0.577832 1.95313 1.11719 1.95313H24.1641C24.7034 1.95313 25.1406 1.51592 25.1406 0.976562C25.1406 0.437207 24.7034 0 24.1641 0Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="accordion-content" style="display: none;">
      <p>${item.content}</p>
      <p class="accordion_author"><img src="/mkcbiotherapeutics/assets/icons/author.svg" />Author - ${item.author}</p>
      <div class="accordion_btns-container">
        <div class="accordion-btns">

          ${item.year ? `<p class="accordion-btn">Year of Publication: ${item.year}</p>` : ''}

          <!-- Conditionally render Impact Factor if available -->
          ${item.impactFactor ? `<p class="accordion-btn">Impact Factor: ${item.impactFactor}</p>` : ''}

          ${item.impactFactor2019 ? `<p class="accordion-btn">Impact Factor in 2019: ${item.impactFactor2019}</p>` : ''}
        </div>
        
        ${item.referenceLink ? `<a href="${item.referenceLink}" target="_blank" class="text_decoration_none color1-color accordion-links">Click here for Reference Link</a>` : ''}
      </div>
    </div>
  `;
  accordionItem
    .querySelector(".accordion-title")
    .addEventListener("click", () => {
      const content = accordionItem.querySelector(".accordion-content");

      // Toggle display of content
      if (content.style.display === "none") {
        content.style.display = "block"; // Open the accordion
        accordionItem.classList.add("open"); // Add the "open" class when content is visible
      } else {
        content.style.display = "none"; // Close the accordion
        accordionItem.classList.remove("open"); // Remove the "open" class when content is hidden
      }

    });
  container.appendChild(accordionItem);
}

// Render a full page of items
export function renderPage(container, data, start, end) {
  container.innerHTML = ""; // Clear the container
  const currentPageData = data.slice(start, end);
  currentPageData.forEach((item, index) => {
    const serialNumber = start + index + 1;
    renderAccordionItem(container, item, serialNumber);
  });
}