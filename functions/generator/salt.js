const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '{0}%의 A 소금물과 {1}%의 B 소금물을 완전히 섞어 {2}%의 소금물 {3}g을 만들려고 한다. 이때 필요한 {0}%의 소금물과 {1}%의 소금물의 양 차이는?',
    formula: () => {
      const a = getRandomValue(15, 30);
      const b = getRandomValue(5, 12);
      const c = getRandomValue(a - 1, b + 1);
      const diffA = Math.abs(c - a);
      const diffB = Math.abs(c - b);
      const diff = Math.abs(b - a);
      const d = diff * getRandomValue(10, 30);
      const valueA = (diffA / diff) * d;
      const valueB = (diffB / diff) * d;
      const result = Number(Math.abs(valueA - valueB).toFixed(2));
      return {
        args: [a, b, c, d],
        examples: createExampleList(result, null, 'g'),
        solving: `만들어야 되는 농도와의 차이는 각각 ${diffA}%, ${diffB}%
질량의 비율은 ${diffB}:${diffA}
소금물 양의 차이 (${diffA > diffB ? diffA : diffB} - ${diffA > diffB ? diffB : diffA}) / ${diff} * ${d} = ${result}g
`
      }
    }
  },
  {
    title: `{0}%의 소금물 {1}g이 있다. 여기에 몇 g의 소금을 더 넣으면 {2}%의 소금물이 되는가?`,
    formula: () => {
      const a = getRandomValue(5, 50);
      const b = getRandomValue(100, 900, 100);
      const c = a + getRandomValue(2, 30, 1);
      const x = ((c * b) - (a * b)) / (100 - c);
      
      return {
        args: [a, b, c],
        examples: createExampleList(x, null, 'g'),
        solving: `
          소금은 농도 100%인 소금물과 같음
(${a} * ${b}) + 100x = ${c}(${b} + x)
(100 - ${c})x = ${c - a} * ${b}
${100-c}x = ${(c - a) * b}
x ≈ ${(((c - a) * b) / (100-c)).toFixed(2)}
        `
      }
    }
  }
];
