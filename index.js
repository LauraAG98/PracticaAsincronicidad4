//Se importa el modulo nodemailer
const nodemailer=require('nodemailer');

//Se crea funcion asincrona para el envío del correo
async function enviarCorreos() {
    const enviarCorreo=nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:'lauraguirregarcia@gmail.com',
            pass: 'hvtl tcqz bwrr eqnv'
        }
    });

    //Se ingresan los correos a los cuales será enviada la información
    const destinatarios = [
        'lauraguirregarcia1998@gmail.com',
        'salazarsanchezbrayan40@gmail.com',
        'yishiro1221@gmail.com',
        'brayansalazzar1221@gmail.com'
    ]

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
};
enviarCorreos();