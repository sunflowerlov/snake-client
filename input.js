const net = require("net");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;//stdin allow us to listen for keyboard input and react
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    console.log(key)

    // 'q' will stop process
    if (key === 'q') {
      process.exit()
    }

    if (key === 'w') {
      connection.write("Move: up")//sending message to server
    }

    if (key === 'a') {
      connection.write("Move: left")//sending message to server
    }

    if (key === 's') {
      connection.write("Move: down")//sending message to server
    }

    if (key === 'd') {
      connection.write("Move: right")//sending message to server
    }

  };
  stdin.on("data", handleUserInput);//"data" => user input , representing (key) here
  return stdin;
};

// connect()

module.exports = setupInput;