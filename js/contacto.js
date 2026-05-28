const formulario = document.getElementById("formContacto");

const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = this.DOCUMENT_NODE.getElementById("nombre").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const mensajeTexto = document.getElementById("mensajeTexto").value.trim();

    if (nombre === "" || correo === "" || mensajeTexto === "") {
        mensaje.textContent =
            "Por favor completa todos los campos.";

        mensaje.classList.remove("text-green-600");

        mensaje.classList.add("text-red-600");

        return;
    }

    mensaje.textContent =
        "Mensaje enviado correctamente.";

    mensaje.classList.remove("text-red-600");

    mensaje.classList.add("text-green-600");

    formulario.reset();

});