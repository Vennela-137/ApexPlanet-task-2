document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email.");
    return;
  }

  alert("Thanks for contacting us!");
  this.reset();
});
