const numeral = require('numeral');

const getRandomValue = (min, max, divisor = 1, isInteger = true) => {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let result = Math.floor(((Math.random() * (max - min)) + min) / divisor) * divisor;
  if (isInteger) {
    result = Math.floor(result);
  }
  return result;
};
exports.getRandomValue = getRandomValue;

exports.createExampleList = (answer, diff = null, endString = '') => {
  // 정답을 0 ~ 4까지로 결정
  // 정답 번호 앞뒤로 일정 간격 씩 떨어진 보기를 생성
  const count = 5;
  const answerIndex = getRandomValue(0, count - 1);
  const result = {
    labels: [],
    answerIndex
  };
  if (diff === null) {
    // 디폴트 보기 간 값 차이 결정
    // 정답의 5% ~ 15%의 오차 범위를 갖으며 최소값은 1이다
    diff = Math.max(getRandomValue(answer * 0.05, answer * 0.15), 1);
  }
  for (let i = 0; i < count; i++) {
    const example = numeral(answer + (diff * (i - answerIndex))).format('0,0.[00]');
    result.labels.push(example + endString);
  }
  return result;
};

const gcd = (a, b) => {
  if ( ! b) {
    return a;
  }
  return gcd(b, a % b);
}

exports.gcd = gcd;

exports.lcm = (a, b) => {
  return a * b / gcd(a, b);
};