const net = require("net");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
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

const num = 42;
const str = "hello";
const func = () => {
  // myFunction's code
};

module.exports = {
  myNumber: num, // stores 42 as myNumber
  myString: str, // stores "hello" as myString
  myFunction: func, // stores func (the function) as myFunction
};