const libroBuscado=document.getElementById("busqueda");
libroBuscado.addEventListener("keyup",function(){
    let filtro=libroBuscado.value.toLowerCase();
    let filas=document.querySelectorAll("tbody tr");

    filas.forEach(function(fila){
        let texto=fila.textContent.toLowerCase();

        if(texto.includes(filtro)){
            fila.style.display="";
        }else{
            fila.style.display="none";
        }
    }); 
});