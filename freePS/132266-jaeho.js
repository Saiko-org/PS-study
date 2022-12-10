// 프로그래머스 / 132266 / 부대복귀 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/132266
// solve: 30분

function solution(n, roads, sources, destination) {
  const board = new Map();

  const bfs = () => {
    const queue = [destination];
    board.get(destination).count = 1;

    while (queue.length) {
      const current = queue.shift();

      board.get(current).nodes.forEach((node) => {
        if (board.get(node).count === 0) {
          board.get(node).count = board.get(current).count + 1;
          queue.push(node);
        }
      });
    }
  };

  for (let index = 1; index <= n; index++) {
    board.set(index, { count: 0, nodes: [] });
  }

  roads.forEach(([a, b]) => {
    board.get(a).nodes.push(b);
    board.get(b).nodes.push(a);
  });

  bfs();

  return sources.map((node) =>
    board.get(node).count === 0 ? -1 : board.get(node).count - 1
  );
}
