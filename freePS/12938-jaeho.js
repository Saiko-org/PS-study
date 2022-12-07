// 프로그래머스 / 12938 / 최고의 집합 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/12938
// solve: 15분

function solution(n, s) {
  if (n > s) {
    return [-1];
  }

  const answer = [];

  const q = Math.floor(s / n);
  let r = s % n;
  for (let i = 0; i < n; i++) {
    if (0 < r) {
      answer.push(q + 1);
      r -= 1;
      continue;
    }
    answer.push(q);
  }

  answer.sort((a, b) => a - b);

  return answer;
}
