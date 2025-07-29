document.addEventListener('DOMContentLoaded', () => {
  function setupToggle(buttonId, contentId) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);

    if (button && content) {
      button.textContent = '+';

      button.addEventListener('click', () => {
        content.classList.toggle('hidden');
        button.textContent = content.classList.contains('hidden') ? '+' : '–';
      });
    }
  }

  // Ya tienes toggle para Sobre mí (si quieres)
  setupToggle('toggle-about', 'about-content');

  // Aquí agregamos el toggle para Portafolio
  setupToggle('toggle-portfolio', 'portfolio-content');
});

