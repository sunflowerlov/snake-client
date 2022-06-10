const net = require("net");
const myObject = require("./play.js");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    conn.write('you ded cuz you idled')//sending message to server
  });

  conn.on("data", (data) => {//the message from server
    console.log(data) //handling incoming data
  })

  console.log('you ded cuz you idled')
  return conn;


  
};

console.log("Connecting ...");
connect();

myObject.myNumber; // => 42
myObject.myString; // => hello
myObject.myFunction; // the function you wrote
