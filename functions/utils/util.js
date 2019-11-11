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
  const answerIndex = getRandomValue(0, 4);
  const result = [];
  if (diff === null) {
    diff = Math.max(getRandomValue(answer * 0.05, answer * 0.15), 1);
  }
  for (let i = 0; i < 5; i++) {
    const example = Number(answer + (diff * (i - answerIndex))).toFixed(2);
    result.push(example + endString);
  }
  result.push(answerIndex);
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
