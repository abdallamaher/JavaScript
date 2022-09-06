const {fork} = require("child_process")

const childProcess = fork('./CPU_non_Blocking_file.js')
childProcess.send({"number": 10000000})
childProcess.on("message", message => console.log(message))

console.log("I am not Blocked")