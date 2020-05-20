const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '{0}시에서 {1}시 사이에 시침과 분침이 정확히 일치하는 시간은 {0}시 x분이다. x의 값은?',
    formula: () => {
      const a = getRandomValue(1, 11);
      const b = a + 1;
      const result = Number((a * 30 / 5.5).toFixed(2));
      return {
        args: [a, b],
        examples: createExampleList(result),
        solving: `분침은 1분당 6도씩 움직이고, 시침은 1분당 0.5도씩 움직인다
${a}시 이후이므로 시침은 ${a * 30}도를 이미 움직인 상태이다,
6x = ${a * 30} + 0.5x
5.5x = ${a * 30}
x = ${a * 30} / 5.5
x ≈ ${result}
`
      }
    }
  },
//   {
//     title: `{0}시에서 {1}시 사이에 시침과 분침이 서로 반대 방향으로 일직선 위에 있을 때의 시각은 {0}시 x분이다. x의 값은?`,
//     formula: () => {
//       const a = getRandomValue(1, 11);
//       const b = a + 1;
//       const result = Number(((a * 30 - 180) / 5.5).toFixed(2));
//       return {
//         args: [a, b],
//         examples: createExampleList(result),
//         solving: `분침은 1분당 6도씩 움직이고, 시침은 1분당 0.5도씩 움직인다
// ${a}시 이후이므로 시침은 ${a * 30}도를 가 있고,
// 6x + 180 = ${a * 30} + 0.5x
// 5.5x = ${a * 30} - 180
// x = ${(a * 30) - 180} / 5.5
// x ≈ ${result}
// `
//       }
//     }
//   }
];
