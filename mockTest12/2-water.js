// 프로그래머스 / 1878 / 나머지 한 점
// https://school.programmers.co.kr/learn/courses/18/lessons/1878
// solve: 10분

function solution(v) {
  let xSet = new Set();
  let ySet = new Set();

  v.forEach(([x, y]) => {
    xSet.has(x) ? xSet.delete(x) : xSet.add(x);
    ySet.has(y) ? ySet.delete(y) : ySet.add(y);
  });

  return [[...xSet][0], [...ySet][0]];
}

console.log(
  solution([
    [1, 4],
    [3, 4],
    [3, 10],
  ])
);
