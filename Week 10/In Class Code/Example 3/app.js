let express = require("express");
let socket = require("socket.io");

let app = express();

let server = app.listen(4000, ()=>{
    console.log("Listening to port 4000");
})


app.use(express.static("public"));

let io = socket(server);

io.on('connection', (socket)=>{

    console.log("Socket is working", socket.id);

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })

    socket.on('typing', (data)=>{
        socket.broadcast.emit("typing",data)
    })

})