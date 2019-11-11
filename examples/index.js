const generator = require('../functions/generator');

var myArgs = process.argv.slice(2);
console.log(generator.generate(myArgs[0]));
