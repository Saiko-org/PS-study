// 프로그래머스 / 131701 / 연속 부분 수열 합의 개수 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/131701
// solve: 15분

function solution(elements) {
  const answer = new Set();
  const LEN = elements.length;

  elements = elements.concat(elements);

  for (let len = 1; len <= LEN; len++) {
    for (let index = 0; index < LEN; index++) {
      const total = elements
        .slice(index, index + len)
        .reduce((prev, curr) => prev + curr, 0);
      answer.add(total);
    }
  }

  return answer.size;
}
