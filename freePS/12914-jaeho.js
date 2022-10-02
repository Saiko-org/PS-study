// 프로그래머스 / 12914 / 멀리 뛰기 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12914
// solve: 20분
// dp 규칙을 이상한 곳에서 찾다가 돌아왔습니다ㅠ

function solution(n) {
  const board = Array.from({ length: n + 1 }, () => 0);
  board[1] = 1;
  board[2] = 2;

  for (let index = 3; index <= n; index++) {
    board[index] = (board[index - 1] + board[index - 2]) % 1234567;
  }

  return board[n];
}
