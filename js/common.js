document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div style="text-align: center; background: #f0f0f0; padding: 1em;">
        <p>&copy; 2023-2025 ユズリハ/Yuzliha
        </p>
      </div>
    `;
  }
});