// 프로그래머스 / 12978 / 배달 (Lv2 Summer/Winter Coding(~2018))
// https://school.programmers.co.kr/learn/courses/30/lessons/12978
// solve: 22분

function solution(N, road, K) {
  const board = new Map();
  const distance = Array.from({ length: N + 1 }, () => Infinity);
  distance[1] = 0;

  const bfs = (start) => {
    const queue = [];
    queue.push(board.get(start));

    while (queue.length) {
      const towns = queue.shift();

      towns.forEach((town) => {
        const [from, to, weight] = town;

        // 백트래킹
        if (
          distance[from] + weight < distance[to] &&
          distance[from] + weight <= K
        ) {
          distance[to] = distance[from] + weight;
          queue.push(board.get(to));
        }
      });
    }
  };

  // 연결된 마을 및 거리 저장
  road.forEach((value) => {
    const [from, to, weight] = value;
    if (board.has(from)) {
      board.get(from).push([from, to, weight]);
    } else {
      board.set(from, [[from, to, weight]]);
    }

    if (board.has(to)) {
      board.get(to).push([to, from, weight]);
    } else {
      board.set(to, [[to, from, weight]]);
    }
  });

  bfs(1);

  return distance.filter((value) => value !== Infinity).length;
}
