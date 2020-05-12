const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '올해 A는 {0}살이고, B는 {1}살이다. 몇 년 후에 갑이 을의 나이에 {2}배는가?',
    formula: () => {
      const son = getRandomValue(10, 30);
      const c = getRandomValue(2, 5);
      const mom = son * c;
      const result = getRandomValue(3, 9);

      const a = mom - result;
      const b = son - result;

      return {
        args: [a, b, c],
        examples: createExampleList(result, null, '년'),
        solving: `x년 후 A와 B의 나이 ${a}+x, ${b}+x
${a}+x = ${c}(${b} + x)
${a}+x = ${b*c} + ${c}x
${c-1}x = ${a}-${b*c}
x = (${a}-${b*c})/${c-1}
x = ${result}`
      }
    }
  }
];
