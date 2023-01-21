// Codility / lesson4 / PermCheck
// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
// solve: 15분

// 선형 탐색
// 1. 0 ~ N + 1개의 boolean 배열 만들기
// 2. 배열 순회하면서 체크하기
// 3. false요소가 있다면 0반환
// 4. 모두 true라면 1반환

function solution(A) {
  const N = A.length;
  const visited = Array.from({ length: N + 1 }, () => false);
  visited[0] = true;

  for (let index = 0; index < N; index++) {
    const a = A[index];
    if (N < a || visited[a]) {
      return 0;
    }

    visited[a] = true;
  }

  return visited.find((v) => !v) ? 0 : 1;
}
