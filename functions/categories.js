const age = require('./generator/age');
const mean = require('./generator/mean');
const percentage = require('./generator/percentage');
const price = require('./generator/price');
const ratio = require('./generator/ratio');
const salt = require('./generator/salt');
const time = require('./generator/time');
const work = require('./generator/work');
const machine = require('./generator/machine');
const speed = require('./generator/speed');
const _ = require('lodash');


const problemList = [
  {
    id: 'age',
    title: '나이',
    count: age.length,
    isPublic: true,
  },
  // clock: clock,
  {
    id: 'mean',
    title: '평균',
    count: mean.length,
    isPublic: true,
  },
  {
    id: 'percentage',
    title: '확률',
    count: percentage.length,
    isPublic: true,
  },
  {
    id: 'price',
    title: '가격',
    count: price.length,
    isPublic: true,
  },
  {
    id: 'ratio',
    title: '비율',
    count: ratio.length,
    isPublic: true,
  },
  {
    id: 'salt',
    title: '농도',
    count: salt.length,
    isPublic: true,
  },
  {
    id: 'time',
    title: '시간',
    count: time.length,
    isPublic: true,
  },
  {
    id: 'work',
    title: '작업',
    count: work.length,
    isPublic: true,
  },
  {
    id: 'machine',
    title: '기계',
    count: machine.length,
    isPublic: true,
  },
  {
    id: 'speed',
    title: '속력',
    count: speed.length,
    isPublic: true,
  }
];

const orderedList = _.orderBy(problemList, (category) => {
  return category.count;
}, 'desc');

module.exports = {
  list: orderedList
};
