import { EventEmitter } from "node:events";

function createDomElements() {
    const button = new EventEmitter();
    return button;
}

const button = createDomElements();

button.on("save", () => {
    console.log("Saving...");
});

button.on("submit", () => {
    console.log("Data submitted successfully");
});

function handleClick(event) {
    console.log("Mouse clicked");
    console.log(event.eventType);
    console.log(`Message: ${event.detail}`);
}

button.on("click", (event) => {
    handleClick(event);
});

// Emit events
button.emit("save");
button.emit("submit");
button.emit("click", {
    eventType: "click",
    detail: "Button clicked successfully"
});