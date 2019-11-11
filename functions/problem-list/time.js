const util = require('./util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '속력이 일정한 기차가 {0}m인 다리를 완전히 통과하는데 {1}초가 걸리고, {2}m인 터널을 완전히 통과하는데 {3}초가 걸린다. 이 때 기차의 길이를 고르면?',
    formula: () => {
      const a = getRandomValue(100, 200, 10);
      const b = getRandomValue(2, 10);
      const c = getRandomValue(200, 500, 10);
      const d = getRandomValue(10, 20);
      const result = +Math.abs(((b * c) - (d * a)) / (d - b)).toFixed(2);
      return [a, b, c, d, result, ...createExampleList(result, null, 'm')];
    }
  },
  {
    title: `길이가 {0}m인 두 열차가 각각 시속 {1}km로 마주보며 접근하고 있다. 두 열차가 완전히 스치고 지나갈 때까지 걸리는 시간은?`,
    formula: () => {
      const a = getRandomValue(50, 400);
      const b = getRandomValue(30, 300);
      const speed = (a * 10 / 36);
      const result = +Math.abs(a / speed).toFixed(2);
      return [a, b, result, ...createExampleList(result, null, '초')];
    }
  },
  {
    title: `키보드 자판을 이용하여 1~9사이의 숫자를 입력할 때, 숫자 1개당 {0}초가 걸리고 콤마(,)의 경우는 {1}초가 걸린다고 할 때, 아래의 숫자와 기호를 모두 입력할 때 걸리는 시간은 얼마인가?\n1, 3, 5, 7, 9, ..., 91, 93, 95, 97, 99`,
    formula: () => {
      const a = getRandomValue(1, 10) / 10;
      const b = getRandomValue(1, 10) / 10;
      const result = 95 * a + 49 * b;
      return [a, b, result, ...createExampleList(result, null, '초')];
    }
  },
  {
    title: `전등이 처음에 {0}초 후에 켜졌다가 {1}초 후에 꺼지고를 반복하고, 라디오는 {2}초 후에 켜졌다가 {3}초후에 꺼지를 반복한다. 처음 이후 최초로 전등과 라디오가 동시에 꺼졌을 때, 이전에 전등이 꺼진 횟수는 총 몇회인가?`,
    formula: () => {
      const a = getRandomValue(2, 16);
      const b = getRandomValue(2, 16);
      const c = getRandomValue(2, 16);
      const d = getRandomValue(2, 16);
      const lcmValue = lcm(a + b, c + d);
      const result = lcmValue / (a + b);
      return [a, b, c, d, result, ...createExampleList(result, null, '회')];
    }
  },
];
