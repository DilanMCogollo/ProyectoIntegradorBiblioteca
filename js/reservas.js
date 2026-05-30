const formulario= document.getElementById("formReserva");

const mensaje=document.getElementById("mensaje");

formulario.addEventListener("submit",function(event){
    event.preventDefault();

    const nombre=document.getElementById("nombre").value.trim();

    const libro=document.getElementById("libro");
    const libroSeleccionado=libro.options[libro.selectedIndex].text;

    const fecha=document.getElementById("libro").value;

    if(nombre==="" || fecha === ""){
        mensaje.textContent="Por favor completar todos los campos.";

        mensaje.classList.remove("text-green-600");

        mensaje.classList.add("text-red-600");

        return;
    }

    mensaje.classList.add("text-green-600");
    mensaje.textContent=`La reserva del libro "${libroSeleccionado}" fue realizada correctamente para ${nombre}.`;

    formulario.reset();
})