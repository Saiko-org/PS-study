// Codility / lesson5 / CountDiv
// https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
// solve: 15분

// 시간복잡도 : O(1)

// 1. A를 K로 나눈 몫과 나머지를 구한다.
// 1-1. 나머지가 0이면 몫을 그대로 사용한다.
// 1-2. 나머지가 0보다 크면 몫+1을 사용한다.
// 2. B를 K로 나눈 몫을 구한다.
// 3. B의 몫 - A의 몫을 반환한다.

function solution(A, B, K) {
  const restA = A % K;
  const quotientA = Math.floor(A / K) + Math.min(restA, 1);
  const quotientB = Math.floor(B / K);
  return quotientB - quotientA + 1;
}
