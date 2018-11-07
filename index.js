var app = require("express")();
var httpServer = require("http").Server(app);
var sockIO = require("socket.io")(httpServer);


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

sockIO.on("connection", function(sock){
    console.log("new connection");
    sock.on("message", function(msg){
        sockIO.emit("newMessage", msg);
    });
});


httpServer.listen(3000, function(){
    console.log('listening on *:' + 3000);
});