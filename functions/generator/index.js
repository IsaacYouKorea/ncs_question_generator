const age = require('./age');
const mean = require('./mean');
const percentage = require('./percentage');
const price = require('./price');
const ratio = require('./ratio');
const salt = require('./salt');
const time = require('./time');
const work = require('./work');
const machine = require('./machine');
const speed = require('./speed');
const _ = require('lodash');
const util = require('../utils/util');
const getRandomValue = util.getRandomValue;

const problemList = [
  {
    id: 'age',
    title: '나이',
    problem: age,
    count: age.length,
    isPublic: true,
  },
  // clock: clock,
  {
    id: 'mean',
    title: '평균',
    problem: mean,
    count: mean.length,
    isPublic: true,
  },
  {
    id: 'percentage',
    title: '확률',
    problem: percentage,
    count: percentage.length,
    isPublic: true,
  },
  {
    id: 'price',
    title: '가격',
    problem: price,
    count: price.length,
    isPublic: true,
  },
  {
    id: 'ratio',
    title: '비율',
    problem: ratio,
    count: ratio.length,
    isPublic: true,
  },
  {
    id: 'salt',
    title: '농도',
    problem: salt,
    count: salt.length,
    isPublic: true,
  },
  {
    id: 'time',
    title: '시간',
    problem: time,
    count: time.length,
    isPublic: true,
  },
  {
    id: 'work',
    title: '작업',
    problem: work,
    count: work.length,
    isPublic: true,
  },
  {
    id: 'machine',
    title: '기계',
    problem: machine,
    count: machine.length,
    isPublic: true,
  },
  {
    id: 'speed',
    title: '속력',
    problem: speed,
    count: speed.length,
    isPublic: true,
  }
];


exports.list = _.orderBy(problemList, (category) => {
  return category.count;
}, 'desc');

exports.generate = (type = 'salt', count = 10) => {
  const list = _.find(problemList, {'id': type}).problem;
  const problemCount = _.range(0, count); 
  const resultList = [];
  if (list) {
  _.each(problemCount, (value, key) => {
      const problem = list[getRandomValue(0, list.length - 0.001)];
      const formulaResult = problem.formula();
      const title = this.titleTemplate(problem.title, formulaResult.args);
      resultList.push({
        title,
        examples: formulaResult.examples.labels,
        answerIndex: formulaResult.examples.answerIndex,
        solving: formulaResult.solving ? formulaResult.solving.trim().replace() : '준비중입니다',
      });
    });
  }
  return {
    type,
    quizs: resultList
  }
}

exports.titleTemplate = (title, params) => {
  const result = title.replace(/{\d}+/g, (num) => {
    num = num.replace('{', '');
    num = num.replace('}', '');
    num = Number(num);
    return params ? (params[num] || '') : '';
  });
  return result;
}