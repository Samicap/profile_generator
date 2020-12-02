const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable! ', (name) => {
  rl.question('What is your superpower? ', (superpower) => {
    rl.question("shfksad", (asd) => {

    });

  });
  console.log(`My name is ${name} an`);
  rl.close(); // terminates the session.
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

