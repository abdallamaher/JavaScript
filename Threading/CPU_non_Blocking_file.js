process.on("message", message => {
    const Response = run(message.number);
    process.send(Response);
    process.exit();
})

const run = (limit) => {
    console.log("start");
    let num = 0;
    while(num < limit) 
        num++;
    console.log("end");
    return {
        "number": num,
    }
}