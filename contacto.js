var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) 
{
    inputs[i].addEventListener('keyup', function()
    {
        if(this.value.length>=1) 
        {
            this.nextElementSibling.classList.add('fijar');
        } 
        else 
        {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

function validar(){
    var form = document.form;

    if(form.nombre.value==0){
        alert("el campo nombre esta vacio")
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }

    if(form.apellido.value==0){
        alert("el campo apellido esta vacio")
        form.apellido.value="";
        form.apellido.focus();
        return false;
    }

    if(form.dni.value==0){
        alert("el campo DNI esta vacio")
        form.dni.value="";
        form.dni.focus();
        return false;
    }

    if(form.telefono.value==0){
        alert("el campo Teléfono esta vacio")
        form.telefono.value="";
        form.telefono.focus();
        return false;
    }

    if(form.email.value==0){
        alert("el campo correo esta vacio")
        form.email.value="";
        form.email.focus();
        return false;
    }

    if(form.mensaje.value==0){
        alert("el campo mensaje esta vacio")
        form.mensaje.value="";
        form.mensaje.focus();
        return false;
    }

    alert("¡¡Gracias por escribirnos!! , tu consulta ha sido enviado con exito")
    form.submit();
}


