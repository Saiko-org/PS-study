// 프로그래머스 / 12927 / 야근 지수 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/12927
// solve: 30분

function solution(n, works) {
  const total = works.reduce((prev, curr) => prev + curr, 0);
  if (total <= n) {
    return 0;
  }

  works.sort((a, b) => b - a);
  while (0 < n) {
    works[0] -= 1;
    n -= 1;
    let index = 1;
    for (; index < works.length; index++) {
      if (works[0] < works[index]) {
        break;
      }
    }
    if (index === works.length) {
      continue;
    }
    const temp = works[0];
    works[0] = works[index];
    works[index] = temp;
  }

  return works
    .map((value) => Math.pow(value, 2))
    .reduce((prev, curr) => prev + curr, 0);
}
