const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '올해 갑은 {0}살이고, 을은 {1}살이다. 몇 년 후에 갑이 을의 나이에 {2}배는가?',
    formula: () => {
      const son = getRandomValue(10, 30);
      const c = getRandomValue(2, 5);
      const mom = son * c;
      const result = getRandomValue(3, 9);

      const a = mom - result;
      const b = son - result;

      return {
        args: [a, b, c],
        examples: createExampleList(result, null, '년')
      }
    }
  }
];
