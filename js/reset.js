const form = document.querySelector(".footer__form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío automático para procesarlo manualmente

    const formData = new FormData(form);
    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
    })
    .then(response => {
        if (response.ok) {
            alert("Formulario enviado con éxito.");
            form.reset(); // Limpia los campos después de enviar
        } else {
            alert("Error al enviar el formulario.");
        }
    })
    .catch(error => {
        alert("Error en la conexión. Inténtalo de nuevo más tarde.");
    });
});
