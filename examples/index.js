const generator = require('../functions/generator');

var myArgs = process.argv.slice(2);
// console.log(generator.generate(myArgs[0]));


const fs = require('fs');
saveQuizsToNewFiles(myArgs[0]);

async function saveQuizsToNewFiles(category) {
  for(var i = 0; i < 3000; i++) {
    const result = JSON.stringify(generator.generate(category));
    await fs.writeFileSync(`results/${myArgs[0]}/${i}.json`, result);
  }
}
