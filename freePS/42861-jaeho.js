// 프로그래머스 / 42861 / 섬 연결하기 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/42861
// solve: 1시간 (Kruskal 알고리즘 공부)

function solution(n, costs) {
  // Kruskal 알고리즘
  let answer = 0;
  const parent = Array.from({ length: n }, (_, index) => index);

  const getParent = (node) => {
    if (parent[node] === node) {
      return node;
    } else {
      parent[node] = getParent(parent[node]);
    }
    return parent[node];
  };

  // 가중치 오름차순으로 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 각 부모를 확인하며 어느 집합인지 판단
  for (const [node1, node2, cost] of costs) {
    const node1Parent = getParent(node1);
    const node2Parent = getParent(node2);

    if (node1Parent === node2Parent) {
      // 사이클 형성되는 경우 continue
      continue;
    } else {
      // 각 정점의 부모가 다른 경우
      // 한 집합으로 흡수
      const min = node1Parent < node2Parent ? node1Parent : node2Parent;
      parent[node1Parent] = min;
      parent[node2Parent] = min;
      answer += cost;
    }
  }

  return answer;
}
