function valida() {

    //valido el nombre
    if (document.valida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.valida.nombre.focus()
           return 0;
    }
 

    //valido el interés
    if (document.valida.asunto.selectedIndex==0){
           alert("Debe seleccionar un motivo de su contacto.")
           document.valida.asunto.focus()
           return 0;
    }
 
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.valida.submit()
}