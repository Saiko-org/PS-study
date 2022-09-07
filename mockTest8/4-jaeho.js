// 프로그래머스 / 72415 / 카드 짝 맞추기
// https://school.programmers.co.kr/learn/courses/30/lessons/72415
// fail : 1시간

const CONTROLROW = [1, -1, 0, 0];
const CONTROLCOLUMN = [0, 0, -1, 1];

function validation (row, column) {
  if (row < 0 || 3 < row || column < 0 || 3 < column) {
    return false;
  }

  return true;
}

function solution(board, r, c) {
  let answer = 0;

  // 아 이게 아닌데 머리아퍼ㅠ 으아으아ㅡ아의의의아ㅡ이ㅡ이ㅏ의ㅡ
  function getDistanceBoard (currentBoard, currentRow, currentColumn) {
    const distanceBoard = Array.from({length: 4}, () => Array.from({length: 4}, () => 17));

    const queue = [[currentRow, currentColumn]];
    distanceBoard[currentRow][currentColumn] = 0;

    while(queue.length > 0) {
      const [cr, cc] = queue.pop();

      for (let index = 0; index < 4; index++) {
        const nr = cr + CONTROLROW[index];
        const nc = cc + CONTROLCOLUMN[index];

        if (validation(nr, nc) && distanceBoard[cr][cc] + 1 < distanceBoard[nr][nc]) {
          if (currentBoard[nr, nc] !== 0) {
            distanceBoard[nr][nc] = 1;
          } else {
            distanceBoard[nr][nc] = distanceBoard[cr][cc] + 1;
          }
          queue.push([nr, nc]);
        }
      }
    }

    return distanceBoard;
  }

  return answer;
}
