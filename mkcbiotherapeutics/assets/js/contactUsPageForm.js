document.querySelector(".contactus_form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Convert FormData to JSON
    const jsonData = Object.fromEntries(formData.entries());

    // Send data to Google Apps Script
    try {
        const response = await fetch(form.action, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData) // Send the form data as a JSON string
        });

        const responseData = await response.json(); // Parse JSON response

        if (responseData.status === "success") {
            alert("Your message has been sent!");
            form.reset(); // Clear the form
        } else {
            alert("Failed to send your message. Please try again.");
        }
    } catch (error) {
        alert("An error occurred while sending your message.");
        console.error(error);
    }
});
