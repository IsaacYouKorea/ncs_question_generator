const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '어떤 물건의 정가는 원가의 {0}배라고 한다. 그런데 물건이 팔리지 않아 {1}% 할인 행사를 하여 {2}원에 팔고 있다. 그렇다면 물건의 원가와 할인 가격의 차이는 얼마인가?',
    formula: () => {
      // 원가
      const a = getRandomValue(11, 30, 1, true) / 10;
      const orgPrice = getRandomValue(30000, 200000, 10000);
      // 정가
      const price = Math.round(orgPrice * a);
      const b = getRandomValue(10, 80, 10);
      const discount = ((100 - b) / 100);
      const c = Math.round(price * discount);
      const result = Number(Math.abs(orgPrice - c));
      const diff = getRandomValue(1000, 5000, 1000);
      return {
        args: [a, b, c],
        examples: createExampleList(result, diff, '원'),
        solving: `할인가 ${c}원은 정가의 ${100-b}%이므로 10%는 ${c / ((100-b)/10)}이다.
따라서 정가는 10배하여 ${price}이다.
그리고 정가는 원가의 ${a}배 이므로 원가는 ${orgPrice}이다.
원가와 할인가격의 차이는 ${result}원이다`
      }
    }
  },
  {
    title: '제품 A와 제품B는 각각 원가에 {0}%를 더한 가격을 정가로 한다. 이때, 두 제품의 정가 사이는 {1}원이다. 두 제품 A, B의 원가 합은 {2}원일 때, A의 정가는 얼마인가?(단, 원가는 A가 B보다 크다)',
    formula: () => {
      const bCost = getRandomValue(10000, 50000, 5000);
      const aCost = bCost + getRandomValue(5000, 50000, 5000);
      const percent = getRandomValue(10, 40, 5);
      const realPercent = percent / 100 + 1;
      const aPrice = Number((aCost * realPercent).toFixed(2));
      const bPrice = Number((bCost * realPercent).toFixed(2));
      const sumCost = aCost + bCost;
      const diffPrice = Math.round(aPrice - bPrice);
      console.log(aCost, bCost, aPrice, bPrice);
      return {
        args: [percent, diffPrice, sumCost],
        examples: createExampleList(aPrice, getRandomValue(1000, 3000, 500), '원'),
        solving: `A와 B의 원가를 x, y로 정의
x + y = ${sumCost}
${realPercent}x - ${realPercent}y = ${diffPrice}
연립방정식으로 풀면
2x = ${aCost * 2}
x = ${aCost}
이므로 a의 정가 ${realPercent}x = ${aPrice}이다
        `
      }
    },
  }
];
