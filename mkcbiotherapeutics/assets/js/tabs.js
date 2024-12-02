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
        });
    });
}

// Initialize tabs for all tab sections
initializeTabs('#tab-section-1');  