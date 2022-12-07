// 프로그래머스 / 43164 / 여행경로
// https://school.programmers.co.kr/learn/courses/30/lessons/43164
// solve: 1시간 20분

function solution(tickets) {
  const answer = [];

  // [아이디어]
  // 그래프를 그려둔다. (인접 리스트로)
  // 해당 정점(공항)의 연결된 리스트를 알파벳 순으로 정렬한다. (한번만 구하기 위해)
  // DFS으로 탐색을 한다.
  // 끝

  // 정점의 갯수 구하기 위해
  const set = new Set();
  for (const [start, end] of tickets) {
    set.add(start);
    set.add(end);
  }

  const graph = new Map();
  const visited = new Map();

  // 각 정점의 빈 배열 만들기
  for (const element of set) {
    graph[element] = [];
    visited[element] = [];
  }

  // 각 정점에서 갈 수 있는 정점 목록 만들기
  for (const [start, end] of tickets) {
    graph[start].push(end);
    visited[start].push(end);
  }

  // 각 정점에서 갈 수 있는 정점 목록 알파벳순으로 정렬
  for (const element of set) {
    graph[element].sort();
  }

  // DFS
  const dfs = (current) => {
    answer.push(current);
    if (answer.length === tickets.length + 1) {
      return true;
    }

    for (const next of graph[current]) {
      // 다음 공항으로 갈 티켓이 남은 경우
      if (visited[current].includes(next) === true) {
        visited[current].splice(visited[current].indexOf(next), 1); // 중복 티켓 고려
        if (dfs(next) === true) {
          return true;
        }
        visited[current].push(next);
      }
    }

    answer.pop();
    return false;
  };

  dfs("ICN");

  return answer;
}
