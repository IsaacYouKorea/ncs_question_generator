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
      return [a, b, c, result, ...createExampleList(result, diff, '원')];
    }
  },
  {
    title: '제품 A와 제품B는 각각 원가에 {0}%를 더한 가격을 정가로 한다. 이때, 두 제품의 정가 사이는 {1}원이다. 두 제품 A, B의 원가 합은 {2}원일 때, A의 정가는 얼마인가?(단, 원가는 A보다 B가 크다)',
    formula: () => {
      const bCost = getRandomValue(10000, 50000, 5000);
      const aCost = bCost + getRandomValue(5000, 250000, 5000);
      const percent = getRandomValue(10, 40, 5);
      const realPercent = percent / 100 + 1;
      const aPrice = aCost * realPercent;
      const bPrice = bCost * realPercent;
      const sumCost = aCost + bCost;
      const diffPrice = Math.round(aPrice - bPrice);
      return [percent, diffPrice, sumCost, aPrice, ...createExampleList(aPrice, getRandomValue(1000, 3000, 500), '원')];
    },
  }
];
