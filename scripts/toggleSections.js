document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach(button => {
    const section = button.closest("section");
    const content = section.querySelector(".section-content");

    // Añadir el evento click al botón
    button.addEventListener("click", () => {
      if (content.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        requestAnimationFrame(() => {
          content.style.maxHeight = "0";
          content.classList.remove("active");
        });
        button.textContent = "+";
      } else {
        content.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        button.textContent = "−";
      }
    });

    // 👇 Evento para limpiar el max-height después de la transición
    content.addEventListener("transitionend", () => {
      if (content.classList.contains("active")) {
        content.style.maxHeight = "none";
      }
    });
  });
});

// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
  // Configura cada botón con clase .toggle-btn
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Obtener el ID del botón (ej: toggle-portfolio → portfolio-content)
      const targetId = button.id.replace('toggle-', '') + '-content';
      const content = document.getElementById(targetId);

      // Verificar si existe el contenido
      if (content) {
        // Alternar clase activa del contenido
        content.classList.toggle('visible');

        // Alternar clase activa del botón para cambiar color
        button.classList.toggle('active');

        // Cambiar el símbolo del botón
        button.textContent = button.classList.contains('active') ? '−' : '+';
      }
    });
  });
});


