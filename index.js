const nodemailer = require('nodemailer');

async function enviarCorreos() {
    const enviarCorreo = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lauraguirregarcia@gmail.com',
            pass: 'hvtl tcqz bwrr eqnv'
        }
    });

    const destinatarios = [
        'lauraguirregarcia1998@gmail.com',
        'salazarsanchezbrayan40@gmail.com',
        'yishiro1221@gmail.com',
        'brayansalazzar1221@gmail.com'
    ];

    // Creamos un array de promesas, una por cada destinatario
    const promesasEnvio = destinatarios.map(destinatario => {
        const contenidoCorreo = {
            from: 'lauraguirregarcia1998@gmail.com',
            to: destinatario,
            subject: 'Hola! Correo enviado',
            text: 'Este correo fue enviado con Node.js'
        };

        return enviarCorreo.sendMail(contenidoCorreo);
    });

    try {
        const resultados = await Promise.all(promesasEnvio);
        resultados.forEach((info, index) => {
            console.log(`Correo enviado a ${destinatarios[index]}: ${info.response}`);
        });
    } catch (error) {
        console.error("Error al enviar uno o más correos:", error);
    }
}

enviarCorreos();
