// 프로그래머스 / 12973 / 짝지어 제거하기 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12973
// solve: 14분

function solution(s) {
  const stack = [];
  const len = s.length;

  for (let index = 0; index < len; index++) {
    if (stack.length === 0) {
      stack.push(s[index]);
      continue;
    }

    const current = stack.pop();
    const next = s[index];

    if (current !== next) {
      stack.push(current);
      stack.push(next);
    }
  }

  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}
