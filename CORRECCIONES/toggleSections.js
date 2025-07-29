
document.addEventListener("DOMContentLoaded", () => {
  const toggleMainBtn = document.getElementById("toggle-portfolio");
  const mainContent = document.getElementById("portfolio-content");

  toggleMainBtn.addEventListener("click", () => {
    const isVisible = mainContent.classList.toggle("visible");
    toggleMainBtn.classList.toggle("active", isVisible);
    toggleMainBtn.textContent = isVisible ? "−" : "+";

    if (!isVisible) {
      // Si se cierra todo, también cerrar subsecciones internas
      document.querySelectorAll(".gallery").forEach(g => g.classList.add("hidden"));
      document.querySelectorAll(".flyer-btn").forEach(btn => btn.textContent = "+");
    }
  });

  document.querySelectorAll(".toggle-btn[data-target]").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const content = document.getElementById(targetId);
      const isHidden = content.classList.toggle("hidden");
      button.textContent = isHidden ? "+" : "−";
    });
  });
});
