//make a timer that takes in specific numbers from the command line.
//these numbers represent time intervals in seconds
//the timer will output a BEEP each time this interval is reached.
//If no numbers are provided, it should not beep.
//If negative numbers are input, they will be ignored.
//If the input is not a number, they will be ignored.

let numbers = process.argv.slice(2);

const alarmClock = function(numbers) {
  for (let elements of numbers) {
    elements = parseInt(elements);
    if (isNaN(elements) || elements <= 0) continue;
      elements *= 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, elements);
    }
  };

alarmClock(numbers);