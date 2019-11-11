import age from './age';
// import clock from './clock';
import mean from './mean';
import percentage from './percentage';
import price from './price';
import ratio from './ratio';
import salt from './salt';
import time from './time';
import work from './work';
import machine from './machine';
import speed from './speed';
import _ from 'lodash';

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

const orderedList = _.orderBy(problemList, (category) => {
  return category.count;
}, 'desc');

export default orderedList;
