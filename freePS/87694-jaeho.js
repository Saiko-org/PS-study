// 프로그래머스 / 87694 / 아이템 줍기 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/87694
// solve: 1시간
// point: 좌표 2배로 불리기
// 1. 모든 직사각형 채우기
// 2. 모든 직사각형 내부 비우기
// 3. dfs로 최단 거리 구하기

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const controlX = [-1, 1, 0, 0];
  const controlY = [0, 0, -1, 1];

  const board = Array.from({ length: 102 }, () =>
    Array.from({ length: 102 }, () => false)
  );

  const checkBoard = ([lx, ly, rx, ry]) => {
    for (let x = lx * 2; x <= rx * 2; x++) {
      for (let y = ly * 2; y <= ry * 2; y++) {
        board[x][y] = true;
      }
    }
  };

  const cleanOut = ([lx, ly, rx, ry]) => {
    for (let x = lx * 2 + 1; x < rx * 2; x++) {
      for (let y = ly * 2 + 1; y < ry * 2; y++) {
        board[x][y] = false;
      }
    }
  };

  const bfs = () => {
    const queue = [[characterX * 2, characterY * 2, 0]];

    while (queue.length) {
      const [currentX, currentY, count] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nextX = currentX + controlX[i];
        const nextY = currentY + controlY[i];

        if (board[nextX][nextY]) {
          if (nextX === itemX * 2 && nextY === itemY * 2) {
            return (count + 1) / 2;
          }

          queue.push([nextX, nextY, count + 1]);
          board[nextX][nextY] = false;
        }
      }
    }
  };

  rectangle.forEach((value) => checkBoard(value));
  rectangle.forEach((value) => cleanOut(value));

  return bfs();
}
