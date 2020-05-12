const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: `1번 기계의 생산률은 {0}%, 2번 기계의 생산률은 {1}%이다. 1번 기계의 불량률은 {2}%이고, 2번 기계의 불량률은 {3}% 라고 한다면, 생산된 불량품이 1번 기계의 생산품일 확률을 고르면?`,
    formula: () => {
      const a = getRandomValue(50, 70, 5);
      const b = a + getRandomValue(10, 30, 5);
      const c = getRandomValue(1, 10);
      const d = getRandomValue(1, 10);
      const faultA = Math.round((a * 100) * (c / 100));
      const faultB = Math.round((b * 100) * (d / 100));
      const faultTotal = faultA + faultB;
      const result = Number((faultA / faultTotal * 100).toFixed(2));
      return {
        args: [a, b, c, d],
        examples: createExampleList(result, getRandomValue(0.3, 2, 0.1, false), '%')
      }
    }
  },
  {
    title: `1번 기계의 생산률은 {0}%, 2번 기계의 생산률은 {1}%이다. 1번 기계의 불량률은 {2}%이고, 2번 기계의 불량률은 {3}% 라고 한다면, 생산된 불량품이 2번 기계의 생산품일 확률을 고르면?`,
    formula: () => {
      const a = getRandomValue(50, 70, 5);
      const b = a + getRandomValue(10, 30, 5);
      const c = getRandomValue(1, 10);
      const d = getRandomValue(1, 10);
      const faultA = Math.round((a * 100) * (c / 100));
      const faultB = Math.round((b * 100) * (d / 100));
      const faultTotal = faultA + faultB;
      const result = Number((faultB / faultTotal * 100).toFixed(2));
      return {
        args: [a, b, c, d],
        examples: createExampleList(result, getRandomValue(0.3, 2, 0.1, false), '%')
      }
    }
  },
  {
    title: `1번 기계의 생산률은 {0}%, 2번 기계의 생산률은 {1}%이다. 1번 기계의 불량률은 {2}%이고, 2번 기계의 불량률은 {3}% 라고 한다면, 생산된 정상 물품이 1번 기계의 생산품일 확률을 고르면?`,
    formula: () => {
      const a = getRandomValue(50, 70);
      const b = a + getRandomValue(10, 30);
      const c = getRandomValue(1, 10);
      const d = getRandomValue(1, 10);
      const normalA = Math.round((a * 100) * ((100 - c) / 100));
      const normalB = Math.round((b * 100) * ((100 - d) / 100));
      const normalTotal = normalA + normalB;
      const result = Number((normalA / normalTotal * 100).toFixed(2));

      return {
        args: [a, b, c, d],
        examples: createExampleList(result, getRandomValue(0.3, 2, 0.1, false), '%')
      };
    }
  },
];
