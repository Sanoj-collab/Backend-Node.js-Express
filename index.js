const express = require("express");

const app = express();

console.dir(app);

// PORT : Ports are the logical endpoint oif the network connection that s used to exchange nformation between a web server and web client.

let port = 8080;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}.`);
});

app.use((req, res) =>{
    console.log("Request recieved.");
});


