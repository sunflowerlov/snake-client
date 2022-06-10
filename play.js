const net = require("net");
const connect = require("./client.js")

// let coonect
const setupInput = function () {
  const stdin = process.stdin;//stdin allow us to listen for keyboard input and react
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    console.log(key)

    // 'q' will stop process
    if(key === 'q') {
      process.exit()
    }
  };
  stdin.on("data", handleUserInput);//"data" => user input , representing (key) here
  return stdin;
};

// connect()
setupInput()
module.exports = { A: 42, B: 43, C: 44 };

//https://stackoverflow.com/questions/14406108/how-to-trigger-event-stdin-ondata-callback-in-the-code