const EventEmitter = require('events');

const event = new EventEmitter();

event.on('hello', () => {
    console.log('Hello Event');
});

event.emit('hello');