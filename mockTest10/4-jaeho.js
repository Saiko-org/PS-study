// 프로그래머스 / 72413 / 합승 택시 요금
// https://school.programmers.co.kr/learn/courses/30/lessons/72413
// fail: 1시간 (정확성 50/50, 효율성 46.7/50)
// add: 20분

function solution(n, s, a, b, fares) {
  let answer = 200 * 100000 + 1;
  const graph = Array.from({ length: n + 1 }, () => []);

  // [아이디어]
  // 각 정점으로부터 A까지 최소요금, B까지 최소요금, C까지 최소요금을 구하고
  // 이 중 제일 작은것이 최저 택시요금이다.
  // 최소요금은 각 정점에서 BFS, DFS로 누적최소요금을 구해나가는 방법으로 구한다.

  const accumulateBFS = (start) => {
    const fareBoard = Array.from({ length: n + 1 }, () => 200 * 100000 + 1);
    const queue = [];
    queue.push(start);
    fareBoard[start] = 0;

    while (queue.length) {
      const current = queue.shift();

      for (const [next, nextFare] of graph[current]) {
        // 이전에 계산된 최저요금보다 더 낮은 방법인지 확인
        // &&
        // 답안보다 더 작은 최저요금인지 확인 (이 조건 없으면 효율성 7번, 8번 실패)
        if (
          nextFare + fareBoard[current] < fareBoard[next] &&
          nextFare + fareBoard[current] < answer
        ) {
          fareBoard[next] = nextFare + fareBoard[current];
          queue.push(next);
        }
      }
    }

    return fareBoard[s] + fareBoard[a] + fareBoard[b];
  };

  for (const [start, end, fare] of fares) {
    graph[start].push([end, fare]);
    graph[end].push([start, fare]);
  }

  for (let startNode = 1; startNode <= n; startNode++) {
    answer = Math.min(answer, accumulateBFS(startNode));
  }

  return answer;
}
