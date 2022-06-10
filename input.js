

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
module.exports = setupInput;