const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '속력이 일정한 기차가 {0}m인 다리를 완전히 통과하는데 {1}초가 걸리고, {2}m인 터널을 완전히 통과하는데 {3}초가 걸린다. 이 때 기차의 길이를 고르면?',
    formula: () => {
      const b = getRandomValue(2, 10);
      const totalDistance = getRandomValue(100, 200, b);
      const train = getRandomValue(30, 80);
      const a = totalDistance - train;
      const speed = (a + train) / b;
      const d = b * 2;
      const c = speed * d;
      const bc = b*c;
      const da = d*a;
      const result = Number(((bc - da)/(d-b)).toFixed(2));
      
      return {
        args: [a, b, c, d],
        examples: createExampleList(result, null, 'm'),
        solving: `(${a} + x)/${b} = (${c} + x)/${d}
${d}(${a} + x) = ${b}(${c} + x)
${da} + ${d}x = ${bc} + ${b}x
${d-b}x = ${bc - da}
x ≈ ${result}
        `
      }
    }
  },
//   {
//     title: `길이가 {0}m인 두 열차가 각각 시속 {1}km로 마주보며 접근하고 있다. 두 열차가 완전히 스치고 지나갈 때까지 걸리는 시간은?`,
//     formula: () => {
//       const a = getRandomValue(50, 400);
//       // const b = getRandomValue(30, 300);
//       const second = getRandomValue(50, 200, 36) / 10;
//       const b = (a * 1000) / (second * 3600); // km/시간
//       const result = 0;

//       return {
//         args: [a, b],
//         examples: createExampleList(result, null, '초'),
//         solving: `이동거리 : ${a} * 2
// 초속(m/2) : ${b} * 2 * 1000 / 3600 = ${b * 2000 / 3600}(m/초)
// 이동거리 ${a * 2}m를 이동하는데 걸린 시간
// ${a * 2} / ${b * 2000 / 3600} = ${second}초
// `
//       }
//     }
//   },
  {
    title: `A, B 두 사람이 둘레가 {0}m인 운동장을 서로 반대 방향으로 각각 {1}m/s, {2}m/s의 속력으로 달렸다. 두 사람이 마주칠 때 A는 몇 m를 이동했는가?`,
    formula: () => {
      const sum = getRandomValue(10, 25);
      const length = getRandomValue(100, 1000, sum);
      const a = getRandomValue(2, sum - 3);
      const b = sum - a;
      const time = length / sum;
      const result = a * time;
      return {
        args: [length, a, b],
        examples: createExampleList(result, null, 'm')
      }
    }
  }
];
