function copyCode(btn) {
  const code = btn.nextElementSibling.innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy", 1500);
  });
}


function toggleSection(btn) {
  const content = btn.parentElement.nextElementSibling;
  if (!content) return;

  if (content.style.display === "block") {
    content.style.display = "none";
    btn.textContent = "[ v ]";
  } else {
    content.style.display = "block";
    btn.textContent = "[ ^ ]";
  }
}
