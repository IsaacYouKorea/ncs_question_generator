const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '키를 나타낸 것이다. 키의 평균은?\n\n{0}, {1}, {2}, {3}, {4}, \n{5}, {6}, {7}, {8}, {9}\n',
    formula: () => {
      const a = getRandomValue(150, 190);
      const b = getRandomValue(150, 190);
      const c = getRandomValue(150, 190);
      const d = getRandomValue(150, 190);
      const e = getRandomValue(150, 190);
      const f = getRandomValue(150, 190);
      const g = getRandomValue(150, 190);
      const h = getRandomValue(150, 190);
      const i = getRandomValue(150, 190);
      const j = getRandomValue(150, 190);

      const total = a + b + c + d + e + f + g + h + i + j;
      const result = Number((total / 10).toFixed(2));

      return {
        args: [a, b, c, d, e, f, g, h, i, j],
        examples: createExampleList(result, 2, 'cm'),
        solving: `대략적인 값 170을 기준 잡음
${a-170}   ${b-170}   ${c-170}   ${d-170}   ${e-170}   ${f-170}   ${g-170}   ${h-170}   ${i-170}   ${j-170}
170 + ${total-1700}/10
평균 : ${total/10}
`
      }
    }
  },
  {
    title: '10명의 몸무게를 나타낸 것이다. 몸무게의 평균은?\n\n{0}, {1}, {2}, {3}, {4},\n{5}, {6}, {7}, {8}, {9}\n',
    formula: () => {
      const a = getRandomValue(50, 100);
      const b = getRandomValue(50, 100);
      const c = getRandomValue(50, 100);
      const d = getRandomValue(50, 100);
      const e = getRandomValue(50, 100);
      const f = getRandomValue(50, 100);
      const g = getRandomValue(50, 100);
      const h = getRandomValue(50, 100);
      const i = getRandomValue(50, 100);
      const j = getRandomValue(50, 100);

      const total = a + b + c + d + e + f + g + h + i + j;
      const result = Number((total / 10).toFixed(2));

      return {
        args: [a, b, c, d, e, f, g, h, i, j],
        examples: createExampleList(result, 2, 'kg'),
        solving: `대략적인 값 70을 기준 잡음
${a-70}   ${b-70}   ${c-70}   ${d-70}   ${e-70}   ${f-70}   ${g-70}   ${h-70}   ${i-70}   ${j-70}
70 + ${total-700}/10
평균 : ${total/10}
`
      }
    }
  },
  {
    title: '10명의 발크기를 나타낸 것이다. 발크기의 평균은?\n\n{0}, {1}, {2}, {3}, {4},\n{5}, {6}, {7}, {8}, {9}\n',
    formula: () => {
      const a = getRandomValue(230, 290);
      const b = getRandomValue(230, 290);
      const c = getRandomValue(230, 290);
      const d = getRandomValue(230, 290);
      const e = getRandomValue(230, 290);
      const f = getRandomValue(230, 290);
      const g = getRandomValue(230, 290);
      const h = getRandomValue(230, 290);
      const i = getRandomValue(230, 290);
      const j = getRandomValue(230, 290);

      const total = a + b + c + d + e + f + g + h + i + j;
      const result = Number((total / 10).toFixed(2));

      return {
        args: [a, b, c, d, e, f, g, h, i, j],
        examples: createExampleList(result, 2, 'mm'),
        solving: `대략적인 값 260을 기준 잡음
${a-260}   ${b-260}   ${c-260}   ${d-260}   ${e-260}   ${f-260}   ${g-260}   ${h-260}   ${i-260}   ${j-260}
260 + ${total-2600}/10
평균 : ${total/10}
`
      }
    }
  }
];
