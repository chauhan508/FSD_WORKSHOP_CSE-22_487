import { EventEmitter } from "events";

const schoolBell = new EventEmitter();

// Create events
schoolBell.on("classStart", () => {
    console.log("Class Started!");
});

schoolBell.on("classEnd", () => {
    console.log("Class Ended!");
});

// Trigger events
schoolBell.emit("classStart");
schoolBell.emit("classEnd");
