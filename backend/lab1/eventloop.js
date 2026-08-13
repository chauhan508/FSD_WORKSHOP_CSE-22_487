console.log("this is the starting point of my code");
process.nextTick(( )=>{
    console.log("this is process.next tick code");
})
setTimeout(()=>{
    console.log("this is first time out function");

},2000);
console.log("this is ending point of my code");