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
  // {
  //   title: `생산 기계는 {0}분마다 1개의 제품을 생산하며 총 {1}대가 있다. 포장 기계는 {2}분에 1개를 포장하며 총 {3}대가 있다. 하루에 오전 9시부터 오후 5시까지 기계를 가동했을 때, 포장 못한 상품은 몇 개인가? (1시 ~ 2시는 점심시간으로 작업을 진행하지 않고, 어제 미처 포장못 한 상품은 {4}개이다)`,
  //   formula: () => {
  //     const a = getRandomValue(2, 6);
  //     const b = getRandomValue(4, 15);
  //     const c = getRandomValue(2, 6);
  //     const d = getRandomValue(4, 15);
  //     const e = getRandomValue(50, 200, 10);
  //     const valueA = (60 / a) * b;
  //     const valueB = (60 / c) * d;
  //     if (valueA > valueB) {
  //       const result = ((60 / a) * 7 * b + e) - ((60 / c) * 7 * d);
  //       return [a, b, c, d, e, result, ...createExampleList(result, null, '개')];
  //     }
  //     const result = ((60 / c) * 7 * d + e) - ((60 / a) * 7 * b);
  //     return [c, d, a, b, e, result, ...createExampleList(result, null, '개')];
  //   }
  // }
];
