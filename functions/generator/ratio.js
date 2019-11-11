const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;
const gcd = util.gcd;

module.exports = [
  {
    title: '어떤 학원의 작년 학생 수는 {0}명이었다. 올해는 작년에 비해 남학생은 {1}% 증가하고, 여학생은 {2}% 감소하여 전체 학생 수에 {3}명 {4}하였다. 이때 작년의 남학생 수를 고르면?',
    formula: () => {
      const boys = getRandomValue(500, 2700, 100);
      const girls = getRandomValue(500, 2700, 100);
      const a = boys + girls;
      const b = getRandomValue(5, 30);
      const c = getRandomValue(5, 30);
      const newBoys = boys * ((100 + b) / 100);
      const newGirs = girls * ((100 - c) / 100);
      const d = newBoys + newGirs;
      const e = a > d ? '감소' : '증가';
      const result = boys;
      return {
        args: [a, b, c, d, e],
        examples: createExampleList(result, 100, '명')
      }
    }
  },
  {
    title: `어느 회사의 신입 사원 공채에서 작년의 전체 지원자 수는 {0}명이었는데 올해는 작년에 비하여 대졸 지원자 수는 {1}% {4}하고, 고졸 지원자 수는 {2}% {5}하여 전체적으로 지원자 수가 {3}명이 되었다고 한다. 이때 올해의 고졸 지원자 수를 고르면?`,
    formula: () => {
      const university = getRandomValue(500, 3000, 100);
      const highschool = getRandomValue(500, 3000, 100);
      const a = university + highschool;
      const b = getRandomValue(-20, 20);
      const c = getRandomValue(-20, 20);
      const newUniversity = Math.round(university * (1 + (b / 100)));
      const newHighschool = Math.round(highschool * (1 + (c / 100)));
      const e = university > newUniversity ? '감소' : '증가';
      const f = highschool > newHighschool ? '감소' : '증가';
      const newTotal = newHighschool + newUniversity;
      const result = newHighschool;
      return {
        args: [a, Math.abs(b), Math.abs(c), newTotal, e, f,],
        examples: createExampleList(result, getRandomValue(10, 100, 10), '명')
      }
    }
  },
  {
    title: `어느 회사 신입사원의 전체 남녀의 비는 {0}:{1}, 생산직 신입 사원의 남녀의 비는 {2}:{3}, 사무직 신입 사원의 남녀 비는 {4}:{5} 이다. 신입 사원의 수가 {6}명일 때, 생산직 신입 사원의 수를 고르면? (단, 신입사원은 생산직과 사무직 뿐이다)`,
    formula: () => {
      const factoryCommonDiv = getRandomValue(10, 100, 10);
      const officeCommonDiv = getRandomValue(10, 100, 10);
      const factoryWoman = getRandomValue(100, 300, factoryCommonDiv);
      const factoryMan = getRandomValue(100, 300, factoryCommonDiv);
      const officeMan = getRandomValue(100, 300, officeCommonDiv);
      const officeWoman = getRandomValue(100, 300, officeCommonDiv);
      const man = factoryMan + officeMan;
      const woman = factoryWoman + officeWoman;

      const gcdManWoman = gcd(man, woman);
      const a = man / gcdManWoman;
      const b = woman / gcdManWoman;

      const gcdFactory = gcd(factoryMan, factoryWoman);
      const c = factoryMan / gcdFactory;
      const d = factoryWoman / gcdFactory;

      const gcdOffice = gcd(officeMan, officeWoman);
      const e = officeMan / gcdOffice;
      const f = officeWoman / gcdOffice;
      const g = man + woman;
      const result = factoryMan + factoryWoman;

      return {
        args: [a, b, c, d, e, f, g],
        examples: createExampleList(result, null, '명')
      }
    }
  }
];
