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

      return [a, b, c, d, e, f, g, h, i, j, result, ...createExampleList(result, 2, 'cm')];
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

      return [a, b, c, d, e, f, g, h, i, j, result, ...createExampleList(result, 2, 'kg')];
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

      return [a, b, c, d, e, f, g, h, i, j, result, ...createExampleList(result, 2, 'mm')];
    }
  }
];
