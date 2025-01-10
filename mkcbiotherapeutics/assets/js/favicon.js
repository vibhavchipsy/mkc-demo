(function () {
    const head = document.querySelector('head');

    const faviconLinks = `
        <link rel="icon" type="image/svg+xml" href="../mkcbiotherapeutics/assets/logo.svg">
    `;
    head.insertAdjacentHTML('beforeend', faviconLinks);
})();