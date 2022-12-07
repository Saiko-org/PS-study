// 프로그래머스 / 12900 / 2 x n 타일링 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12900
// solve: 10분

function solution(n) {
  const board = Array.from({ length: n + 1 }, () => 0);
  board[1] = 1;
  board[2] = 2;

  for (let index = 3; index <= n; index++) {
    board[index] = (board[index - 1] + board[index - 2]) % 1000000007;
  }

  return board[n];
}
