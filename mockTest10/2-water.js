// 프로그래머스 / 12916 / 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916
// solve: 3분

function solution(s) {
  let pCount = 0;
  let yCount = 0;

  for (let str of s.toLowerCase()) {
    if (str === 'p') pCount += 1;
    if (str === 'y') yCount += 1;
  }

  return pCount === yCount;
}

console.log(solution('pPoooyY'));
console.log(solution('Pyy'));
