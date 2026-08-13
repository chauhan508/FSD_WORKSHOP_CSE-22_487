import EventEmmiter from "node:events";
const myEmmiter = new EventEmmiter();
myEmmiter.on("greet",()=>{
console.log("Class Started");
})

myEmmiter.on("exit",()=>{
    console.log("Class finished")
})
myEmmiter.emit("greet",'');
myEmmiter.emit("exit",'')