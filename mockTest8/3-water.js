// 프로그래머스 / 81302 / 거리두기 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/81302
// solve: 50분

const isKeepingDistance = (place) => {
  let roomInfo = place.map((rooms) => rooms.split(''));

  let queue = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (roomInfo[i][j] === 'P') {
        queue.push([i, j]);
      }
    }
  }

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (roomInfo[nx][ny] === 'X') continue;
      if (roomInfo[nx][ny] === 'P') return 0;

      for (let i = 0; i < 4; i++) {
        let aroundNX = nx + dx[i];
        let aroundNY = ny + dy[i];

        if (aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5) continue;
        if (aroundNX === x && aroundNY === y) continue;
        if (roomInfo[aroundNX][aroundNY] === 'P') return 0;
      }
    }
  }

  return 1;
};

function solution(places) {
  let keepingDistance = [];
  for (let i = 0; i < 5; i++) {
    keepingDistance.push(isKeepingDistance(places[i]));
  }

  return keepingDistance;
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
);
