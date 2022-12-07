// 프로그래머스 / 12973 / 짝지어 제거하기 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12973
// solve: 25분
// 규칙을 찾다가 계속 딴길로 샜습니다. 깊게 생각하지 않아도 되는 문제였습니다..ㅠ

function solution(n, a, b) {
  let answer = 0;

  let small = Math.min(a - 1, b - 1);
  let big = Math.max(a - 1, b - 1);

  while (small !== big) {
    answer += 1;
    small = Math.floor(small / 2);
    big = Math.floor(big / 2);
  }

  return answer;
}
