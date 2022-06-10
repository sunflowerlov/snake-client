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
    conn.write("Name: LLS")//sending message to server
  });


  conn.on("connect", () => {
    setTimeout(() => {
      conn.write("Move: up")//sending message to server
    }, 1000)
  });  

  conn.on("connect", () => {
    setTimeout(() => {
      conn.write("Move: left")//sending message to server
    }, 1300)
  });  


  conn.on("data", (data) => {//the message from server
    console.log(data) //handling incoming data
  })

  console.log('you ded cuz you idled')
  return conn;


  
};

console.log("Connecting ...");
connect();

console.log(myObject); // => { A: 42, B: 43, C: 44 }
console.log(myObject.A); // => 42
console.log(myObject.B); // => 43
console.log(myObject.C); // => 44
