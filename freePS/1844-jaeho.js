// 프로그래머스 / 1844 / 게임 맵 최단거리 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/1844
// solve: 18분

const controlR = [-1, 1, 0, 0];
const controlC = [0, 0, -1, 1];

function solution(maps) {
  const board = Array.from({ length: maps.length }, () =>
    Array.from({ length: maps[0].length }, () => Infinity)
  );

  const validation = (row, column) => {
    if (
      0 <= row &&
      row < maps.length &&
      0 <= column &&
      column < maps[0].length
    ) {
      if (maps[row][column] !== 0) {
        return true;
      }
    }

    return false;
  };

  const queue = [[0, 0]];
  board[0][0] = 1;
  while (queue.length) {
    const [r, c] = queue.shift();
    for (let index = 0; index < 4; index++) {
      const nextR = r + controlR[index];
      const nextC = c + controlC[index];

      if (validation(nextR, nextC) && board[r][c] + 1 < board[nextR][nextC]) {
        board[nextR][nextC] = board[r][c] + 1;
        queue.push([nextR, nextC]);
      }
    }
  }

  const answer = board[maps.length - 1][maps[0].length - 1];
  return answer === Infinity ? -1 : answer;
}
