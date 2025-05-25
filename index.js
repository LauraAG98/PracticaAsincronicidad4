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
















};