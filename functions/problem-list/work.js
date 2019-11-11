const util = require('./util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '어떤 일을 마무리하는데 갑이 혼자서 하면 {0}시간이 걸리고, 을이 혼자서 마무리하면 {1}시간이 걸린다고 한다. 이 일을 두 사람이 함께하여 마무리하는데 걸리는 시간은?',
    formula: () => {
      const a = getRandomValue(5, 18);
      const b = a + getRandomValue(1, 10);
      const sum = (1 / a) + (1 / b);
      const result = +(1 / sum).toFixed(2);
      return [a, b, result, ...createExampleList(result, null, '시간')];
    }
  },
  {
    title: `김대리가 먼저 {0}일 동안 한 후, 나머지를 오 사원이 {1}일동안 하면 끝낼 수 있는 일이 있다. 이 일을 김대리가 {2}일동안 한 후, 오 사원이 {3}일동안 하여 끝냈다. 오 사원이 혼자서 이 일을 마치려면 며칠이 걸리겠는가?`,
    formula: () => {
      const a = getRandomValue(3, 15);
      const b = getRandomValue(7, 20);
      const c = getRandomValue(1, a - 1);
      const d = getRandomValue(b + 2, b + 20);
      const result = d - +(c * (b - d) / (a - c)).toFixed(2);
      return [a, b, c, d, result, ...createExampleList(result, null, '일')];
    }
  },
];
