const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionAnswer = function() {

};

rl.question('What is your name? Nicknames are also acceptable! ', (name) => {
  // TODO: Log the answer in a database

  rl.question('What is your superpower? ', (superpower))
  // console.log(`My name is ${name}`);
  rl.pause(); // terminates the session.
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

