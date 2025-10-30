document.getElementById("interestForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Basic validation check
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("⚠️ Please fill in all required fields correctly!");
    return;
  }

  // Hide form and show success message
  document.getElementById("interestForm").classList.add("hidden");
  document.getElementById("successMessage").classList.remove("hidden");
});
