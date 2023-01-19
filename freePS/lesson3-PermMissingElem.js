// Codility / lesson3 / PermMissingElem
// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
// solve: 10분

// 공간복잡도 : O(N)
// 시간복잡도 : O(N)
// N+2 길이의 boolean 배열에 사용된 숫자인지 체크. visited
// find 메서드를 이용하여 사용 안한 숫자를 반환

function solution(A) {
  const N = A.length;
  const visited = Array.from({ length: N + 2 }, () => false);
  visited[0] = true;

  A.forEach((e) => (visited[e] = true));

  return visited.findIndex((e) => !e);
}
