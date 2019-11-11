const util = require('../utils/util');
const getRandomValue = util.getRandomValue;
const createExampleList = util.createExampleList;

module.exports = [
  {
    title: '취업 스터디에 남자가 {0}명, 여자가 {1}명인데, 남자 {2}명, 여자 {3}명이 싱글이다. 여기서 임의로 싱글인 사람을 골랐을 때, 여자일 확률은?',
    formula: () => {
      const man = getRandomValue(3, 200);
      const woman = getRandomValue(3, 200);
      const singleMan = getRandomValue(3, man);
      const singleWoman = getRandomValue(3, woman);
      const singleTotal = singleMan + singleWoman;
      const result = Number((singleWoman / singleTotal * 100).toFixed(2));
      return [man, woman, singleMan, singleWoman, result, ...createExampleList(result, getRandomValue(0.3, 2, 0.1, false), '%')];
    }
  },
  {
    title: '취업 스터디에 남자가 {0}명, 여자가 {1}명인데, 남자 {2}명, 여자 {3}명이 싱글이다. 여기서 임의로 싱글인 사람을 골랐을 때, 남자일 확률은?',
    formula: () => {
      const man = getRandomValue(3, 200);
      const woman = getRandomValue(3, 200);
      const singleMan = getRandomValue(3, man);
      const singleWoman = getRandomValue(3, woman);
      const singleTotal = singleMan + singleWoman;
      const result = Number((singleMan / singleTotal * 100).toFixed(2));
      return [man, woman, singleMan, singleWoman, result, ...createExampleList(result, getRandomValue(0.3, 2, 0.1, false), '%')];
    }
  },
  {
    title: '취업 스터디에 남자가 {0}명, 여자가 {1}명인데, 남자 {2}명, 여자 {3}명이 싱글이다. 여기서 임의로 싱글이 아닌 사람을 골랐을 때, 남자일 확률은?',
    formula: () => {
      const man = getRandomValue(3, 200);
      const woman = getRandomValue(3, 200);
      const singleMan = getRandomValue(3, man);
      const singleWoman = getRandomValue(3, woman);
      const coupleTotal = (man - singleMan) + (woman - singleWoman);
      const result = Number(( (man - singleMan) / coupleTotal * 100).toFixed(2));
      return [man, woman, singleMan, singleWoman, result, ...createExampleList(result, getRandomValue(0.3, 2, 0.1, false), '%')];
    }
  },
  {
    title: '취업 스터디에 남자가 {0}명, 여자가 {1}명인데, 남자 {2}명, 여자 {3}명이 싱글이다. 여기서 임의로 싱글이 아닌 사람을 골랐을 때, 여자일 확률은?',
    formula: () => {
      const man = getRandomValue(3, 200);
      const woman = getRandomValue(3, 200);
      const singleMan = getRandomValue(3, man);
      const singleWoman = getRandomValue(3, woman);
      const coupleTotal = (man - singleMan) + (woman - singleWoman);
      const result = Number(( (woman - singleWoman) / coupleTotal * 100).toFixed(2));
      return [man, woman, singleMan, singleWoman, result, ...createExampleList(result, getRandomValue(0.3, 2, 0.1, false), '%')];
    }
  },
  {
    title: `두 색상의 공이 총 {0}개 있다. 이 중 파란색은 {1}개, 흰색은 {2}개이다. 이 중에서 {3}개를 꺼낼 때, 꺼낸 {3}개의 공이 모두 파란색일 확률은 얼마인가`,
    formula: () => {
      const blueBall = getRandomValue(6, 20);
      const whiteBall = getRandomValue(2, blueBall - 2);
      const totalBall = blueBall + whiteBall;
      const extractCount = getRandomValue(2, 5);

      let result = 1;
      for (let i = 0; i < extractCount; i++) {
        result = result * (blueBall - i) / (totalBall - i);
      }

      result = result * 100;

      return [totalBall, blueBall, whiteBall, extractCount, ...createExampleList(result, getRandomValue(0.5, 2, 0.1, false), '%')];
    },
  },
  {
    title: `세 색상의 공이 총 {0}개 있다. 이 중 파란색은 {1}개, 흰색은 {2}개, 빨간색은 {3}개이다. 이 중에서 {4}개를 꺼낼 때, 꺼낸 {4}개의 공이 모두 파란색이 아닐 확률은 얼마인가`,
    formula: () => {
      const blueBall = getRandomValue(6, 20);
      const whiteBall = getRandomValue(2, blueBall - 2);
      const redBall = getRandomValue(2, blueBall - 2);
      const totalBall = blueBall + whiteBall + redBall;
      const extractCount = getRandomValue(2, 5);

      let result = 1;
      for (let i = 0; i < extractCount; i++) {
        result = result * (blueBall - i) / (totalBall - i);
      }

      result = 100 - (result * 100);

      return [totalBall, blueBall, whiteBall, redBall, extractCount, ...createExampleList(result, getRandomValue(0.5, 2, 0.1, false), '%')];
    },
  }
];
