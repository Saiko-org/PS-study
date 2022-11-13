// 프로그래머스 / 12907 / 거스름돈 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/12907
// solve: 30분

function solution(n, money) {
  const board = Array.from({ length: n + 1 }, () => 0);
  board[0] = 1;

  for (const m of money) {
    for (let index = m; index <= n; index++) {
      board[index] += board[index - m];
    }
  }

  return board[n] % 1000000007;
}
