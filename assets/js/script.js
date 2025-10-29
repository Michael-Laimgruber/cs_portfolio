// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {

  // Copy buttons
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.nextElementSibling.innerText;
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => btn.textContent = "Copy", 1500);
      });
    });
  });

  // Toggle buttons
  document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.parentElement.nextElementSibling;
      if (!content) return;

      if (content.style.display === "block") {
        content.style.display = "none";
        btn.textContent = "[ v ]";
      } else {
        content.style.display = "block";
        btn.textContent = "[ ^ ]";
      }
    });
  });

});
