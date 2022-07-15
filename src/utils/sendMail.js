import nodemailer, {  createTransport } from "nodemailer";
import config from "../../config.js";
import logger from './logger.js'

//*==================================[NOTA]======================================*//
//ES POSIBLE QUE EL ANTIVIRUS PUEDA BLOQUEAR LA CONEXION

const transporter = nodemailer.createTransport({

    host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: config.EMAIL_USER,
            pass: config.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }


});


const sendMail = async (options) => {
    try{
        const info = await transporter.sendMail(options)
        logger.info(info)
    }catch(error){logger.error(error)}
}

export default sendMail