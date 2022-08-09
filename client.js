const net = require("net");
const {IP, PORT} = require('./constant')

const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: LLS");
    conn.write("Say: hello");
 
  });

  conn.on("data", (data) => {
    console.log(data) //you crashed, so you ded.
  });  

  return conn;
};


module.exports = connect