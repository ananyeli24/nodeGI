// MEDIUM: Create a node application that will read all of the planets 
// in the solar system from a text file and print them to the console.
// Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune,
//  pluto (I still believe in you pluto) 

'use strict'

const fs = require('fs')

var planets = 'planetas.txt';

fs.readFile(planets, 'utf8', (err, data) => {
  if(err) {
    console.log(err.message);
} else {
    console.log(data);
}
});