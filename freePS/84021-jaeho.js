// 프로그래머스 / 84021 / 퍼즐 조각 채우기 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/84021
// solve: 60분

function solution(game_board, table) {
  const answer = [];
  const CONTROL_R = [1, -1, 0, 0];
  const CONTROL_C = [0, 0, 1, -1];
  const LEN = game_board.length;
  const game_board_map = new Map();
  const table_map = new Map();

  const toNumber = (arr) => {
    return arr.split(",").map((v) => parseInt(v));
  };

  const spin90Degree = (row, column) => {
    return [column, LEN - row - 1];
  };

  const isSamePuzzle = (puzzle1, puzzle2) => {
    puzzle1.sort((a, b) => {
      const [ar, ac] = a.split(",").map((v) => parseInt(v));
      const [br, bc] = b.split(",").map((v) => parseInt(v));
      if (ar !== br) {
        return ar - br;
      }
      return ac - bc;
    });
    puzzle2.sort((a, b) => {
      const [ar, ac] = a.split(",").map((v) => parseInt(v));
      const [br, bc] = b.split(",").map((v) => parseInt(v));
      if (ar !== br) {
        return ar - br;
      }
      return ac - bc;
    });
    const [standard1_r, standard1_c] = toNumber(puzzle1[0]);
    const [standard2_r, standard2_c] = toNumber(puzzle2[0]);
    for (let index = 0; index < puzzle1.length; index++) {
      const [r1, c1] = toNumber(puzzle1[index]);
      const [r2, c2] = toNumber(puzzle2[index]);
      if (
        r1 - standard1_r !== r2 - standard2_r ||
        c1 - standard1_c !== c2 - standard2_c
      ) {
        return false;
      }
    }
    return true;
  };

  const isMatchPuzzle = (puzzle1, puzzle2) => {
    if (isSamePuzzle(puzzle1, puzzle2)) {
      return true;
    }
    const puzzle2_90 = puzzle2.map((value) =>
      spin90Degree(...toNumber(value)).join(",")
    );
    if (isSamePuzzle(puzzle1, puzzle2_90)) {
      return true;
    }
    const puzzle2_90_90 = puzzle2_90.map((value) =>
      spin90Degree(...toNumber(value)).join(",")
    );
    if (isSamePuzzle(puzzle1, puzzle2_90_90)) {
      return true;
    }
    const puzzle2_90_90_90 = puzzle2_90_90.map((value) =>
      spin90Degree(...toNumber(value)).join(",")
    );
    if (isSamePuzzle(puzzle1, puzzle2_90_90_90)) {
      return true;
    }
    return false;
  };

  const isValid = (row, column) => {
    if (row < 0 || LEN <= row) {
      return false;
    }
    if (column < 0 || LEN <= column) {
      return false;
    }
    return true;
  };

  // game_board, table 퍼즐 추출하기 위한 함수
  const bfs = (startRow, startColumn, board, valid, inValid, map) => {
    const queue = [[startRow, startColumn]];
    board[startRow][startColumn] = inValid;
    const puzzle = [startRow.toString() + "," + startColumn.toString()];

    while (queue.length) {
      const [currentRow, currentColumn] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nextRow = currentRow + CONTROL_R[i];
        const nextColumn = currentColumn + CONTROL_C[i];
        if (
          !isValid(nextRow, nextColumn) ||
          board[nextRow][nextColumn] !== valid
        ) {
          continue;
        }

        board[nextRow][nextColumn] = inValid;
        queue.push([nextRow, nextColumn]);
        puzzle.push(nextRow.toString() + "," + nextColumn.toString());
      }
    }
    const len = puzzle.length;
    if (map.has(len)) {
      map.get(len).push(puzzle);
    } else {
      map.set(len, [puzzle]);
    }
  };

  // 퍼즐 추출
  for (let r = 0; r < LEN; r++) {
    for (let c = 0; c < LEN; c++) {
      if (game_board[r][c] === 0) {
        bfs(r, c, game_board, 0, 1, game_board_map);
      }
    }
  }

  for (let r = 0; r < LEN; r++) {
    for (let c = 0; c < LEN; c++) {
      if (table[r][c] === 1) {
        bfs(r, c, table, 1, 0, table_map);
      }
    }
  }

  // game_board_map 각 퍼즐길이별로 순회
  for (const [game_key, game_puzzle] of game_board_map) {
    // table_map 각 퍼즐길이별로 순회
    for (const [table_key, table_puzzle] of table_map) {
      if (game_key !== table_key) {
        continue;
      }
      const matchedPuzzleIndex = [];
      // game_board_map의 퍼즐과 table_map의 퍼즐 비교
      for (let gpIndex = 0; gpIndex < game_puzzle.length; gpIndex++) {
        const gp = game_puzzle[gpIndex];
        for (let tpIndex = 0; tpIndex < table_puzzle.length; tpIndex++) {
          if (matchedPuzzleIndex.includes(tpIndex)) {
            continue;
          }
          if (isMatchPuzzle(gp, table_puzzle[tpIndex])) {
            matchedPuzzleIndex.push(tpIndex);
            answer.push(game_key);
            break;
          }
        }
      }
    }
  }
  return answer.reduce((sum, current) => sum + current, 0);
}
