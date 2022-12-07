// 프로그래머스 / 12902 / 3 x n 타일링 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12902
// solve: 20분

function solution(n) {
  if (n % 2 === 1) {
    return 0;
  }

  const board = Array.from({ length: n + 1 }, () => 0);
  board[0] = 1;
  board[2] = 3;

  for (let index = 4; index <= n; index += 2) {
    board[index] = board[index - 2] * 3;

    for (let subIndex = index - 4; subIndex >= 0; subIndex -= 2) {
      board[index] = board[index] + board[subIndex] * 2;
    }

    board[index] = board[index] % 1000000007;
  }

  return board[n];
}
