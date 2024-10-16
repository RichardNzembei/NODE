var events=require('events');
var eventEmitter=new events.EventEmitter();

  eventEmitter.on('event',(name)=>{
    console.log(`I received an event from, ${name}`)
  });
  eventEmitter.emit('event', 'reuben')