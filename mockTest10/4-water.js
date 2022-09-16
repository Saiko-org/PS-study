// 프로그래머스 / 72413 / 합승 택시 요금
// https://school.programmers.co.kr/learn/courses/30/lessons/72413
// solve: 50분

function solution(n, s, a, b, fares) {
  const fareInRoad = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

  for (let i = 1; i <= n; i++) {
    fareInRoad[i][i] = 0;
  }

  fares.forEach(([x, y, fare]) => {
    fareInRoad[x][y] = fare;
    fareInRoad[y][x] = fare;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (fareInRoad[i][j] > fareInRoad[i][k] + fareInRoad[k][j]) {
          fareInRoad[i][j] = fareInRoad[i][k] + fareInRoad[k][j];
        }
      }
    }
  }

  let minFare = fareInRoad[s][a] + fareInRoad[s][b];
  for (let i = 1; i <= n; i++) {
    const fareInTogether = fareInRoad[s][i] + fareInRoad[i][a] + fareInRoad[i][b];
    minFare = Math.min(minFare, fareInTogether);
  }

  return minFare;
}

console.log(
  solution(6, 4, 6, 2, [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25],
  ])
);
