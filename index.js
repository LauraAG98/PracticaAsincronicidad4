




















    //Se ingresa el correo del remitente que enviará la información del correo
    const contenidoCorreo = {
        from:'lauraguirregarcia1998@gmail.com',
        to: destinatarios,
        subject:'Hola! Correo enviado',
        text:'Este correo fue enviado con Node.js'
    }

    //Se realiza envío del correo, si ocurre un error, salta al catch e imprime un mensaje de error
    try{
        const info=await enviarCorreo.sendMail(contenidoCorreo)
        console.log("Envío exitoso",info.response);
    } catch(error){
        console.error("Error al enviar el correo",error);
    }

    enviarCorreos();