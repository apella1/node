const Logger = require('./logger'); 

//instantiating Logger because it is a class
const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.on('Hello World');