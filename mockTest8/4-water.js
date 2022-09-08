const BFS = (board, x, y) => {
  const queue = [[x, y]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (true) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx > 4 || ny < 0 || ny > 4) continue;
      if (board[nx][ny] !== 0) {
        // 카드가 있는 부분
      }
    }
  }
};

function solution(board, r, c) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] !== 0) {
        BFS(board, i, j);
      }
    }
  }
}

console.log(
  solution(
    [
      [1, 0, 0, 3],
      [2, 0, 0, 0],
      [0, 0, 0, 2],
      [3, 0, 1, 0],
    ],
    1,
    0
  )
);

// console.log(
//   solution([
//     [3, 0, 0, 2],
//     [0, 0, 1, 0],
//     [0, 1, 0, 0],
//     [2, 0, 0, 3],
//   ])
// );
