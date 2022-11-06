// 프로그래머스 / 12952 / N-Queen (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12952
// solve: 20분

function solution(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2 || n === 3) {
    return 0;
  }

  let answer = 0;
  const board = Array.from({ length: n }, () => -1);

  const dfs = (index) => {
    if (index === n) {
      answer += 1;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (board.includes(i)) {
        continue;
      }

      let isOk = true;
      for (let f = 0; f < index; f++) {
        const isUpDiagonal = board[f] + f === index + i;
        const isBottomDiagonal = Math.abs(board[f] - i) === Math.abs(f - index);
        if (isUpDiagonal || isBottomDiagonal) {
          isOk = false;
          break;
        }
      }

      if (isOk === false) {
        continue;
      }

      board[index] = i;
      dfs(index + 1);
      board[index] = -1;
    }
  };

  dfs(0);

  return answer;
}
