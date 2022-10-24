// 프로그래머스 / 77485 / 행렬 테두리 회전하기 (Lv2 2021 데브매칭 백엔드 개발자 상반기)
// https://school.programmers.co.kr/learn/courses/30/lessons/77485
// solve: 30분

function solution(rows, columns, queries) {
  const answer = [];

  const board = Array.from({ length: rows }, (_, index1) =>
    Array.from(
      { length: columns },
      (__, index2) => index1 * columns + index2 + 1
    )
  );

  const pushAnswer = ([r1, c1, r2, c2]) => {
    let num = Infinity;
    for (let c = c1; c <= c2; c++) {
      if (board[r1][c] < num) {
        num = board[r1][c];
      }
      if (board[r2][c] < num) {
        num = board[r2][c];
      }
    }
    for (let r = r1; r <= r2; r++) {
      if (board[r][c1] < num) {
        num = board[r][c1];
      }
      if (board[r][c2] < num) {
        num = board[r][c2];
      }
    }
    answer.push(num);
  };

  const rotateBoard = ([r1, c1, r2, c2]) => {
    const start = board[r1][c1];
    // left
    for (let r = r1; r < r2; r++) {
      board[r][c1] = board[r + 1][c1];
    }
    // bottom
    for (let c = c1; c < c2; c++) {
      board[r2][c] = board[r2][c + 1];
    }
    // right
    for (let r = r2; r > r1; r--) {
      board[r][c2] = board[r - 1][c2];
    }
    // top
    for (let c = c2; c > c1 + 1; c--) {
      board[r1][c] = board[r1][c - 1];
    }
    board[r1][c1 + 1] = start;
  };

  queries.forEach((query) => {
    const vertex = query.map((value) => value - 1);
    pushAnswer(vertex);
    rotateBoard(vertex);
  });

  return answer;
}
