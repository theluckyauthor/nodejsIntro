const EventEmitter = require('events');
class Logger extends EventEmitter{
log(message)
{
    console.log(message);
    this.emit('message Received', {id:1, type: 'http'});
}
}
 
module.exports = Logger;
