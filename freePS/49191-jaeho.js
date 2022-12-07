// 프로그래머스 / 49191 / 순위 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/49191
// solve: 1시간
// 참고 링크 : https://jehwanyoo.net/2022/02/08/프로그래머스-순위/

function solution(n, results) {
  const board = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => false)
  );
  const score = Array.from({ length: n + 1 }, () => [0, 0]);

  results.forEach((value) => {
    const [winner, loser] = value;
    board[winner][loser] = true;
  });

  const bfs = (start) => {
    const queue = [start];
    const visited = Array.from({ length: n + 1 }, () => false);

    while (queue.length !== 0) {
      const current = queue.shift();
      if (!visited[current] && start !== current) {
        score[start][0] += 1;
        score[current][1] += 1;
      }
      visited[current] = true;

      for (let next = 1; next <= n; next++) {
        if (visited[next] || !board[current][next]) {
          continue;
        }
        queue.push(next);
      }
    }
  };

  for (let start = 1; start <= n; start++) {
    bfs(start);
  }

  return score.filter((value) => value[0] + value[1] === n - 1).length;
}
