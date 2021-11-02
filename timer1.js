
const inputs = process.argv.slice(2);
let numbers = inputs.filter(Number); // only use Numbers
 

const timer = function() {
  for (const num of numbers) {
    if(num > 0){ // numbers has to be greater than 0
    setTimeout(() => {
      console.log('beep'); // beep to have visual 
      return process.stdout.write('\x07'); // sound
    }, num * 1000);
  }
}

};

timer(numbers);
    