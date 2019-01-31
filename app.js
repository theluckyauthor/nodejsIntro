const Logger = require('./logger')
const logger = new Logger();

logger.on('message Received', (eventParameters)=>{
    console.log('Llegó');
    console.log(eventParameters);
});

logger.log('mensaje ');
//ahora todos los mensajes se hacen usando 
//la clase logger y no emitter
//ya hay comunicación asincrona entre clases!