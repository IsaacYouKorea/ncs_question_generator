const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: `키보드 자판을 이용하여 1~9사이의 숫자를 입력할 때, 숫자 1개당 {0}초가 걸리고 콤마(,)의 경우는 {1}초가 걸린다고 할 때, 아래의 숫자와 기호를 모두 입력할 때 걸리는 시간은 얼마인가?\n1, 3, 5, 7, 9, ..., 91, 93, 95, 97, 99`,
    formula: () => {
      const a = getRandomValue(1, 10) / 10;
      const b = getRandomValue(1, 10) / 10;
      const result = 95 * a + 49 * b;
      return {
        args: [a, b],
        examples: createExampleList(result, null, '초'),
        solving: `한 자리 5개 + 두 자리 45개 = 5*1 + 45*2 = 95
, 개수 49개
95*${a} + 49*${b}= ${result}
`
      }
    }
  },
  {
    title: `전등이 처음에 {0}초 후에 켜졌다가 {1}초 후에 꺼지고를 반복하고, 라디오는 {2}초 후에 켜졌다가 {3}초후에 꺼지를 반복한다. 처음 이후 최초로 전등과 라디오가 동시에 꺼졌을 때, 이전에 전등이 꺼진 횟수는 총 몇회인가?`,
    formula: () => {
      const a = getRandomValue(2, 16);
      const b = getRandomValue(2, 16);
      const c = getRandomValue(2, 16);
      const d = getRandomValue(2, 16);
      const sumBulb = a + b;
      const sumRadio = c + d;
      const lcmValue = util.lcm(sumBulb, sumRadio);
      const result = lcmValue / (sumBulb);
      return {
        args: [a, b, c, d],
        examples: createExampleList(result, null, '회'),
        solving: `전등의 한 사이클 걸리는 시간 ${a}+${b}=${sumBulb}
라디오의 한 사이클 걸리는 시간 ${c}+${d}=${sumRadio}
${sumBulb}, ${sumRadio}의 최소 공배수 ${lcmValue}
${lcmValue}초 동안 전등이 꺼진 횟수 ${lcmValue}/${sumBulb}
`
      }
    }
  },
];
