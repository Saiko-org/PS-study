// 프로그래머스 / 72415 / 카드 짝 맞추기
// https://school.programmers.co.kr/learn/courses/30/lessons/72415
// fail: 1시간
// add: 4시간^^

const getDistance = (board, start, end) => {
  const distance = Array.from(Array(4), () => Array(4).fill(0));
  const queue = [[start[0], start[1]]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  distance[start[0]][start[1]] = 0;

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x === end[0] && y === end[1]) {
      return distance[x][y];
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx > 3 || ny > 3) continue;
      if (!distance[nx][ny]) {
        distance[nx][ny] = distance[x][y] + 1;
        queue.push([nx, ny]);
      }

      for (let j = 0; j < 2; j++) {
        // ctrl 이동
        if (board[nx][ny] !== 0) break;
        const nnx = nx + dx[i];
        const nny = ny + dy[i];

        if (nnx < 0 || nny < 0 || nnx > 3 || nny > 3) break;
        nx = nnx;
        ny = nny;
      }

      if (!distance[nx][ny]) {
        distance[nx][ny] = distance[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};

const getMinDistance = (board, cursorPoint) => {
  let minDistance = Infinity;

  for (let cardNumber = 1; cardNumber <= 6; cardNumber++) {
    const cards = [];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === cardNumber) {
          cards.push([i, j]);
        }
      }
    }

    if (cards.length === 0) continue;

    const [cardA, cardB] = cards;

    const cardAToB = getDistance(board, cursorPoint, cardA) + getDistance(board, cardA, cardB) + 2;
    const cardBToA = getDistance(board, cursorPoint, cardB) + getDistance(board, cardB, cardA) + 2;

    board[cardA[0]][cardA[1]] = 0;
    board[cardB[0]][cardB[1]] = 0;

    const accAToBDistance = cardAToB + getMinDistance(board, cardB);
    const accBToADistance = cardBToA + getMinDistance(board, cardA);
    minDistance = Math.min(minDistance, Math.min(accAToBDistance, accBToADistance));

    board[cardA[0]][cardA[1]] = cardNumber;
    board[cardB[0]][cardB[1]] = cardNumber;
  }

  return minDistance === Infinity ? 0 : minDistance;
};

function solution(board, r, c) {
  const startCursorPoint = [r, c];
  return getMinDistance(board, startCursorPoint);
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
