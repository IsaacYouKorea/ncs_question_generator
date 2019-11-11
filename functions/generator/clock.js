import {getRandomValue, createExampleList} from '../utils/util';

module.exports = [
  {
    title: '{0}시에서 {1}시 사이에 시침과 분침이 정확히 일치하는 시간은 {0}시 x분이다. x의 값은?',
    formula: () => {
      const a = getRandomValue(1, 11);
      const b = a + 1;
      const result = Number((a * 30 / 5.5).toFixed(2));
      return {
        args: [a, b],
        examples: createExampleList(result)
      }
    }
  },
  {
    title: `{0}시에서 {1}시 사이에 시침과 분침이 서로 반대 방향으로 일직선 위에 있을 때의 시각은 {0}시 x분이다. x의 값은?`,
    formula: () => {
      const a = getRandomValue(1, 11);
      const b = a + 1;
      const result = Number(((a * 30 + 180) / 5.5).toFixed(2));
      return {
        args: [a, b],
        examples: createExampleList(result)
      }
    }
  }
];
