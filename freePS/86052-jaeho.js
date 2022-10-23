// 프로그래머스 / 86052 / 빛의 경로 사이클 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/72411
// solve: 50분

function solution(grid) {
  const answer = [];
  // 좌 상 우 하
  const DIRECTION_ROW = [0, 1, 0, -1];
  const DIRECTION_COLUMN = [-1, 0, 1, 0];

  const getNextPosition = (direction, row, column) => {
    const command = grid[row][column];

    if (command === "S") {
      const nextR = row + DIRECTION_ROW[direction];
      const nextC = column + DIRECTION_COLUMN[direction];
      const [nextRow, nextColumn] = validateRange(nextR, nextC);
      return [direction, nextRow, nextColumn];
    } else if (command === "L") {
      const nextDirection = (direction + 4 - 1) % 4;
      const nextR = row + DIRECTION_ROW[nextDirection];
      const nextC = column + DIRECTION_COLUMN[nextDirection];
      const [nextRow, nextColumn] = validateRange(nextR, nextC);
      return [nextDirection, nextRow, nextColumn];
    } else if (command === "R") {
      const nextDirection = (direction + 1) % 4;
      const nextR = row + DIRECTION_ROW[nextDirection];
      const nextC = column + DIRECTION_COLUMN[nextDirection];
      const [nextRow, nextColumn] = validateRange(nextR, nextC);
      return [nextDirection, nextRow, nextColumn];
    }
  };

  const validateRange = (row, column) => {
    let validatedRow = row;
    let validatedColumn = column;

    if (row < 0) {
      validatedRow = row + grid.length;
    }
    if (grid.length <= row) {
      validatedRow = row - grid.length;
    }
    if (column < 0) {
      validatedColumn = column + grid[0].length;
    }
    if (grid[0].length <= column) {
      validatedColumn = column - grid[0].length;
    }
    return [validatedRow, validatedColumn];
  };

  const board = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => new Array(4).fill(false))
  );

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      for (let d = 0; d < 4; d++) {
        if (board[r][c][d]) {
          continue;
        }

        let [row, column, direction] = [r, c, d];
        let count = 0;
        while (board[row][column][direction] === false) {
          count += 1;
          board[row][column][direction] = true;

          const [nextD, nextR, nextC] = getNextPosition(direction, row, column);

          row = nextR;
          column = nextC;
          direction = nextD;
        }
        answer.push(count);
      }
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}
