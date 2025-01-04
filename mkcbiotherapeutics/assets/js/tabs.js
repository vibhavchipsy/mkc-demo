function scrollToPanel(panelId) {
    // Update the URL without reloading the page
    const newUrl = `${window.location.pathname}#${panelId}`;
    console.log(`${panelId}`);
    window.history.replaceState(null, '', newUrl);
}

function scrollToTabContent(panel) {
    const tabElement = panel.querySelector('.tab-image');
    // if (tabElement) {
    //     tabElement.scrollIntoView({
    //         behavior: 'smooth', // Smooth scrolling effect
    //         block: 'start', // Scroll to the top of the element
    //     });
    // }

    if (tabElement) {
        const offset = 120; // Offset in pixels
        const elementPosition = tabElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset; // Adjusted to scroll 40px higher

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth', // Smooth scrolling effect
        });
    }
}

function initializeTabs(tabContainerSelector) {
    const tabContainer = document.querySelector(tabContainerSelector);

    if (!tabContainer) return; // Exit if the tab container doesn't exist

    const tabButtons = tabContainer.querySelectorAll('.tab-button');
    const tabPanels = tabContainer.querySelectorAll('.tab-panel');

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove active classes from all buttons and panels in this container
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            tabPanels.forEach((panel) => panel.classList.remove('active'));

            // Add active class to the clicked button and corresponding panel
            button.classList.add('active');
            const targetPanel = tabContainer.querySelector(`#${button.dataset.tab}`);
            targetPanel.classList.add('active');

            // Call scrollToPanel to update the URL
            scrollToPanel(button.dataset.tab);

            // Scroll to the `.tabtexts` inside the active panel
            scrollToTabContent(targetPanel);
        });
    });
}

// Initialize tabs for all tab sections
initializeTabs('#tab-section-1');  