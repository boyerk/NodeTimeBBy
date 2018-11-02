console.log("Hello World!");
var http = require('http');
var hostname = "127.0.0.1";
var port = 3000;
var app = require('express')();
var server = http.Server(app);


var dataObject = {
    "status": "OK",
    "amount": 123,
    "cost": 12.45
}

app.get('/', function(req, res) {
    res.end('This is a name generator');
});

// app.get('/somethingElse', function(req, res) {
//     res.send('dataObject');
// });
app.get('/createStory/:name1/:name2/:word3/:place4/:thing5', function(req, res) {

    // parseInt();
    // parseFloat();
    // Number();

    // var num1 = parseInt(req.params.num1);
    // var num2 = parseInt(req.params.num2);
    var name1 = req.params.name1;
    var name2 = req.params.name2;
    var word3 = req.params.word3;
    var place4 = req.params.place4;
    var thing5 = req.params.thing5;
    var responseData = {
        "name1": name1,
        "name2": name2,
        "word3": word3,
        "place4": place4,
        "thing5": thing5,
        "result": name1 + " " + name2 + "son, From the house of " + word3 + "." + " Who lives in the land of " + place4 + " and he travelled far and wide searching for a " + thing5 + "!"
    }
    res.send(responseData);
});
// var server = http.Server(function90(req, res) {
//     res.end("Hello Bois I am Here For u")
// });
server.listen(port, hostname, function() {
    console.log("Server Started");
});