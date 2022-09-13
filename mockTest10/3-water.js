// 프로그래머스 / 72411 / 메뉴 리뉴얼
// https://school.programmers.co.kr/learn/courses/30/lessons/72411
// solve: 1시간 30분
// 참조: https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

const getCombinations = (arr, selectNumber) => {
  const results = [];

  if (selectNumber === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    results.push(...attached);
  });

  return results;
};

function solution(orders, course) {
  const answer = [];

  course.forEach((onlyMenuCount) => {
    const menuMap = {};
    let maxCombinationCount = 0;

    orders.forEach((order) => {
      const combinations = getCombinations([...order], onlyMenuCount);
      combinations.forEach((combination) => {
        const menu = combination.sort().join('');
        if (menuMap[menu]) {
          menuMap[menu] += 1;
          maxCombinationCount =
            maxCombinationCount < menuMap[menu] ? menuMap[menu] : maxCombinationCount;
        } else {
          menuMap[menu] = 1;
        }
      });
    });

    if (maxCombinationCount >= 2) {
      for (const [key, value] of Object.entries(menuMap)) {
        if (value === maxCombinationCount) {
          answer.push(key);
        }
      }
    }
  });

  return answer.sort();
}

console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));
console.log(solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ'], [2, 3, 5]));
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));
