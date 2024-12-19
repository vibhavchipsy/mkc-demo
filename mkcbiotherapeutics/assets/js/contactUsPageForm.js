const form = document.getElementById("contactus_formID");
const submitButton = document.querySelector("#formSubmitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Change the button text to "Submitting..." and disable it
  submitButton.textContent = "Submitting...";
  submitButton.disabled = true;

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const googleAppScriptURL =
    "https://script.google.com/macros/s/AKfycbz9wp14lsAdDoO0CpDFL2WSkAVN9zyP6jCDb8fQral6sOzN8bUgGqX45AjoTcq6vQc/exec";

  try {
    const response = await fetch(
      googleAppScriptURL, // Replace with your Web App URL
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
          Host: "script.google.com",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    if (result.status === "success") {
      alert("Email sent successfully!");
      form.reset();
    } else {
      alert("Failed to send email: " + result.message);
      form.reset();
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while sending the email.");
  } finally {
    // Restore the button to its original state
    submitButton.textContent = "Send Message";
    submitButton.disabled = false;
  }
});
