import  dotenv from 'dotenv'
dotenv.config()
//*==================================[NOTA]======================================*//

//PARA FUNCIONALIDAD DE ENVIO DE MAILS Y WHTASAPP DESACTIVAR EVENTUALMENTE EL ANTIVIRUS
//HABILITAR SANDBOX TWILIO PARA REALIZAR LAS PRUEBAS DE WHATSAPP (DURA SOLO 24HS)

//*==================================[]======================================*//

export default{
    MONGO_URI: process.env.MONGO_DB_URI,
    PORT: process.env.PORT || 8080,
    MODO : process.argv[2],
    PRIVATE_KEY: process.env.PRIVATE__KEY,
    ADMIN_PASS: process.env.ADMIN__PASS,
    EMAIL_USER: process.env.EMAIL__USER,
    EMAIL_PASS: process.env.EMAIL__PASS,
    //TWILIO_SID:process.env.TWILIO__SID,
    //TWILIO_TOKEN:process.env.TWILIO__TOKEN,
    //TWILIO_TRIAL_NUMBER: process.env.TWILIO_TRIAL_NUMBER, //para SMS
    //TWILIO_WHTSP_TRIAL_NUMBER:process.env.TWILIO__WHTSP_TRIAL_NUMBER,

    
    //VARIABLES GLOBALES PARA ENVIO DE EMAIL Y WHATSAP A ADMIN
    ADMIN_EMAIL:process.env.ADMIN__EMAIL,
    //ADMIN_PHONE:process.env.ADMIN__PHONE,
 
}


