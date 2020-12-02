const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable! ', (name) => {
  rl.question('What is your superpower? ', (superpower) => {
    rl.question("What's an activity you like doing? ", (activity) => {
      rl.question("What do you listen to while doing that?", (listen) => {
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
          rl.question("What's your favourite thing to eat for that meal?", (favMeal) => {
            rl.question("Which sport is your absolute favourite?", (sport) => {
              console.log(`Hi there interglactic traveller!  I'm the alien ${name} from the planet XY-76345!  My superpower is ${superpower}! \n
              While travelling at warp speed I like to listen to ${listen}.  Aboard my luxury space cruiser I like to eat ${favMeal} for ${meal}!  \n
              Once I land on new planets I like to partake in a round of ${sport}!`);
            });
          });
        });
      });
    });
  });
  rl.close(); // terminates the session.
});


