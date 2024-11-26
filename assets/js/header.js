const checkbox = document.getElementById("check");

// Add event listener to toggle the class on the body
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    // If checked, add the class to the body
    document.body.classList.add("overflow-hidden");
  } else {
    // If unchecked, remove the class from the body
    document.body.classList.remove("overflow-hidden");
  }
});
