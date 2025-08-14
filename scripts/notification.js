document.addEventListener("DOMContentLoaded", () => {
    const notification = document.getElementById("welcome-notification");
    const closeBtn = document.querySelector(".welcome-close");

    // Mostrar después de 0.5s
    setTimeout(() => {
        notification.classList.remove("welcome-hidden");
        notification.classList.add("welcome-show");
    }, 500);

    // Cerrar manualmente
    closeBtn.addEventListener("click", () => {
        notification.classList.remove("welcome-show");
        notification.classList.add("welcome-hidden");
    });
});
