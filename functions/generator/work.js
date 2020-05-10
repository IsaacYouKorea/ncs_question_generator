const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '어떤 일을 마무리하는데 갑이 혼자서 하면 {0}시간이 걸리고, 을이 혼자서 마무리하면 {1}시간이 걸린다고 한다. 이 일을 두 사람이 함께하여 마무리하는데 걸리는 시간은?',
    formula: () => {
      // const a = getRandomValue(5, 18);
      // const b = a + getRandomValue(1, 10);
      const a = 7;
      const b = 12;
      const sum = (1 / a) + (1 / b);
      const result = Number((1 / sum).toFixed(2));
      return {
        args: [a, b],
        examples: createExampleList(result, null, '시간'),
        solving: `일의 양을 1이라 가정
갑이 1시간동안 하는 일의 양은 1/${a}
을이 1시간동안 하는 일의 양은 1/${b}
1시간동안 함께 하는 일의 양 1/${a} + 1/${b} = ${b + a}/${a * b}
(${b + a}/${a * b}) * x = 1
x = ${a * b}/${b + a} ≈ ${Number((a * b / (b + a)).toFixed(2))} 시간
`
      }
    }
  },
  {
    title: `김대리가 먼저 {0}일 동안 한 후, 나머지를 오 사원이 {1}일동안 하면 끝낼 수 있는 일이 있다. 이 일을 김대리가 {2}일동안 한 후, 오 사원이 {3}일동안 하여 끝냈다. 김대리가 혼자서 이 일을 마치려면 며칠이 걸리겠는가?`,
    formula: () => {
      // const a = getRandomValue(3, 15);
      // const b = getRandomValue(7, 20);
      // const c = getRandomValue(1, a - 1);
      // const d = getRandomValue(b + 2, b + 20);
      const a = 4;
      const b = 6;
      const c = 2;
      const d = 9;
      const bunmo = ((a * d) - (b * c));
      const result = Number((1 / ((d-b)/bunmo)).toFixed(2));
      return {
        args: [a, b, c, d],
        examples: createExampleList(result, null, '일'),
        solving: `해야하는 일의 양을 1
김대리 일의 속도 x
오사원 일의 속도 y
${a}x + ${b}y = 1
${c}x + ${d}y = 1
x = (${d} - ${b}) / (${a}*${d} - ${b}*${c}) = ${d-b} / ${bunmo}
김대리 혼자 1/x ≈ ${result}`
      }
    }
  },
  {
    title: `김대리가 먼저 {0}일 동안 한 후, 나머지를 오 사원이 {1}일동안 하면 끝낼 수 있는 일이 있다. 이 일을 김대리가 {2}일동안 한 후, 오 사원이 {3}일동안 하여 끝냈다. 오사원이 혼자서 이 일을 마치려면 며칠이 걸리겠는가?`,
    formula: () => {
      const a = getRandomValue(3, 15);
      const b = getRandomValue(7, 20);
      const c = getRandomValue(1, a - 1);
      const d = getRandomValue(b + 2, b + 20);
      // const a = 4;
      // const b = 6;
      // const c = 2;
      // const d = 9;
      const bunmo = ((a * d) - (b * c));
      const result = Number((1 / ((a-c)/bunmo)).toFixed(2));
      return {
        args: [a, b, c, d],
        examples: createExampleList(result, null, '일'),
        solving: `해야하는 일의 양을 1
김대리 일의 속도 x
오사원 일의 속도 y
${a}x + ${b}y = 1
${c}x + ${d}y = 1
y = (${a} - ${c}) / (${a}*${d} - ${b}*${c}) = ${a-c} / ${bunmo}
오사원 혼자 1/y ≈ ${result}`
      }
    }
  },
];
