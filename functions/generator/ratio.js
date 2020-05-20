const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;
const gcd = util.gcd;

module.exports = [
  {
    title: '어떤 학원의 작년 학생 수는 {0}명이었다. 올해는 작년에 비해 남학생은 {1}% 증가하고, 여학생은 {2}% 감소하여 전체 학생 수가 {3}명으로 {4}하였다. 이때 작년의 남학생 수를 고르면?',
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
        examples: createExampleList(result, 100, '명'),
        solving: `작년 남학생 수 x, 여학생 수 y로 가정
x+y = ${a}
(${b}/100)x - (${c}/100)y = ${d-a}
=> ${b}x-${c}y = ${(d - a) * 100}

연립방정식
${c}x + ${c}y = ${c * a}
${b}x - ${c}y = ${(d - a) * 100}
${c+b}x = ${c * a + (d - a) * 100}

x = ${boys}(명)
y = ${a} - ${boys} = ${girls}(명)
`
      }
    }
  },
  {
    title: `어느 회사의 신입 사원 공채에서 작년의 전체 지원자 수는 {0}명이었는데 올해는 작년에 비하여 대졸 지원자 수는 {1}% {4}하고, 고졸 지원자 수는 {2}% {5}하여 전체적으로 지원자 수가 {3}명이 되었다고 한다. 이때 올해의 고졸 지원자 수를 고르면?`,
    formula: () => {
      const university = getRandomValue(500, 3000, 100);
      const highschool = getRandomValue(500, 3000, 100);
      const a = university + highschool;
      const rand1 = getRandomValue(-20, 20);
      const rand2 = getRandomValue(-20, 20);

      const b = rand1 === 0 ? getRandomValue(1, 20) : rand1;
      const c = rand2 === 0 ? getRandomValue(-20, -1) : rand2;

      const newUniversity = Math.round(university * (1 + (b / 100)));
      const newHighschool = Math.round(highschool * (1 + (c / 100)));
      const isSmallerUniversity = university > newUniversity;
      const isSmallerHighschool = highschool > newHighschool;
      const e = isSmallerUniversity ? '감소' : '증가';
      const f = isSmallerHighschool ? '감소' : '증가';
      const newTotal = newHighschool + newUniversity;
      const result = newHighschool;
      return {
        args: [a, Math.abs(b), Math.abs(c), newTotal, e, f,],
        examples: createExampleList(result, getRandomValue(10, 100, 10), '명'),
        solving: `작년 대졸 지원자 수 x, 고졸 지원자 수 y로 가정
x+y = ${a}
(${b}/100)x + (${c}/100)y = ${newTotal-a} => ${b}x${isSmallerHighschool ? '' : '+'}${c}y = ${(newTotal-a)*100}

연립방정식으로 풀면
${b}x+${b}y = ${a*b}
${b}x${isSmallerHighschool ? '' : '+'}${c}y = ${(newTotal-a)*100}
${b-c}y = ${a*b - (newTotal-a)*100}
y = ${(a*b - (newTotal-a)*100) } / ${(b-c)}
y = ${highschool}
올해 고졸 지원자수 = y * ${100 + c}/100 = ${newHighschool}
`
      }
    }
  },
  {
    title: `어느 회사 신입사원의 전체 남녀의 비는 {0}:{1}, 생산직 신입 사원의 남녀의 비는 {2}:{3}, 사무직 신입 사원의 남녀 비는 {4}:{5} 이다. 신입 사원의 수가 {6}명일 때, 생산직 신입 사원의 수를 고르면? (단, 신입사원은 생산직과 사무직 뿐이다)`,
    formula: () => {
      const factoryCommonDiv = getRandomValue(10, 90, 10);
      const officeCommonDiv = getRandomValue(10, 90, 10);
      const factoryWoman = getRandomValue(100, 700, factoryCommonDiv);
      const factoryMan = getRandomValue(100, 700, factoryCommonDiv);
      const officeMan = getRandomValue(100, 700, officeCommonDiv);
      const officeWoman = getRandomValue(100, 700, officeCommonDiv);
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
        examples: createExampleList(result, null, '명'),
        solving: `전체 신입 사원 중 남자 ${g}*${a}/${a+b}=${man}명, 여자는 ${g}*${b}/${a+b}=${woman}명
생산직 남자 신입 사원${c}x, 생산직 여자 신입 사원${d}x
사무직 남자 신입 사원을 ${e}y, 여자를 ${f}y라고 하면
${c}x+${e}y = ${man}
${d}x+${f}y = ${woman} => ${d * e/f}x+${e}y = ${woman * e/f}

연립방정식으로 풀면
${c - (d * (e/f))}x = ${man - (woman*(e/f))}
x=${(man - (woman*(e/f))) / (c - (d * (e/f)))}

생산직 인원 ${result}(명)
`
      }
    }
  }
];
