// 프로그래머스 / 43162 / 네트워크 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/43162
// solve: 15분

function solution(n, computers) {
  let answer = 0;

  const bfs = (start) => {
    const queue = [start];

    while (queue.length !== 0) {
      const curr = queue.shift();
      computers[curr][curr] = 0;

      for (let i = 0; i < n; i++) {
        if (curr === i) {
          continue;
        }

        if (computers[curr][i] === 1) {
          queue.push(i);
          computers[curr][i] = 0;
          computers[i][curr] = 0;
        }
      }
    }

    answer += 1;
  };

  for (let row = 0; row < n; row++) {
    if (computers[row][row] === 1) {
      bfs(row);
    }
  }

  return answer;
}
