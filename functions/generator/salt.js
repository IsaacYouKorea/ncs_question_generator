const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '{0}%의 소금물과 {1}%의 소금물을 완전히 섞어 {2}%의 소금물 {3}g을 만들려고 한다. 이때 필요한 {0}%의 소금물과 {1}%의 소금물의 양 차이는?',
    formula: () => {
      const a = getRandomValue(15, 30);
      const b = getRandomValue(5, 12);
      const c = getRandomValue(a, b);
      const diffA = Math.abs(c - a);
      const diffB = Math.abs(c - b);
      const diff = Math.abs(b - a);
      const d = diff * getRandomValue(10, 30);
      const valueA = (diffA / diff) * d;
      const valueB = (diffB / diff) * d;
      const result = Number(Math.abs(valueA - valueB).toFixed(2));
      return [a, b, c, d, result, ...createExampleList(result, null, 'g')];
    }
  },
  {
    title: `{0}%의 소금물 {1}g이 있다. 여기에 몇 g의 소금을 더 넣으면 {2}%의 소금물이 되는가?`,
    formula: () => {
      const a = getRandomValue(5, 40);
      const b = getRandomValue(100, 900, 100);
      const c = a + getRandomValue(2, 30, 2) + 1;
      const percentA = a / 100;
      const percentC = c / 100;
      const target = ( (percentC * b) - (percentA * b)) / (1 - percentC);
      const result = Number(Math.abs(target).toFixed(2));
      return [a, b, c, result, ...createExampleList(result, null, 'g')];
    }
  }
];
