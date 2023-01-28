// Codility / lesson6 / Distinct
// https://app.codility.com/programmers/lessons/6-sorting/distinct/
// solve: 15분

// 시간복잡도 : O(N) ~ O(N * logN)

function solution(A) {
  const result = new Set();
  A.forEach((value) => result.add(value));
  return result.size;
}
