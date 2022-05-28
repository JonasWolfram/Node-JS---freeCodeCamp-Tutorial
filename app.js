const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// on = Listener with two Parameter: 1. Event Name  / 2. Listener
eventEmitter.on("tutorial", () => {
  console.log("Event has occurred");
});

// emit =
eventEmitter.emit("tutorial");
