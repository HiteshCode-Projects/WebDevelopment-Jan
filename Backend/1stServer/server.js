//Step 1 : Import The Required Modules - Build In Modeules and External Moduels(Installation Required)
// How To import moudles in Node JS
// 1. Common JS Modules - require() - Default in Node JS
// 2. ES6 Modules - import - Need To Enable In Package.json
const http = require("http");

//Step 2 : Create A Server= Backend Application That Listens To Incoming Requests And Send Response Back To The Client
const server = http.createServer((req, res)=>{
//req - Request Object - Contains Information About The Incoming Request
//res - Response Object - Used To Send Response Back To The Client

res.write("Hello World From Node JS Server hello");
res.end(); // End The Response - Send The Response Back To The Client
});

//Step 3 : Start The Server And Listen To Incoming Requests On A Specific Port
//Port - A Number That Identifies A Specific Process On The Server - Common Ports - 80(HTTP), 443(HTTPS), 3000(Development)
server.listen(3000, ()=>{
    console.log("Server Is Running On Port 3000");
})